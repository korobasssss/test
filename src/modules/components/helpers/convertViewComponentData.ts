import { IComponentEdit, IComponentView } from '../types';

export const convertViewComponentData = (
  data?: IComponentView | null,
): Partial<IComponentEdit> => {
  if (!data) {
    return {
      // status: 'AVAILABLE',
      description: '',
      number: 0,
      name: '',
    };
  }

  return {
    // id: data.id,
    number: data.number,
    name: data.name,
    description: data.description,
    status: data.status,
  };
};
