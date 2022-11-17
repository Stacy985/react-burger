import React from "react";
import styles from "../App/App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import { newApi } from "../../utils/Api";

const App = () => {
  const [ingredients, setIngredients] = React.useState([]);

  React.useEffect(() => {
    newApi
      .getIngredients()
      .then((res) => {
        setIngredients(res.data);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

  return (
    <div className={styles.page}>
      <AppHeader />
      <main className={styles.container}>
        <BurgerIngredients ingredients={ingredients} />
        {ingredients.length ? (
          <BurgerConstructor ingredients={ingredients} />
        ) : null}
      </main>
    </div>
  );
};

export default App;
