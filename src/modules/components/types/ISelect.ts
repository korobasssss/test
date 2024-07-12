export interface ISelectDefaultData {
  id: number;
  label?: any;
  name?: any;
  value: string;
  isActive?: boolean;
}

export interface ISelectActive {
  data: ISelectDefaultData[],
  active: boolean
}