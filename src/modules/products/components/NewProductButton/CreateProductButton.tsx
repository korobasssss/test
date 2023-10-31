import React, {FC} from 'react';
import styles from './style.module.scss';
import {Button} from "../../../../base/components";

interface IProps {
  onChange: (args: any) => void
}

export const CreateProductButton: FC<IProps> = ({onChange}) => {
  return (
    <div className={styles.container}>
      <Button
        className={styles.button}
        onClick={onChange}
        size="s"
        theme="secondary"
      >
        Создать новый продукт
      </Button>
    </div>
  )
}
