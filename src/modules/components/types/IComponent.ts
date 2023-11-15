import { EComponentStatus } from '../constants';

export interface IComponentBase {
  name: string;
  number: number;
  description: string;
}

export interface IComponentView extends IComponentBase {
  id: number;
  status: EComponentStatus;
}

export interface IComponentEdit extends IComponentBase {}

export type TComponentDataKeys = keyof IComponentBase;
