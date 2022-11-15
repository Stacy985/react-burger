import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from "../BurgerIngredients/BurgerIngredients.module.css";
import Ingredientpart from "../BurgerIngredients/ingredientPart/ingredientPart";
import { ingredientTypes, ingredientType } from "../../utils/Data";
import CompoundDetail from "../CompoundDetail/CompoundDetail";

import Modal from "../Modal/Modal";

const BurgerIngredients = (props) => {
  const [current, setCurrent] = React.useState("bun");
  const main = ingredientTypes.main;
  const bun = ingredientTypes.bun;
  const sauce = ingredientTypes.sauce;
  const [ingredientOpen, setIngredientOpen] = React.useState(false);
  const [ingredienData, setIngredeinData] = React.useState(null);
  // попробовать метод $0.scrollIntoView({ behavior: 'smooth' });
  const tabScroll = (tab) => {
    setCurrent(tab);
    const item = document.getElementById(tab);
    if (item) item.scrollIntoView({ behavior: "smooth" });
  };
  const openPopup = (data) => {
    setIngredeinData(data);
    setIngredientOpen(true);
  };

  const closePopup = () => {
    setIngredeinData(null);
    setIngredientOpen(false);
  };
  /*   const closePopup = () => setIngredientModal(null); */

  return (
    <section className={styles.burgerIngredients}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <div className={styles.tabs}>
        <a>
          <Tab value="one" active={current === bun} onClick={tabScroll}>
            Булки
          </Tab>
        </a>
        <a>
          <Tab value="two" active={current === sauce} onClick={tabScroll}>
            Соусы
          </Tab>
        </a>
        <a>
          <Tab value="three" active={current === main} onClick={tabScroll}>
            Начинки
          </Tab>
        </a>
      </div>
      <ul className={styles.burgerScroll}>
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
                  onIngredientClick={() => openPopup(data)}
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
                  onIngredientClick={() => openPopup(data)}
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
                  onIngredientClick={(data) => openPopup(data)}
                  
                />
               
              )
          )}
        </div>
        console.log(Ingredientpart)
      </ul>
      {ingredientOpen && (
        <Modal closePopup={closePopup}>
          <CompoundDetail ingredient={ingredienData} />
        </Modal>
      )}
    </section>
  );
};
BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType).isRequired,
};

export default BurgerIngredients;
