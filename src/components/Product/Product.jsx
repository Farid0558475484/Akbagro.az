import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Pagination from "react-bootstrap/Pagination";
import s from "./Product.module.scss";
import { cards } from "./../../data/cards.js";

function Products() {
  const [activePage, setActivePage] = useState(1);
  const cardsPerPage = 8;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const handleClick = (page) => {
    setActivePage(page);
  };

  const cardsToDisplay = cards.slice(
    (activePage - 1) * cardsPerPage,
    activePage * cardsPerPage
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.min(5, totalPages); i++) {
    pageNumbers.push(i);
  }

  const firstPage = Math.max(1, activePage - 2);
  const lastPage = Math.min(totalPages, activePage + 2);

  for (let i = firstPage; i <= lastPage; i++) {
    if (!pageNumbers.includes(i)) {
      if (i === 1) {
        pageNumbers.unshift(i);
      } else if (i === totalPages) {
        pageNumbers.push(i);
      } else if (pageNumbers.length < 5) {
        pageNumbers.push(i);
      } else {
        pageNumbers.splice(2, 1, "...");
        break;
      }
    }
  }

  return (
    <Container>
      <Row className="mt-5 mb-5">
        {cardsToDisplay.map((card, index) => (
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
      {totalPages > 1 && (
        <Pagination className="justify-content-center">
          <Pagination.Prev
            disabled={activePage === 1}
            onClick={() => handleClick(activePage - 1)}
          />
          {pageNumbers.map((pageNumber) => (
            <Pagination.Item
              key={pageNumber}
              active={pageNumber === activePage}
              onClick={() => handleClick(pageNumber)}
            >
              {pageNumber}
            </Pagination.Item>
          ))}
          <Pagination.Next
            disabled={activePage === totalPages}
            onClick={() => handleClick(activePage + 1)}
          />
        </Pagination>
      )}
    </Container>
  );
}

export default Products;
