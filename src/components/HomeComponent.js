import React from "react";

import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

function RenderCard({ item }) {
  return (
    <Card>
      <CardImg src={item.image} alt={item.name}></CardImg>
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.designation ? (
          <CardSubtitle>{item.designation}</CardSubtitle>
        ) : null}
        <CardText>{item.description} </CardText>
      </CardBody>
    </Card>
  );
}

function Home(props) {
  return (
    <div className="Container">
      <div className="row aligh-items-start">
        <div className="col12 col-md m-1">
          <RenderCard item={props.dish} />
        </div>
        <div className="col12 col-md m-1">
          <RenderCard item={props.promotion} />
        </div>
        <div className="col12 col-md m-1">
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  );
}

export default Home;
