declare global {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface Window {
    _env_: any;
  }
}
export {};

declare module '*.gif' {
  const value: any;
  export default value;
}
