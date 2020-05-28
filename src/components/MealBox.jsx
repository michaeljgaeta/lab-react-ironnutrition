import React, { Component } from "react";
import "../App.scss";
import meals from "../meals.json";

class MealBox extends React.Component {
  constructor() {
    super();

    this.state = {
      meal: []
    };
  }
  render() {
    return (
      <div class="media">
        <img
          src="https://i.imgur.com/eTmWoAN.png"
          class="img-thumbnail mr-3 mw-25 border-0"
          style="max-width: 10em;"
        />
        <div class="media-body align-self-center">
          <h5 class="mt-0 mb-1">Pizza</h5>
          <small>400 cal</small>
        </div>
        <form class="row align-self-center">
          <input class="form-control col-9" type="number" value="1" />
          <button class="btn btn-primary col-3">+</button>
        </form>
      </div>
    );
  }
}

export default MealBox;
