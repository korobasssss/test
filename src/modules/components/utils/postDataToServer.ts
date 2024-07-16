export const postDataToServer = async <T>(data: T): Promise<T> => {
  return new Promise(() => {
    setTimeout(() => {
      console.log(data);
    }, 200)
  })
}