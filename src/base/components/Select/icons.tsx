import React, {FC} from 'react';
import {IWithClassName} from '../../types';

interface IAroowIconProps extends IWithClassName {
  isDown?: boolean;
}

export const ArrowIcon: FC<IAroowIconProps> = ({isDown, className}) => {
  return (
    <svg
      width="11"
      height="8"
      viewBox="0 0 11 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{transform: `rotate(${isDown ? 0 : 180}deg)`}}
    >
      <path
        d="M10 1.75L5.5 6.25L1 1.75"
        stroke="#1D4988"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
