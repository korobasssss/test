export const isNumber = (data: string) : boolean => {
  const n = Math.floor(Number(data));
  return data !== '' && n !== Infinity && String(n) === data && n >= 0;
}