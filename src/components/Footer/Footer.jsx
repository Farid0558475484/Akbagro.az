import React from "react";
import { Button } from "react-bootstrap";
import styles from ".//Footer.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => (
  <Container fluid>
    <Row className={styles.footer}>
      <Col md="6" className={styles.info}>
        <div className={styles.phone}>
          <div className={styles.phone1}>
            <a href="tel:+994508591717">
              <button variant="success" className={styles.btn}>
                Zəng edin
              </button>
            </a>
            <span> 0508591717</span>
          </div>
          <div className={styles.phone2}>
            <a href="tel:+994708591717">
              <button variant="success" className={styles.btn}>
                Zəng edin
              </button>
            </a>
            <span>0708591717</span>
          </div>
        </div>
        <div className={styles.email}>
          <a href="mailto:info@akbagro.az">
            <button variant="success" className={styles.btn}>
              Email
            </button>
          </a>
          <span> info@akbagro.az</span>
        </div>
        <div className={styles.location}>
          <button variant="success" className={styles.btn}>
            Unvan
          </button>
          <div>
            <span>Lökbatan qəsəbəsi Xocahəsən,</span>
            <br />
            <span>yolu 57 korpus 8, mağaza 13,14</span>
          </div>
        </div>
      </Col>

      <Col md="6" className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22860.76515080142!2d49.72151872821744!3d40.3303700899744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307f811a40fc4b%3A0xf75cb330fdbf2716!2zWG9jYWjJmXPJmW4!5e0!3m2!1sru!2saz!4v1680789467407!5m2!1sru!2saz"
          title="Google Maps Location of Akbagro"
          className={styles.mapSize}
        ></iframe>
      </Col>
    </Row>
  </Container>
);

export default Footer;
