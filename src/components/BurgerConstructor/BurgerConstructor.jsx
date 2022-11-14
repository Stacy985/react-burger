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

// interface burgerConstrctorProps {
//   image: string;
//   price: number;
//   text: string;
//   name: string;
// }

const BurgerConstructor = ({ingredients}) => {
  const bun = ingredients.find((ingredient) => ingredient.type === "bun");
  const ingredientsData = ingredients.filter((ingredient) => ingredient.type !== "bun")
  return (
    <section className={`${styles.burgerConstrctor} pt-25 pr-4 pl-4`}>
      <div className="ml-8">
        <div className={styles.container}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={bun.price}
            thumbnail={bun.image}
          />

          <ul className={`${styles.list} pr-2`}>
          {/*   <DragIcon type="primary" />

            <ConstructorElement
              text={bun.name}
              price={bun.price}
              thumbnail={bun.image}
            /> */}
     {ingredientsData.map((ingredient)=>{
          return(
            <li key={ingredient._id}
              className="pb-4 pr-2" >
                <DragIcon type="primary" />
                <ConstructorElement
                  isLocked={false}
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}/>
            </li>  
          )
        })}

          </ul>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={bun.price}
            thumbnail={bun.image}
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
