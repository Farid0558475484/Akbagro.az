import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import s from "./Product.module.scss";
import cards from "./../../data/cards.js";

function Products() {
  return (
    <Container>
      <Row className="mt-5 mb-5">
        {cards.map((card, index) => (
          <Col xl="3" xs="6" key={index} className={s.cardCol}>
            <Card className={s.card}>
              <img
                src={card.imageSrc}
                alt="Logo"
                className="img-fluid"
                layout="responsive"
                objectFit="cover"
                priority
                blurDataURL="data:{card.imageSrc};base64,[base64-encoded-placeholder-image]"
              />
              <Card.Body className={s.cardBody}>
                <Card.Title className={s.cardBody}>{card.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
