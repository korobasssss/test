import React, { FC, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './style.module.scss';

export interface ISpinner {
  inline?: boolean;
}
export const Spinner: FC<ISpinner> = ({ inline = false }: ISpinner) => {
  const [destinationExists, setDestinationExists] = useState(false);
  const destinationElement = useRef<HTMLDivElement>();
  useEffect(() => {
    destinationElement.current = document.createElement('div');
    destinationElement.current.classList.add('VBSpinnerDestination');
    document.body.append(destinationElement.current);
    setDestinationExists(true);

    return () => {
      destinationElement.current?.remove();
      setDestinationExists(false);
    };
  }, []);

  return (
    <>
      {inline ? (
        <div className={styles['VBSpinner-spinner-inline']} />
      ) : (
        destinationExists &&
        destinationElement.current &&
        createPortal(
          <div className={styles['VBSpinner-container']}>
            <div className={styles['VBSpinner-spinner']} />
          </div>,
          destinationElement.current,
        )
      )}
    </>
  );
};
