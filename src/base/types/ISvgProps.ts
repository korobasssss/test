import { IWithClassName } from './IWithClassName';

export interface ISvgProps extends IWithClassName {
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  stroke?: string;
  fill?: string;
}

export interface ISvgIconWithClick {
  svg: JSX.Element;
  clicked?: () => void;
}
