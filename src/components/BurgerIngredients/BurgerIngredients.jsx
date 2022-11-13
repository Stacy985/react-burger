import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from "../BurgerIngredients/BurgerIngredients.module.css";
import Ingredientpart from "../BurgerIngredients/ingredientPart/ingredientPart";
import { ingredientTypes, ingredientType } from "../../utils/Data";
import Modal from "../Modal/Modal"

const BurgerIngredients = (props) => {
  const main = ingredientTypes.main;
  const bun = ingredientTypes.bun;
  const sauce = ingredientTypes.sauce;
  const [ingredientOpen, setIngredientOpen] = React.useState(false);
  const [ingredienData, setIngredeinData] = React.useState(null);

  const [current, setCurrent] = React.useState("bun");

  const openPopup = (ingredient) => {
    setIngredeinData(ingredient);
    setIngredientOpen(true);
  };

  const closePopup = () => {
    setIngredientOpen(false);
    setIngredeinData(null);
  };

  return (
    <section className={styles.BurgerIngredients}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <div className={styles.tabs}>
        <Tab value="one" active={current === bun} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === sauce} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === main} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={styles.BurgerScrollBar}>
        <h2 className="text text_type_main-medium mt-10 mb-6">Булки</h2>
        <div className={styles.ingredient}>
          {props.ingredients.map(
            (data) =>
              data.type === bun && (
                <Ingredientpart
                  name={data.name}
                  image={data.image}
                  price={data.price}
                  key={data._id}
                />
              )
          )}
        </div>

        <h2 className="text text_type_main-medium mt-10 mb-6">Соусы</h2>
        <div className={styles.ingredient}>
          {props.ingredients.map(
            (data) =>
              data.type === sauce && (
                <Ingredientpart
                  name={data.name}
                  image={data.image}
                  price={data.price}
                  key={data._id}
                />
              )
          )}
        </div>

        <h2 className="text text_type_main-medium mt-10 mb-6">Начинки</h2>
        <div className={styles.ingredient}>
          {props.ingredients.map(
            (data) =>
              data.type === main && (
                <Ingredientpart
                  name={data.name}
                  image={data.image}
                  price={data.price}
                  key={data._id}
                />
              )
          )}
        </div>
      </div>
      {ingredientOpen && (
        <Modal closePopup={closePopup}>
         {/*  <IngredientDetails ingredient={ingredienData} /> */}
        </Modal>
      )}
    </section>
  );

};


export default BurgerIngredients;
