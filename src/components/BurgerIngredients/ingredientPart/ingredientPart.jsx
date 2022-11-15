import React from "react";
import PropTypes from "prop-types";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../ingredientPart/ngredientPart.module.css";

const IngredientPart = (props,{onIngredientClick}) => {
  return (
    <li className={styles.ingredientPart} onClick={onIngredientClick}>
      <img className={styles.buns} src={props.image} alt={props.alt} />
      <div className={styles.icons}>
        <h2 className="text text_type_digits-default">{props.price}</h2>
        <CurrencyIcon type="primary" />
      </div>
      <h2 className={`${styles.text} text text_type_main-default`}>{props.name}</h2>
      <Counter count={props.count} size="default" extraClass="m-1" />

    </li>
  );
};

IngredientPart.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number,
  onIngredientClick: PropTypes.func.isRequired,
};

export default IngredientPart;
