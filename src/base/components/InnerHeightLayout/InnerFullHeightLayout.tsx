import React, { FC, useRef } from 'react';
import { useClientHeight } from '../../hooks';
import { IWithChildren } from '../../types';

export interface IProps extends IWithChildren {}

export const InnerFullHeightLayout: FC<IProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const height = useClientHeight();
  const styleWithRealHeight = {
    height: height ? `${height}px` : '100vh',
  };

  return (
    <div ref={ref} style={styleWithRealHeight}>
      {children}
    </div>
  );
};
