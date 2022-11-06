import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.css";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className="header__navigation">
          <a href="#">
            <BurgerIcon type="primary" />
            <p className="header__text">Конструктор</p>
          </a>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
