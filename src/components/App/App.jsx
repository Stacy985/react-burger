import * as React from "react";
import styles from "../App/App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

const App = () => {
  return (
    <div className={styles.page}>
      <AppHeader />
      <main>
        <BurgerConstructor />
      </main>
    </div>
  );
};

export default App;
