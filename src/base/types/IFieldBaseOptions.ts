import { ChangeEventHandler, Ref } from 'react';

export interface IFieldBaseOptions {
  innerRef?: Ref<HTMLInputElement>;
  name: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: ChangeEventHandler<HTMLInputElement>;
  min?: string | number;
  max?: string | number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  required?: boolean;
  disabled?: boolean;
}
