import { EProductStatus, EProductStatusTranslate } from '../constants';
import { ISelectDefaultData } from '../../../base/components';

export const getSelectData = (
  status?: keyof typeof EProductStatus,
): ISelectDefaultData[] | [] => {
  switch (status) {
    case EProductStatus.DRAFT:
      return [
        {
          id: 1,
          label: EProductStatusTranslate.DRAFT,
          name: EProductStatus.DRAFT,
          value: EProductStatus.DRAFT,
          isActive: true,
        },
        {
          id: 2,
          label: EProductStatusTranslate.AVAILABLE,
          name: EProductStatus.AVAILABLE,
          value: EProductStatus.AVAILABLE,
          isActive: false,
        },
        {
          id: 3,
          label: EProductStatusTranslate.ARCHIVED,
          name: EProductStatus.ARCHIVED,
          value: EProductStatus.ARCHIVED,
          isActive: false,
        },
      ];

    case EProductStatus.AVAILABLE:
      return [
        {
          id: 2,
          label: EProductStatusTranslate.AVAILABLE,
          name: EProductStatus.AVAILABLE,
          value: EProductStatus.AVAILABLE,
          isActive: false,
        },
        {
          id: 3,
          label: EProductStatusTranslate.ARCHIVED,
          name: EProductStatus.ARCHIVED,
          value: EProductStatus.ARCHIVED,
          isActive: false,
        },
      ];

    case EProductStatus.ARCHIVED:
      return [
        {
          id: 3,
          label: EProductStatusTranslate.ARCHIVED,
          name: EProductStatus.ARCHIVED,
          value: EProductStatus.ARCHIVED,
          isActive: false,
        },
      ];

    default:
      return [];
  }
};
