import React, {
  ChangeEventHandler,
  FC,
  SyntheticEvent,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { observer } from 'mobx-react-lite';
import styles from './styles.module.scss';
import {
  Input,
  TextArea,
  Button,
  Spinner,
  ISelectDefaultData,
  Select,
} from '../../../../base/components';
import { IComponentEdit, TComponentDataKeys } from '../../types';
import { EComponentStatus } from '../../constants';

interface IProps {
  onSubmit: (values: any) => void;
  component: Partial<IComponentEdit>;
  isCreateNewComponent?: boolean;
}

export const EditComponentForm: FC<IProps> = observer(
  ({ onSubmit, component, isCreateNewComponent }) => {
    const [componentState, setComponentState] =
      useState<Partial<IComponentEdit> | null>(component);

    const onChangeFormInput = useCallback(
      (
          key: TComponentDataKeys,
        ): ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> =>
        (event) => {
          setComponentState({ ...componentState, [key]: event.target.value });
        },
      [componentState],
    );

    const onSelect = useCallback(
      (data: { data: ISelectDefaultData[]; active: ISelectDefaultData }) => {
        setComponentState({ ...componentState, status: data.active.name });
      },
      [componentState],
    );

    const handleSubmit = useCallback(
      (e: SyntheticEvent) => {
        e.preventDefault();
        onSubmit(componentState);
      },
      [onSubmit, componentState],
    );

    const statusSelectDefaultData = useMemo(() => {
      const selectData = [
        {
          id: 1,
          label: EComponentStatus.AVAILABLE,
          name: 'AVAILABLE',
          value: EComponentStatus.AVAILABLE,
          isActive: false,
        },
        {
          id: 3,
          label: EComponentStatus.ARCHIVE,
          name: 'ARCHIVE',
          value: EComponentStatus.ARCHIVE,
          isActive: false,
        },
      ];

      if (componentState?.status) {
        return selectData.map((el) => {
          return { ...el, isActive: el.name === componentState.status };
        });
      }

      return selectData;
    }, [componentState?.status]);

    if (!componentState) return <Spinner />;

    return (
      <>
        <div className={styles.form}>
          <form className={styles['form-fields']}>
            <div className={styles['form-fields__inputs']}>
              <Input
                defaultValue={component.name}
                onChange={onChangeFormInput('name')}
                placeholder="Название продукта"
                name="name"
                type="text"
              />
            </div>
            <div className={styles['form-fields__inputs']}>
              <Input
                defaultValue={component.number}
                onChange={onChangeFormInput('number')}
                placeholder="Номер продукта"
                name="number"
                type="text"
              />
            </div>
            <div className={styles['form-fields__inputs-description']}>
              <TextArea
                defaultValue={component.description}
                onChange={onChangeFormInput('description')}
                placeholder="Описание продукта"
                name="description"
              />
            </div>
            {!isCreateNewComponent && (
              <div className={styles['form-fields__inputs']}>
                <Select
                  defaultData={statusSelectDefaultData}
                  onChange={onSelect}
                />
              </div>
            )}
            <div className="center">
              <Button
                className={styles.button}
                theme="secondary"
                type="button"
                size="s"
                onClick={handleSubmit}
              >
                {isCreateNewComponent ? 'Создать компонент' : 'Обновить'}
              </Button>
            </div>
          </form>
        </div>
      </>
    );
  },
);
