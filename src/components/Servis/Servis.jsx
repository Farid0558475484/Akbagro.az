import React from "react";
import s from ".//Servis.module.scss";
import { Container, Row, Col } from "react-bootstrap";

function Servis() {
  return (
    <>
      <Container>
        <Row className="mt-3">
          <h2 className={s.serviceTitle}>Xidmətlər</h2>
        </Row>
        <Row className="mt-3">
          <Col md="4">
            <div className={s.cardBody}>
              <div className={s.cardImg}>
                <img src="/b1.jpg" alt="Logo" className={s.img} />
              </div>

              <div className={s.cardfoot}>
                <div className={s.tre}>
                  <a href="/">
                    <h4>Damci suvarma sistemleri</h4>
                    <p>AKB Agro</p>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className={s.cardBody}>
              <div className={s.cardImg}>
                <img src="/3.webp" alt="Logo" className={s.img}  />
              </div>

              <div className={s.cardfoot}>
                <div className={s.tre}>
                  <a href="/">
                    <h4>Cileme suvarma sistemleri</h4>
                    <p>AKB Agro</p>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className={s.cardBody}>
              <div className={s.cardImg}>
                <img src="/2.webp" alt="Logo"className={s.img}  />
              </div>

              <div className={s.cardfoot}>
                <div className={s.tre}>
                  <a href="/">
                    <h4>Ağıllı gübrələmə</h4>
                    <p>AKB Agro</p>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Servis;
