import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { DISHES } from "../shared/dishes";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { COMMENTS } from "../shared/comments";
import Contact from "./ContactComponent";
import DishDetail from "./DishdetailComponent";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import About from "./AboutComponent";

function Main() {
  const HomePage = () => {
    return (
      <Home
        dish={DISHES.filter((dish) => dish.featured)[0]}
        promotion={PROMOTIONS.filter((promo) => promo.featured)[0]}
        leader={LEADERS.filter((leader) => leader.featured)[0]}
      />
    );
  };

  const DishWithId = ({ match }) => {
    return (
      <DishDetail
        dish={
          DISHES.filter(
            (dish) => dish.id === parseInt(match.params.dishId, 10)
          )[0]
        }
        comments={COMMENTS.filter(
          (comment) => comment.dishId === parseInt(match.params.dishId, 10)
        )}
      />
    );
  };
  return (
    <div>
      <Header />

      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/menu" exact component={() => <Menu dishes={DISHES} />} />
        <Route path="/menu/:dishId" component={DishWithId} />
        <Route path="/contactus" component={Contact} />
        <Route path="/aboutus" component={() => <About leaders={LEADERS} />} />
        <Redirect to="/home" />
      </Switch>

      <Footer />
    </div>
  );
}

export default Main;
