import {EProductStatus} from "../constants/EProductStatus";

export interface IProduct {
  id: string
  number: number
  name: string
  description: string
  status: keyof typeof EProductStatus
  ableToLicenceTransfer: boolean
  ableToCreateTrialLicence: boolean
  componentIds: string[]
  memoryElementIds: string[]
}