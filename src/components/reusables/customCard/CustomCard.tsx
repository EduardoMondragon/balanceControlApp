import React from "react";
import Card from "react-bootstrap/Card";
import "./styles.customCard.css";

interface CustomCardProps {
  childrenComponents: JSX.Element;
}

const CustomCard: React.FC<CustomCardProps> = ({ childrenComponents }) => {
  return (
    <Card className="customCard">
      <Card.Body className="cardBody">{childrenComponents}</Card.Body>
    </Card>
  );
};

export default CustomCard;
