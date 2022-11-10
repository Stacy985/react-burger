import React from "react";
import PropTypes from "prop-types";
import styles from "../IngredienItem/IngredienItem.module.css";

import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

const IngredienItem = (props) => {
  return (
    <li>
      <img src={props.ingredient.image} alt={props.ingredient.name} />
      <div>
        <p>{props.ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p>{props.ingredient.name}</p>
      <Counter count={1} size="default" />
    </li>
  );
};

/* IngredienItem.protoType = {
  IngredienItem: PropTypes.arrayOf(IngredienItemType.isRequired),
};
 */
export default IngredienItem;
