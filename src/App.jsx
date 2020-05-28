import React, { Component } from "react";
import "./App.scss";
import meals from "./meals.json";
import Mealbox from "./components/MealBox";

class App extends Component {
  render() {
    return (
      <div>
        <MealBox />
      </div>
    );
  }
}

export default App;
