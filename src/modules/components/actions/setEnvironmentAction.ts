import { dataStore } from 'src/modules/components/store';

const setDataToServer = async (data: string): Promise<any> => {
  return new Promise(() => {
    setTimeout(() => {
      console.log(data);
    }, 1000)
  })
}

export const setEnvironmentAction = async (data: string): Promise<void> => {
  try {
    await setDataToServer(data)
  } catch (error) {
    console.log(error)
    dataStore.setError(error)
  }
}