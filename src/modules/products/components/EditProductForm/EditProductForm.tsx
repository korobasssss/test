import React, {ChangeEventHandler, FC, SyntheticEvent, useCallback, useMemo, useState} from 'react';
import {observer} from 'mobx-react-lite';
import styles from './styles.module.scss';
import {Checkbox, Input, TextArea, Button, Spinner} from "../../../../base/components";
import {IProduct, TProductDataKeys} from "../../types";
import Select, {ISelectDefaultData} from "../../../../base/components/Select/Select";
import {EProductStatus} from "../../constants/EProductStatus";


interface IProps {
  onSubmit: (values: any) => void;
  product: IProduct
}

export const EditProductForm: FC<IProps> = observer(({onSubmit, product}) => {
  const [productState, setProductState] = useState<Partial<IProduct> | null>(product)

  const onChangeFormInput = useCallback(
    (
      key: TProductDataKeys,
    ): ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> =>
      (event) => {
        console.log(event)
        if (event.target.type === "checkbox") {
          // @ts-ignore
          setProductState({...productState, [key]: event.target.checked})
        } else {
          setProductState({...productState, [key]: event.target.value})
        }
      },
    [productState],
  );

  const onSelect = useCallback((data: { data: ISelectDefaultData[], active: ISelectDefaultData }) => {
    console.log(data)
    // const activeEl = data.find(el => el.isActive)
    setProductState({...productState, status: data.active.name})
  }, [productState])


  const handleSubmit = useCallback((e: SyntheticEvent) => {
    e.preventDefault()
    onSubmit(productState)
  }, [onSubmit, productState])

  const statusSelectDefaultData = useMemo(() => {
    const selectData = [
      {
        id: 1,
        label: EProductStatus.SALE,
        name: "SALE",
        value: EProductStatus.SALE,
        isActive: false,
      }, {
        id: 2,
        label: EProductStatus.DRAFT,
        name: "DRAFT",
        value: EProductStatus.DRAFT,
        isActive: true,
      }, {
        id: 3,
        label: EProductStatus.ARCHIVE,
        name: "ARCHIVE",
        value: EProductStatus.DRAFT,
        isActive: false,
      }
    ]

    if (productState?.status) {
      return selectData.map((el) => {
        return {...el, isActive: el.name === productState.status}
      })
    }

    return selectData
  }, [productState?.status])

  if (!productState) return <Spinner/>

  return (
    <>
      <div className={styles.form}>
        <form
          className={styles['form-fields']}
        >
          <div className={styles["form-fields__inputs"]}>
            <Input
              defaultValue={product.name}
              onChange={onChangeFormInput('name')}
              placeholder="Название продукта"
              name="name"
              type='text'
            />
          </div>
          <div className={styles["form-fields__inputs"]}>
            <Input
              defaultValue={product.id}
              onChange={onChangeFormInput('id')}
              placeholder="Номер продукта"
              name="id"
              type='text'
            />
          </div>
          <div className={styles["form-fields__inputs-description"]}>
            <TextArea
              defaultValue={product.description}
              onChange={onChangeFormInput('description')}
              placeholder="Описание продукта"
              name='description'
            />
          </div>
          <div className={styles["form-fields__inputs"]}>
            <Select
              defaultData={statusSelectDefaultData}
              onChange={onSelect}/>
          </div>
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
              initialValue={product.ableToCreateTrialLicence}
              name="ableToCreateTrialLicence"
              onChange={onChangeFormInput('ableToCreateTrialLicence')}
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
              Создать продукт
            </Button>
          </div>
        </form>
      </div>
    </>
  );
});
