import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";

function Menu(props) {
  const { dishes } = props;

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to={"/home"}>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
          <div className="col-12">
            <h3>Menu</h3>
          </div>
        </Breadcrumb>
      </div>
      <div className="row">
        {dishes.map((dish) => {
          return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
              <Card>
                <Link to={`/menu/${dish.id}`}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Link>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
