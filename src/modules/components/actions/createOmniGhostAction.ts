import { dataStore } from 'src/modules/components/store';

const postDataToServer = (data: ICreateOmniGhostAction): Promise<any> => {
  return new Promise(() => {
    setTimeout(() => {
      console.log(data)
    }, 200)
  })
}

interface ICreateOmniGhostAction {
  deviceId: string,
  status: string,
  speed: string,
  devicePercent: string,
  cableStatus: string
}

export const createOmniGhostAction = async (data: ICreateOmniGhostAction): Promise<void> => {
  try {
    await postDataToServer(data);
  } catch(error) {
    console.log(error)
    dataStore.setError(error)
  }
}