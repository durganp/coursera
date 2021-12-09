import React, { useState } from "react";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishdetailComponent";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./MenuComponent";

function Main() {
  const [selectedDish, setSelectedDish] = useState(null);
  const dishClicked = (dishId) => {
    setSelectedDish(dishId);
  };
  return (
    <div>
      <Header />
      <Menu
        dishes={DISHES}
        onClick={(dishId) => {
          return dishClicked(dishId);
        }}
      />

      <DishDetail dish={DISHES.filter((dish) => dish.id === selectedDish)[0]} />
      <Footer />
    </div>
  );
}

export default Main;
