import { ISelectDefaultData } from 'src/modules/components';
import { ECableStatus, ECableStatusTranslate } from 'src/modules/components/constants';


export const CableStatusSelect: ISelectDefaultData[] = [
  {
    id: 0,
    value: ECableStatus.UNBUCKLED,
    isActive: true,
    label: ECableStatusTranslate.UNBUCKLED
  },
  {
    id: 1,
    value: ECableStatus.BUCKLED,
    isActive: false,
    label: ECableStatusTranslate.BUCKLED
  },
];