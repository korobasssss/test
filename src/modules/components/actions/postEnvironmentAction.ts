import { dataStore } from 'src/modules/components/store';
import { postDataToServer } from 'src/modules/components/utils';

export const postEnvironmentAction = async (data: string): Promise<void> => {
  try {
    await postDataToServer(data)
  } catch (error) {
    console.log(error)
    dataStore.setError(error)
  }
}