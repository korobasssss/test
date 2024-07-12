import { ISelectDefaultData } from 'src/modules/components';

export const DeviceStatusSelect: ISelectDefaultData[] = [
  {
    id: 0,
    value: 'Online',
    isActive: true,
  },
  {
    id: 1,
    value: 'Offline',
    isActive: false,
  },
];

export const DeviceStatusSelectWithStatus: ISelectDefaultData[] = [
  {
    id: 0,
    value: 'Статус',
    isActive: true,
  },
  {
    id: 1,
    value: 'Online',
    isActive: false,
  },
  {
    id: 2,
    value: 'Offline',
    isActive: false,
  },
];