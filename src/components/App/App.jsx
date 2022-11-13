import * as React from "react";
import styles from "../App/App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import { newApi } from "../../utils/Api";

import { data } from "../../utils/Data.jsx";

const App = () => {

  const [ingredients, setIngredients] = React.useState([]);
  React.useEffect(() => {
    newApi
      .getIngredients()
      .then((res) => {
        setIngredients(res.data);
      },[])
      .catch((err) => {
        console.log("Ошибка: $(err)");
      });
  });

  return (
    <div className={styles.page}>
      <AppHeader />
      <main className={styles.container}>
        <BurgerIngredients ingredients={ingredients}/>
     {/*    <BurgerConstructor ingredients={ingredients}/> */}
      </main>
    </div>
  );
};


/*  class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      ingredients: data
    }
    
  }

  render() {
    return (
      <div className={styles.page}>
        <AppHeader />
        <main className={styles.container}>
          <BurgerIngredients ingredients={this.state.ingredients} />
          <BurgerConstructor ingredients={this.state.ingredients} />
        </main>
      </div>
    );
  }
}  */

export default App;
