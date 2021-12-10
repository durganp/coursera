import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

function DishDetail({ dish }) {
  return dish ? (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
          </Card>
          <Card>
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="text-left col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {dish.comments.map((comments) => {
            return (
              <ul key={comments.id} className="list-unstyled">
                <li>--{comments.comment}</li>
                <li>{`${comments.author}, ${comments.date}`}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default DishDetail;
