import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardImg,
    CardText,
  } from "reactstrap";

function CardComponent({title, year, img}) {
  return (
    <Card>
      <CardImg
        alt="Card image cap"
        src={img}
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>      
        <CardText>
         {year}
        </CardText>
      </CardBody>
    </Card>
  );
}

export default CardComponent;
