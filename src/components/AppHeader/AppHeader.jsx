import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../AppHeader/AppHeader.module.css";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <div className={styles.item}>
          <a href="#" className={styles.link}>
            <BurgerIcon type="primary" />
            <p className="text text_type_main-default ml-2">Конструктор</p>
          </a>
          <a href="#" className={styles.link}>
            <ListIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive ml-2">
              Лента заказов
            </p>
          </a>
        </div>

        <Logo />
        <div className={styles.item}>
          <a href="#" className={styles.link}>
            <ProfileIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive ml-2">
              Личный кабинет
            </p>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
