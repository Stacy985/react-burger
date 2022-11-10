import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import styles from "../BurgerIngredients/BurgerIngredients.module.css"
/* import IngredienItem from "./IngredienItem/IngredienItem" */

const BurgerIngredients = () => {

  const [current, setCurrent] = React.useState("bun");
  return (
    <section>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <div className={styles.burgerIngredients}>
        <Tab value="one" active={current === "bun"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "sauce"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "main"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <h2 className="text text_type_main-medium mt-10 mb-6">Булки</h2>
      <ul>
    {/*     <IngredienItem /> */}
      </ul>
       <h2 className="text text_type_main-medium mt-10 mb-6">Соусы</h2>
       <ul></ul>
       <h2 className="text text_type_main-medium mt-10 mb-6">Начинки</h2>
       <ul></ul>
    </section>
  );
};



export default BurgerIngredients;
