import { ISelectDefaultData } from 'src/modules/components';


export const CableStatusSelect: ISelectDefaultData[] = [
  {
    id: 0,
    value: 'Unbuckled',
    isActive: true,
    label: 'Отстегнут'
  },
  {
    id: 1,
    value: 'Buckled',
    isActive: false,
    label: 'Пристегнут'
  },
];