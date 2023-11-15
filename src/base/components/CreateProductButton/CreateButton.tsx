import React, { FC } from 'react';
import styles from './style.module.scss';
import { Button } from '../index';

interface IProps {
  onChange: (args: any) => void;
  title: string;
}

export const CreateButton: FC<IProps> = ({ onChange, title }) => {
  return (
    <div className={styles.container}>
      <Button
        className={styles.button}
        onClick={onChange}
        size="s"
        theme="secondary"
      >
        {title}
      </Button>
    </div>
  );
};
