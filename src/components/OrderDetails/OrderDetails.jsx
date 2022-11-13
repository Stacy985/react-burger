import React from "react";
import orderDone from "../images/done.png";

const OrderDetails = () => {
  return (
    <div>
      <h2 className="text text_type_digits-large mb-8">034536</h2>
      <p className="text text_type_main-medium">идентификатор заказа</p>
      <img src={orderDone} alt="{orderDone}" />
      <p className="text text_type_main-default mb-2">
      Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

export default OrderDetails;