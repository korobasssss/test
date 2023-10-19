import {productStore} from "../store";
import {axiosInstance} from "../../../base/api";
import {IProduct} from "../types/IProduct";

const mockData = [
  {
    "id": "1",
    "number": 123,
    "name": "Object 1",
    "description": "Description for Object 1",
    "status": "DRAFT",
    "ableToLicenceTransfer": true,
    "ableToCreateTrialLicence": true,
    "componentIds": ["comp1"],
    "memoryElementIds": ["mem1"]
  },
  {
    "id": "2",
    "number": 456,
    "name": "Object 2",
    "description": "Description for Object 2",
    "status": "SALE",
    "ableToLicenceTransfer": false,
    "ableToCreateTrialLicence": true,
    "componentIds": ["comp2"],
    "memoryElementIds": ["mem2"]
  },
  {
    "id": "3",
    "number": 789,
    "name": "Object 3",
    "description": "Description for Object 3",
    "status": "ARCHIVE",
    "ableToLicenceTransfer": true,
    "ableToCreateTrialLicence": false,
    "componentIds": ["comp3"],
    "memoryElementIds": ["mem3"]
  },
  {
    "id": "4",
    "number": 101112,
    "name": "Object 4",
    "description": "Description for Object 4",
    "status": "DRAFT",
    "ableToLicenceTransfer": false,
    "ableToCreateTrialLicence": false,
    "componentIds": ["comp4"],
    "memoryElementIds": ["mem4"]
  },
  {
    "id": "5",
    "number": 131415,
    "name": "Object 5",
    "description": "Description for Object 5",
    "status": "DRAFT",
    "ableToLicenceTransfer": true,
    "ableToCreateTrialLicence": true,
    "componentIds": ["comp5"],
    "memoryElementIds": ["mem5"]
  }
];


export const getProductsAction = async (
  ownerId: string | number = 1,
): Promise<void> => {

  productStore.setLoading();
  try {
    const res = await axiosInstance<IProduct[]>({
      url: `/api/owners/${ownerId}/products`,
    });
    console.log(res.data)
    // productStore.setFinished(res.data);
  } catch (e) {
    console.log(e);
    productStore.setError(e)
  }
  //@ts-ignore
  productStore.setFinished(mockData);
};
