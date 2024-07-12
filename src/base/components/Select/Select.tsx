import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import cx from 'classnames';

import styles from './style.module.scss';
import { ArrowIcon } from './icons';
import { DropDownMenuDependent } from './DropDownMenuDependent';
import ScrollWrapper from './ScrollWrapper/ScrollWrapper';
import { ISelectDefaultData } from 'src/modules/components/constants';

interface IProps {
  defaultPlaceholder?: string;
  defaultData: ISelectDefaultData[]; // значение по умолчанию
  className?: string;
  onChange: (res?: any) => void;
  maxSelectHeight?: number; // максимальная высота селекта при скроле
  label?: string;
  theme: 'none' | 'base';
  isDisabled?: boolean;
  errText?: string | number;
  headHeight?: number;
  closeAfterChange?: boolean;
  withClearBtn?: boolean;
  isMultiple?: boolean;
}

export function Select(props: IProps): ReactElement | null {
  const {
    className,
    maxSelectHeight = 220,
    isDisabled,
    errText,
    defaultData,
    onChange,
    closeAfterChange = true,
  } = props;

  const [activeEl, setActiveEl] = useState(
    defaultData.find((element) => element.isActive),
  );
  const [data, setData] = useState(defaultData);
  const [isDown, setIsDown] = useState(false);

  const [header, setHeader] = useState<string>();

  useEffect(() => {
    if (activeEl) {
      if (activeEl?.label) {
        setHeader(activeEl.label);
      } else {
        setHeader(activeEl?.value);
      }
    } else {
      setHeader(props.label);
    }
  }, [props.label, activeEl]);

  useEffect(() => {
    if (defaultData !== data) setData(defaultData);
  }, [data, defaultData]);

  useEffect(() => {
    setActiveEl(defaultData.find((element) => element.isActive));
  }, [defaultData]);

  const getValue = (element: ISelectDefaultData): string | JSX.Element => {
    if (element.label) {
      return element.label;
    }
    return <span>{element.value}</span>;
  };

  const changeIsActive = (id: number): void => {
    setActiveEl(data.find((element: ISelectDefaultData) => element.id === id));
    const newData = data.map((element: ISelectDefaultData) => ({
      ...element,
      isActive: element.id === id,
    }));
    setData(newData);
    setIsDown(!closeAfterChange);
    onChange({
      data: newData,
      active: newData.find((element: ISelectDefaultData) => element.isActive),
    });
  };

  const getBodyData = (): ReactElement | ReactElement[] => {
    // активное значение
    const activeItem = data.find((i) => i.isActive);

    return data.map((element) => (
      <div
        className={cx(
          styles.item,
          (activeItem?.id === element.id || element.isActive) &&
          styles.item_active,
        )}
        onClick={() => {
          changeIsActive(element.id);
        }}
        key={element.id}
      >
        {getValue(element)}
      </div>
    ));
  };

  const changeDropDownHandler = useCallback(
    (value: boolean) => setIsDown(value),
    [],
  );

  return (
    <div className={
      cx(
        className,
        styles.wrapper,
        styles[`wrapper_${props.theme}`],
      )}>
      <DropDownMenuDependent
        changeDropDown={changeDropDownHandler}
        isShow={isDown}
        isDisabled={isDisabled}
        className={styles.header}
        head={
          <div
            className={cx(styles.head, {
              [styles.disabled]: isDisabled,
            })}
          >
            {header}
            {!isDisabled && <ArrowIcon isDown={!isDown} />}
          </div>
        }
      >
        <div className={styles.body}>
          <div className={styles.hr} />
          <ScrollWrapper maxHeight={maxSelectHeight} className={styles.scroll}>
            {getBodyData()}
          </ScrollWrapper>
        </div>
      </DropDownMenuDependent>
      {typeof errText === 'string' && (
        <span className={styles.error_text}>{errText}</span>
      )}
    </div>
  );
}
