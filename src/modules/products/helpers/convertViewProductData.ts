import { IProductEdit, IProductView } from '../types';

export const convertViewProductData = (
  data?: IProductView | null,
): Partial<IProductEdit> => {
  if (!data) {
    return {
      ableToLicenseTransfer: false,
      ableToCreateTrialLicense: false,
      // status: 'DRAFT',
      memoryElementIds: [],
      componentIds: [],
      description: '',
    };
  }

  return {
    componentIds: data.components.map((el) => el.id),
    memoryElementIds: data.memoryElements.map((el) => el.id),
    id: data.id,
    // number: data.number,
    name: data.name,
    description: data.description,
    status: data.status,
    ableToLicenseTransfer: data.ableToLicenseTransfer,
    ableToCreateTrialLicense: data.ableToCreateTrialLicense,
  };
};
