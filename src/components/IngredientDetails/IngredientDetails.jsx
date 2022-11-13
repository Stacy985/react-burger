import PropTypes from "prop-types";
import { ingredientType } from "../../utils/Data";

const IngredientDetails = ({ ingredient }) => {
  return (
    <div>
      <img src={ingredient.image_large} alt={ingredient.name} />
      <h3 className="text text_type_main-medium mt-4 mb-8">
        {ingredient.name}
      </h3>
      <ul>
        <li>
          <p className="text text_type_main-default">Калории,ккал</p>
          <p className="text text_type_digits-default">
            {" "}
            {ingredient.calories}
          </p>
        </li>
        <li>
          <p className="text text_type_main-default">Белки, г</p>
          <p className="text text_type_digits-default">
            {" "}
            {ingredient.proteins}
          </p>
        </li>
        <li>
          <p className="text text_type_main-default">Жиры, г</p>
          <p className="text text_type_digits-default"> {ingredient.fat}</p>
        </li>
        <li>
          <p className="text text_type_main-default">Углеводы, г</p>
          <p className="text text_type_digits-default">
            {" "}
            {ingredient.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
};

IngredientDetails.propTypes = {
  ingredient: ingredientType.isRequired,
};
export default IngredientDetails;
