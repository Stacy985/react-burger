import React from "react";
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../BurgerConstructor/BurgerConstructor.module.css";

import PropTypes from "prop-types";

const BurgerConstructor = () => {
  return (
    <section className={styles.burgerConstrctor}>
      <div className={styles.container}>
        <div className="ml-8">
      {/*     <ConstructorElement
            type="top"
            isLocked={true}
            text={name + "(верх)"}
            price={6}
            thumbnail={string.image}
          /> */}
        </div>
        <div />
      </div>
    </section>
  );
};

export default BurgerConstructor;
