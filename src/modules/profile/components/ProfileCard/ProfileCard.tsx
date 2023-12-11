import React, { FC } from 'react';

import styles from './styles.module.scss';
import { IProfile } from '../../types';

// import { Button } from '../../../../base/components';

interface IProps {
  profile: IProfile | null;
}

export const ProfileCard: FC<IProps> = ({ profile }) => {
  if (!profile) {
    return null;
  }

  return (
    <div className={styles.body}>
      <section className={styles.cards}>
        <div className={styles.cardItem}>
          <div className={styles.topRow}>
            {/*<p>ID: {component.id}</p>*/}
            <p>legalEntityName: {profile.legalEntityName}</p>
            {/*<p>{EComponentStatusTranslate[component.status]}</p>*/}
          </div>
        </div>
        <div className={styles.cardItem}>
          <div className={styles.itemBody}>
            <p>Имя: {profile.name}</p>
            <p>Фамилия: {profile.surname}</p>
            <p>Email: {profile.email}</p>
            <p>additionalInfo: {profile.additionalInfo}</p>
            <p>id: {profile.id}</p>
          </div>
        </div>
        {/*<div className={styles.cardItem}>*/}
        {/*  <div className={styles.buttons}>*/}
        {/*    <Button*/}
        {/*      className={styles.button}*/}
        {/*      onClick={onChangeComponent}*/}
        {/*      size="s"*/}
        {/*      theme="secondary"*/}
        {/*    >*/}
        {/*      Редактировать*/}
        {/*    </Button>*/}
        {/*    <Button*/}
        {/*      className={styles.button}*/}
        {/*      onClick={onDeleteComponent}*/}
        {/*      size="s"*/}
        {/*      theme="secondary"*/}
        {/*    >*/}
        {/*      Удалить*/}
        {/*    </Button>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </section>
    </div>
  );
};
