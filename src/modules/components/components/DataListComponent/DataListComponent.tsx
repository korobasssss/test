import React, { FC, useEffect, useState } from 'react';
import style from './style.module.scss';
import { Link } from 'react-router-dom';
import { routeComponentsView } from 'src/base/navigation';
import cx from 'classnames';
import { EDeviceStatus, IDataView, ISelectDefaultData } from 'src/modules/components';

interface IDataList {
  filteredDataById: IDataView[];
  selectArr: ISelectDefaultData[];
}

export const DataListComponent: FC<IDataList> = ({
                                                   filteredDataById,
                                                   selectArr,
                                                 }) => {
  const [filteredDataByStatus, setFilteredDataByStatus] = useState(filteredDataById);

  useEffect(() => {
    if (!selectArr[0].isActive) {
      setFilteredDataByStatus([...filteredDataById].filter(itemFilter => itemFilter.status === selectArr.find(select => select.isActive)?.value));
    } else {
      setFilteredDataByStatus([...filteredDataById]);
    }
  }, [filteredDataById, selectArr]);

  return (
    filteredDataByStatus.map((itemMap, index) => (
      <li key={itemMap.id} className={style.list_section}>
        <div className={style.list_item}>
          <div className={style.id_section}>
            <div className={style.num}>{index + 1}</div>
            <div className={style.data}>{itemMap.id}</div>
          </div>
          <Link to={routeComponentsView.url({ id: itemMap.id })} className={style.status_button}>
            <div>{itemMap.status}</div>
            <div className={cx({
              [style.online]: itemMap.status === EDeviceStatus.ONLINE,
              [style.offline]: itemMap.status === EDeviceStatus.OFFLINE,
            })} />
          </Link>
        </div>
        {
          index !== filteredDataByStatus.length - 1 ?
            <span className={style.ul_border} />
            : null}
      </li>
    ))
  );
};