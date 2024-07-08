import React, { FC, useCallback, useRef } from 'react';
import classes from './style.module.scss';
import { IWithClassName } from '../../../types';
import cx from 'classnames';

export interface IDropDownMenuDependent extends IWithClassName {
  head?: any;
  changeDropDown: (value: boolean) => void;
  menuClassName?: string;
  isShow?: boolean;
  isDisabled?: boolean;
  children: JSX.Element;
}

export const DropDownMenuDependent: FC<IDropDownMenuDependent> = (props) => {
  const myRef = useRef<HTMLDivElement>(null);

  const {
    head,
    menuClassName,
    className,
    isShow,
    children = 'no children',
    changeDropDown,
    isDisabled,
  } = props;

  const clickHeadHandler = useCallback(() => {
    if (!isDisabled) {
      changeDropDown(!isShow);
    }
  }, [changeDropDown, isDisabled, isShow]);

  return (
    <div className={cx(className, classes.DropDownMenu)} ref={myRef}>
      <div onClick={clickHeadHandler}>{head}</div>
      {isShow && (
        <div className={cx(menuClassName, classes['DropDownMenu-menu'])}>
          {children}
        </div>
      )}
    </div>
  );
};
