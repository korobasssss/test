import React, {
  ChangeEventHandler,
  FC,
  SyntheticEvent,
  useCallback,
  useMemo,
  // useMemo,
  useState,
} from 'react';
import { observer } from 'mobx-react-lite';
import styles from './styles.module.scss';
import {
  Checkbox,
  Input,
  TextArea,
  Button,
  Spinner,
  Select,
  ISelectDefaultData,
} from '../../../../base/components';
import { IProductEdit, TProductDataKeys } from '../../types';
import Multiselect from '../../../../base/components/MultiSelect/Multiselect';
import { SelectProps } from 'react-multi-select-component';
import { getSelectData } from '../../helpers';

interface IProps {
  onSubmit: (values: any) => void;
  product: Partial<IProductEdit>;
  selectComponentsOptions: SelectProps['options'];
  selectComponentsDefaultData: SelectProps['options'];
  isCreateNewProduct?: boolean;
}

export const EditProductForm: FC<IProps> = observer(
  ({
    onSubmit,
    product,
    isCreateNewProduct,
    selectComponentsOptions,
    selectComponentsDefaultData,
  }) => {
    const [productState, setProductState] =
      useState<Partial<IProductEdit> | null>(product);

    const onChangeFormInput = useCallback(
      (
          key: TProductDataKeys,
        ): ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> =>
        (event) => {
          if (event.target.type === 'checkbox') {
            // @ts-ignore
            setProductState({ ...productState, [key]: event.target.checked });
          } else {
            setProductState({ ...productState, [key]: event.target.value });
          }
        },
      [productState],
    );

    const onSelect = useCallback(
      (data: { data: ISelectDefaultData[]; active: ISelectDefaultData }) => {
        setProductState({ ...productState, status: data.active.name });
      },
      [productState],
    );

    const onSelectComponents = useCallback(
      (selectedValues: SelectProps['options']) => {
        const selectedIds = selectedValues.map((el) => el.value);
        setProductState({ ...productState, componentIds: selectedIds });
      },
      [productState],
    );

    const handleSubmit = useCallback(
      (e: SyntheticEvent) => {
        e.preventDefault();
        onSubmit(productState);
      },
      [onSubmit, productState],
    );

    const statusSelectDefaultData = useMemo(() => {
      const selectData = getSelectData(product.status);

      if (product.status) {
        return selectData.map((el) => {
          return { ...el, isActive: el.name === product.status };
        });
      }

      return selectData;
    }, [product.status]);

    if (!productState) return <Spinner />;

    return (
      <>
        <div className={styles.form}>
          <form className={styles['form-fields']}>
            <div className={styles['form-fields__inputs']}>
              <Input
                defaultValue={product.name}
                onChange={onChangeFormInput('name')}
                placeholder="Название продукта"
                name="name"
                type="text"
              />
            </div>
            <div className={styles['form-fields__inputs']}>
              <Input
                defaultValue={product.number}
                onChange={onChangeFormInput('number')}
                placeholder="Номер продукта"
                name="number"
                type="text"
              />
            </div>
            <div className={styles['form-fields__inputs-description']}>
              <TextArea
                defaultValue={product.description}
                onChange={onChangeFormInput('description')}
                placeholder="Описание продукта"
                name="description"
              />
            </div>
            {!isCreateNewProduct && (
              <div className={styles['form-fields__inputs']}>
                <Select
                  defaultData={statusSelectDefaultData}
                  onChange={onSelect}
                />
              </div>
            )}
            <Multiselect
              wrapperClassName={styles['form-fields__inputs']}
              options={selectComponentsOptions}
              placeholder="Компоненты"
              title="Компоненты"
              defaultValue={selectComponentsDefaultData}
              onChange={onSelectComponents}
            />
            <div className={styles.checkbox}>
              <Checkbox
                initialValue={product.ableToLicenceTransfer}
                name="ableToLicenceTransfer"
                onChange={onChangeFormInput('ableToLicenceTransfer')}
              />
              Возможность переноса лицензии
            </div>
            <div className={styles.checkbox}>
              <Checkbox
                initialValue={product.ableToCreateTrialLicense}
                name="ableToCreateTrialLicence"
                onChange={onChangeFormInput('ableToCreateTrialLicense')}
              />
              Возможность генерации пробных
            </div>
            <div className="center">
              <Button
                className={styles.button}
                theme="secondary"
                type="button"
                size="s"
                onClick={handleSubmit}
              >
                {isCreateNewProduct ? 'Создать продукт' : 'Обновить'}
              </Button>
            </div>
          </form>
        </div>
      </>
    );
  },
);
