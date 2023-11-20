import React, { FC, useCallback, useEffect, useState } from 'react';
import { MultiSelect, SelectProps } from 'react-multi-select-component';
import styles from './style.module.scss';
import { ArrowIcon } from '../Select/icons';
import { IWithClassName } from '../../types';
import cx from 'classnames';

export interface IMultiselectProps extends IWithClassName {
  title?: string;
  wrapperClassName?: string;
  defaultValue?: SelectProps['options'];
  options: SelectProps['options'];
  placeholder?: string;
  searchPlaceholder?: string;
  allItemsAreSelectedPlaceholder?: string;
  selectAllPlaceholder?: string;
  onChange?: (args: SelectProps['options']) => void;
}

const Multiselect: FC<IMultiselectProps> = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    className,
    wrapperClassName,
    defaultValue,
    options,
    onChange,
    ...restProps
  } = props;

  const [selected, setSelected] = useState<SelectProps['options']>([]);

  const arrowRenderer = useCallback(
    ({ expanded }: { expanded: boolean }) => <ArrowIcon isDown={!expanded} />,
    [],
  );

  const onChangeItem = useCallback(
    (selectedValues: SelectProps['options']) => {
      // console.log(selectedValues);
      setSelected(selectedValues);
      if (onChange) {
        onChange(selectedValues);
      }
    },
    [onChange],
  );

  useEffect(() => {
    console.log(defaultValue);
    if (defaultValue) setSelected(defaultValue);
  }, [defaultValue]);

  return (
    <div className={cx(styles.container, wrapperClassName)}>
      <h1>{props.title}</h1>
      <MultiSelect
        options={options}
        value={selected}
        ArrowRenderer={arrowRenderer}
        onChange={onChangeItem}
        labelledBy="Select"
        overrideStrings={{
          selectSomeItems: props.placeholder ?? 'Выберите...',
          search: props.searchPlaceholder ?? 'Поиск',
          allItemsAreSelected:
            props.allItemsAreSelectedPlaceholder ?? 'Выбраны все компоненты',
          selectAll: props.selectAllPlaceholder ?? 'Выбрать все',
        }}
        className={cx(styles.wrapper, className)}
        {...restProps}
      />
    </div>
  );
};

export default Multiselect;
