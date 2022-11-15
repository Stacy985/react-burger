import React from "react";
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

const BurgerConstructor = ({ ingredients }) => {
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
                  <ConstructorElement
                    isLocked={false}
                    text={ingredient.name}
                    price={ingredient.price}
                    thumbnail={ingredient.image}
                  />
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

        <div className= {`${styles.containerIcon} mt-10`}>
       
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
