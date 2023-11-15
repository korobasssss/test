import React, {
  FC,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { MainLayout, Spinner } from '../../../base/components';
import { observer } from 'mobx-react';
import { productStore } from '../store';
import { useParams } from 'react-router-dom';
import { createProductAction, updateProductAction } from '../actions';
import { useNavigateBack } from '../../../base';
import { ReactComponent as BackLogo } from 'src/assets/icons/back.svg';
import { IProductEdit } from '../types';
import { EditProductForm } from '../components/EditProductForm/EditProductForm';
import { toJS } from 'mobx';
import { getProductAction } from '../actions/getProductAction';
import { useNavigate } from 'react-router';
import { convertViewProductData } from '../helpers';
import { routeProductsView } from '../../../base/routes/products/view/routeProductsView';
import { routeHome } from '../../../base/routes/home/routeHome';

export const EditProductContainer: FC = observer(() => {
  const [productData, setProductData] = useState<Partial<IProductEdit> | null>(
    null,
  );

  const params = useParams();
  const isCreateNewProduct = params.id === 'new';
  console.log(params);
  const { goBack } = useNavigateBack();
  const navigate = useNavigate();

  const { viewProduct } = productStore;

  useLayoutEffect(() => {
    productStore.setViewProduct(null);
  }, []);

  useEffect(() => {
    if (!isCreateNewProduct) {
      getProductAction({ productId: params.id! }).then(() => {
        console.log(toJS(productStore.viewProduct));
        setProductData(convertViewProductData(productStore.viewProduct));
      });
    } else {
      setProductData(convertViewProductData(null));
    }
  }, [isCreateNewProduct, params.id]);

  const handleSubmit = useCallback(
    (data: IProductEdit) => {
      try {
        if (isCreateNewProduct) {
          createProductAction(data);
        } else {
          if (viewProduct?.id) {
            updateProductAction({
              productId: viewProduct?.id,
              data: {
                ...data,
                id: undefined,
              },
            });
          }
        }
      } finally {
        if (viewProduct?.id) {
          navigate(routeProductsView.url({ id: viewProduct.id }));
        } else {
          navigate(routeHome.url);
        }
      }
    },
    [isCreateNewProduct, navigate, viewProduct?.id],
  );

  if (productData === null) return <Spinner />;

  return (
    <MainLayout
      topTitle="EditProductContainer"
      leftTopIcon={{
        svg: <BackLogo />,
        clicked: () => goBack(),
      }}
    >
      <EditProductForm
        product={productData}
        onSubmit={handleSubmit}
        isCreateNewProduct={isCreateNewProduct}
      />
    </MainLayout>
  );
});
