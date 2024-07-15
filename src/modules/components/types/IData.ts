import { EDeviceStatus } from 'src/modules/components/constants/EDataStatus';

export interface IDataView {
  id: number
  status: EDeviceStatus
}

export interface ICreateOmniGhostAction {
  deviceId: string,
  status: string,
  speed: string,
  devicePercent: string,
  cableStatus: string
}