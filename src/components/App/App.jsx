import * as React from "react";
import styles from "../App/App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import { data } from "../../utils/Data.jsx";

const App = () => {
  return (
    <div className={styles.page}>
      <AppHeader />
      <main className={styles.container}>
        <BurgerIngredients  />
        <BurgerConstructor />
      </main>
    </div>
  );
};

export default App;
