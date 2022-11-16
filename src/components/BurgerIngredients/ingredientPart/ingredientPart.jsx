import React from "react";
import PropTypes from "prop-types";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../ingredientPart/ingredientPart.module.css";

const ingredientPart = ({ ingredient, onIngredientClick }) => {
  return (
    <li className={styles.ingredientPart} onClick={onIngredientClick}>
      <img
        className={styles.buns}
        src={ingredient.image}
        alt={ingredient.name}
      />
      <div className={styles.icons}>
        <h2 className="text text_type_digits-default">{ingredient.price}</h2>
        <CurrencyIcon type="primary" />
      </div>
      <h2 className={`${styles.text} text text_type_main-default`}>
        {ingredient.name}
      </h2>
      <div className={styles.iconCount}>
        <Counter count={ingredient.count} size="default" extraClass="m-1" />
      </div>
    </li>
  );
};

ingredientPart.propTypes = {
  ingredient: PropTypes.object.isRequired,
  onIngredientClick: PropTypes.func.isRequired,
  count: PropTypes.number,
};

export default ingredientPart;
