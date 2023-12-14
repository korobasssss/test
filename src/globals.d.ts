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
  import React = require('react');

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
