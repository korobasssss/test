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

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
