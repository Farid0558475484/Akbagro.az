import React, { useState, useEffect } from "react";
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

  const [pageNumbers, setPageNumbers] = useState([]);
  useEffect(() => {
    const newPageNumbers = [];
    const maxDisplayedPages = 5;
    const maxPageDifference = 2;
    const firstPage = Math.max(1, activePage - maxPageDifference);
    const lastPage = Math.min(totalPages, activePage + maxPageDifference);

    for (let i = firstPage; i <= lastPage; i++) {
      newPageNumbers.push(i);
    }

    if (newPageNumbers.length > maxDisplayedPages) {
      if (newPageNumbers[0] === 1) {
        newPageNumbers.splice(maxDisplayedPages - 1, 1, "...");
      } else {
        newPageNumbers.splice(1, 1, "...");
      }
      newPageNumbers.splice(maxDisplayedPages - 1, 1);
    }

    setPageNumbers(newPageNumbers);
  }, [activePage, totalPages]);

  return (
    <Container>
      <Row>
        <h1 className={s.titleProduct}>Məhsullar</h1>
      </Row>
      <Row className="mt-3 mb-3">
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
          {pageNumbers.map((pageNumber, index) => (
            <Pagination.Item
              key={index}
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
