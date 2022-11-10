import React from "react";
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../BurgerConstructor/BurgerConstructor.module.css";
import { ingredientTypes } from "../../utils/Data.jsx";

import PropTypes from "prop-types";

interface burgerConstrctorProps {
  image: string;
  price: number;
  text: string;
  name: string;
}

const BurgerConstructor = (props: burgerConstrctorProps) => {
  return (
    <section className={`${styles.burgerConstrctor} pt-25 pr-4 pl-4`}>
      <div className="ml-8">
        <div className={styles.container}>
      
          
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={props.price}
            thumbnail={props.image}
          />
        
       
          <ul className={`${styles.list} pr-2`}>
          <DragIcon type="primary" />

          <ConstructorElement
                    text={props.name}
                    price={props.price}
                    thumbnail={props.image}
                  />
          </ul>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={props.price}
            thumbnail={props.image}
          />
        </div>
        <div />
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

export default BurgerConstructor;
