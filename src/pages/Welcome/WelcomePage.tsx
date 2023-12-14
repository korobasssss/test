import React, { ReactElement } from 'react';
import { Button } from 'src/base/components';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { routeProducts } from 'src/base/navigation';

export const WelcomePage = (): ReactElement => {
  return (
    <div className={styles.body}>
      <h1>Welcome Page</h1>
      <p className={styles.description}>
        {
          'Команда разработки создаёт сложный программный продукт, который предполагается продавать через нашу систему. Представитель команды разработки заходит в нашу систему и заносит в неё информацию о своём продукте, делая его доступным для продажи. Программный продукт состоит из одного или более компонентов. Компонент — это часть функциональности, который сам по себе не функционирует и не продаётся, но который можно включить в продукт для расширения его возможностей. \n \n Что может пользователь приложения? \nПредставитель разработчиков может:\n • создавать и изменять продукты и компоненты, принадлежащие его команде;\n • делать продукты доступными или недоступными для продажи;\n • клонировать существующие продукты и компоненты.'
        }
      </p>
      <Link to={routeProducts.url}>
        <Button className={styles.button} theme="secondary">
          Войти
        </Button>
      </Link>
    </div>
  );
};
