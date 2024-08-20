import { EDeviceStatus } from 'src/modules/components/constants/EDataStatus';

export interface IDataView {
  id: number
  status: EDeviceStatus
}

export interface IDataOneDeviceView {
  id: number,
  coordinates: string
  status: string,
  speed: number,
  devicePercent: number,
  cableStatus: string
  horseshoe_cable: string
}

export interface ICreateOmniGhostAction {
  id: number,
  status: string,
  speed: number,
  devicePercent: number,
  cableStatus: string
}