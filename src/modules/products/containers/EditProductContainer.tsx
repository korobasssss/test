import React, {
  FC,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import { MainLayout, Spinner } from '../../../base/components';
import { observer } from 'mobx-react';
import { productStore } from '../store';
import {
  createProductAction,
  getAllComponentsAction,
  updateProductAction,
} from '../actions';
import { isArray, useNavigateBack } from '../../../base';
import { ReactComponent as BackLogo } from 'src/assets/icons/back.svg';
import { IProductEdit } from '../types';
import { EditProductForm } from '../components/EditProductForm/EditProductForm';
import { getProductAction } from '../actions/getProductAction';
import { useNavigate } from 'react-router';
import { convertViewProductData } from '../helpers';
import {
  routeProducts,
  routeProductsEdit,
  routeProductsView,
} from '../../../base/routes';

export const EditProductContainer: FC = observer(() => {
  const [productData, setProductData] = useState<Partial<IProductEdit> | null>(
    null,
  );

  const { id } = routeProductsEdit.useParams();
  const isCreateNewProduct = id === 'new';

  const { goBack } = useNavigateBack();
  const navigate = useNavigate();

  const { viewProduct, componentsData } = productStore;

  const selectComponentsOptions = useMemo(() => {
    if (componentsData && isArray(componentsData)) {
      return componentsData.map((el) => {
        return {
          id: el.id,
          label: el.name,
          value: el.id,
        };
      });
    }
    return [];
  }, [componentsData]);

  const selectComponentsDefaultData = useMemo(() => {
    if (viewProduct?.components && isArray(viewProduct.components)) {
      return viewProduct.components.map((el) => {
        return {
          // id: el.id,
          label: el.name,
          value: el.id,
        };
      });
    }
    return [];
  }, [viewProduct?.components]);

  useLayoutEffect(() => {
    productStore.setViewProduct(null);
  }, []);

  useEffect(() => {
    getAllComponentsAction();

    if (!isCreateNewProduct) {
      getProductAction({ productId: id }).then(() => {
        setProductData(convertViewProductData(productStore.viewProduct));
      });
    } else {
      setProductData(convertViewProductData(null));
    }
  }, [isCreateNewProduct, id]);

  const handleSubmit = useCallback(
    (data: IProductEdit) => {
      if (isCreateNewProduct) {
        createProductAction(data).then(() => navigate(routeProducts.url));
      } else {
        if (viewProduct?.id) {
          updateProductAction({
            productId: viewProduct?.id,
            data: {
              ...data,
              id: undefined,
            },
          }).then(() => navigate(routeProductsView.url({ id })));
        }
      }
    },
    [id, isCreateNewProduct, navigate, viewProduct?.id],
  );

  if (productData === null) return <Spinner />;

  return (
    <MainLayout
      topTitle={
        isCreateNewProduct ? 'Создание продукта' : 'Редактирование продукта'
      }
      leftTopIcon={{
        svg: <BackLogo />,
        clicked: () => goBack(),
      }}
    >
      <EditProductForm
        product={productData}
        selectComponentsDefaultData={selectComponentsDefaultData}
        onSubmit={handleSubmit}
        isCreateNewProduct={isCreateNewProduct}
        selectComponentsOptions={selectComponentsOptions}
      />
    </MainLayout>
  );
});
