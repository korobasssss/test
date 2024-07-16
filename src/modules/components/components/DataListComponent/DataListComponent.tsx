import React, { FC, useEffect, useState } from 'react';
import style from './style.module.scss';
import { Link } from 'react-router-dom';
import { routeComponentsView } from 'src/base/navigation';
import cx from 'classnames';
import { EDeviceStatus, IDataView } from 'src/modules/components';
import { isArray } from 'src/base';
import { TextNoData } from 'src/base/components/TextNoData/TextNoData';

interface IDataList {
  data: IDataView[];
  selectValue: string | undefined;
}

export const DataListComponent: FC<IDataList> = ({
                                                   data,
                                                   selectValue,
                                                 }) => {
  const [filteredDataByStatus, setFilteredDataByStatus] = useState(data);

  useEffect(() => {
    if (!selectValue || selectValue === 'Статус') {
      setFilteredDataByStatus(data)
    }else {
      setFilteredDataByStatus(data.filter(itemFilter => itemFilter.status === selectValue)
      );
    }
  }, [data, selectValue]);

  return (
    isArray(filteredDataByStatus) ?
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
      :
      <TextNoData/>
  );
};