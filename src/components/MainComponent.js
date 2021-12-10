import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import { DISHES } from "../shared/dishes";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import Contact from "./ContactComponent";
import DishDetail from "./DishdetailComponent";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";

function Main() {
  const [selectedDish, setSelectedDish] = useState(null);
  const dishClicked = (dishId) => {
    setSelectedDish(dishId);
  };
  const HomePage = () => {
    return (
      <Home
        dish={DISHES.filter((dish) => dish.featured)[0]}
        promotion={PROMOTIONS.filter((promo) => promo.featured)[0]}
        leader={LEADERS.filter((leader) => leader.featured)[0]}
      />
    );
  };

  return (
    <div>
      <Header />

      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/menu" exact component={() => <Menu dishes={DISHES} />} />
        <Route path="/contactus" component={Contact} />
        <Redirect to="/home" />
      </Switch>
      <DishDetail dish={DISHES.filter((dish) => dish.id === selectedDish)[0]} />
      <Footer />
    </div>
  );
}

export default Main;
