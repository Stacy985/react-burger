import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from "../BurgerIngredients/BurgerIngredients.module.css";
import Ingredientpart from "../BurgerIngredients/ingredientPart/ingredientPart";
import { ingredientTypes, ingredientType } from "../../utils/Data";
import CompoundDetail from "../CompoundDetail/CompoundDetail";
import Modal from "../Modal/Modal";

const BurgerIngredients = ({ ingredients }) => {
  const [current, setCurrent] = React.useState("bun");
  const main = ingredientTypes.main;
  const bun = ingredientTypes.bun;
  const sauce = ingredientTypes.sauce;

  const [ingredientOpen, setIngredientOpen] = React.useState(false);
  const [ingredienData, setIngredeinData] = React.useState(null);

  const tabScroll = (tab) => {
    setCurrent(tab);
    const item = document.getElementById(tab);
    if (item) item.scrollIntoView({ behavior: "smooth" });
  };

  const openPopup = (ingredient) => {
    setIngredeinData(ingredient);
    setIngredientOpen(true);
  };

  const closePopup = () => {
    setIngredeinData(null);
    setIngredientOpen(false);
  };

  return (
    <section className={styles.burgerIngredients}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <div className={styles.tabs}>
        <Tab value="one" active={current === bun} onClick={tabScroll}>
          Булки
        </Tab>

        <Tab value="two" active={current === sauce} onClick={tabScroll}>
          Соусы
        </Tab>

        <Tab value="three" active={current === main} onClick={tabScroll}>
          Начинки
        </Tab>
      </div>
      <div>
        <ul className={styles.burgerScroll}>
          <h2 className="text text_type_main-medium mt-10 mb-6">Булки</h2>
          <div className={styles.ingredient}>
            {ingredients.map(
              (ingredient) =>
                ingredient.type === bun && (
                  <Ingredientpart
                    ingredient={ingredient}
                    key={ingredient._id}
                    onIngredientClick={() => openPopup(ingredient)}
                  />
                )
            )}
          </div>

          <h2 className="text text_type_main-medium mt-10 mb-6">Соусы</h2>

          <div className={styles.ingredient}>
            {ingredients.map(
              (ingredient) =>
                ingredient.type === sauce && (
                  <Ingredientpart
                    ingredient={ingredient}
                    key={ingredient._id}
                    onIngredientClick={() => openPopup(ingredient)}
                  />
                )
            )}
          </div>
          <h2 className="text text_type_main-medium mt-10 mb-6">Начинки</h2>

          <div className={styles.ingredient}>
            {ingredients.map(
              (ingredient) =>
                ingredient.type === main && (
                  <Ingredientpart
                    ingredient={ingredient}
                    key={ingredient._id}
                    onIngredientClick={() => openPopup(ingredient)}
                  />
                )
            )}
          </div>
        </ul>
      </div>

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
