import React, { useCallback } from 'react';
import { FieldPath, ControllerRenderProps, FieldValues } from 'react-hook-form';
import { Checkbox, ICheckboxProps } from './Checkbox';

type TRenderCheckbox = <P extends FieldValues, T extends FieldPath<P>>(
  checkboxProps: Omit<ICheckboxProps, 'name'>,
) => ({ field }: { field: ControllerRenderProps<P, T> }) => JSX.Element;

interface IResult {
  renderCheckbox: TRenderCheckbox;
}

export const useRenderCheckbox = (): IResult => {
  const renderCheckbox: TRenderCheckbox = useCallback(
    (checkboxProps) =>
      // Тип пропсов определен в типе TRenderCheckbox, но линтер этого не видит
      // eslint-disable-next-line react/prop-types
      ({ field }) => {
        return <Checkbox {...checkboxProps} {...field} />;
      },
    [],
  );

  return { renderCheckbox };
};
