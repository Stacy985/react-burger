import React, { useContext, useReducer } from "react";
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../BurgerConstructor/BurgerConstructor.module.css";
import { ingredientType } from "../../utils/Data.jsx";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import PropTypes from "prop-types";
import { IngredientsContext } from "../../context/ingredientsContext";

const BurgerConstructor = ({ ingredientsID }) => {
  const { ingredients } = useContext(IngredientsContext);
  const bun = ingredients.find((ingredient) => ingredient.type === "bun");
  const ingredientsData = ingredients.filter(
    (ingredient) => ingredient.type !== "bun"
  );
  const [orderDetalsOpen, setIngredientOpen] = React.useState(false);
  const openPopup = () => {
    setIngredientOpen(true);
  };

  const closePopup = () => {
    setIngredientOpen(false);
  };
  const handleEscKeydown = (evt) => {
    evt.key === "Escape" && closePopup();
  };

  const initialPrice = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "set":
        return { price: action.payload };
      case "reset":
        return initialPrice;
      default:
        throw new Error(`Wrong type of action: ${action.type}`);
    }
  };
  const [costOfFilling, costOfFillingDispatcher] = useReducer(
    reducer,
    initialPrice
  );

  return (
    <section className={`${styles.burgerConstrctor} pl-10 pt-20`}>
      <div className={styles.containerButton}>
        <div className={styles.container}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={bun.price}
            thumbnail={bun.image}
          />

          <ul className={`${styles.burgerScroll} pr-2`}>
            {ingredientsData.map((ingredient) => {
              return (
                <li
                  key={ingredient._id}
                  className={`${styles.component} pb-4 pr-2`}
                >
                  <DragIcon type="primary" />
                  <div className={styles.constElement}>
                    <ConstructorElement
                      isLocked={false}
                      text={ingredient.name}
                      price={ingredient.price}
                      thumbnail={ingredient.image}
                    />
                  </div>
                </li>
              );
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

        <div className={`${styles.containerIcon} mt-10`}>
          <div className={styles.containerCount}>
            <p className="text text_type_digits-medium mr-2">{610}</p>
            <CurrencyIcon type="primary" />
          </div>

          <Button
            htmlType="button"
            type="primary"
            size="large"
            onClick={openPopup}
          >
            Оформить заказ
          </Button>
        </div>
      </div>

      {orderDetalsOpen && (
        <Modal closePopup={closePopup} onEscKeydown={handleEscKeydown}>
          <OrderDetails></OrderDetails>
        </Modal>
      )}
    </section>
  );
};
BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType).isRequired,
};

export default BurgerConstructor;
