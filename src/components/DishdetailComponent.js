import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";

function DishDetail({ dish, comments }) {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{dish.name} </BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{dish.name} </h3>
        </div>
      </div>
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
          {comments.map((comment) => {
            return (
              <ul key={comment.id} className="list-unstyled">
                <li>--{comment.comment}</li>
                <li>{`${comment.author}, ${comment.date}`}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DishDetail;
