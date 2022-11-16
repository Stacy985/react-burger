import PropTypes from "prop-types";
import { ingredientType } from "../../utils/Data";
import styles from "../CompoundDetail/сompoundDetai.module.css";
const CompoundDetail = (props) => {
  return (
    <div className={styles.compoundDetail}>
      <img src={props.ingredient.image_large} alt={props.ingredient.name} />
      <h3 className="text text_type_main-medium mt-4 mb-8">
        {props.ingredient.name}
      </h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className="text text_type_main-default">Калории,ккал</p>
          <p className="text text_type_digits-default">
            {" "}
            {props.ingredient.calories}
          </p>
        </li>
        <li className={styles.item}>
          <p className="text text_type_main-default">Белки, г</p>
          <p className="text text_type_digits-default">
            {" "}
            {props.ingredient.proteins}
          </p>
        </li>
        <li className={styles.item}>
          <p className="text text_type_main-default">Жиры, г</p>
          <p className="text text_type_digits-default">
            {" "}
            {props.ingredient.fat}
          </p>
        </li>
        <li className={styles.item}>
          <p className="text text_type_main-default">Углеводы, г</p>
          <p className="text text_type_digits-default">
            {" "}
            {props.ingredient.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
};

CompoundDetail.propTypes = {
  ingredient: ingredientType.isRequired,
};
export default CompoundDetail;
