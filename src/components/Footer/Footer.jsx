import React from "react";
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.974351946899!2d49.75467447607671!3d40.32072676147686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307f3c05cce811%3A0xd5b43d6de90a2df2!2sAKB%20Agro%20Suvarma%20Sisteml%C9%99ri!5e0!3m2!1sru!2saz!4v1681843679277!5m2!1sru!2saz"
          title="Google Maps Location of Akbagro"
          className={styles.mapSize}
        ></iframe>
      </Col>
    </Row>
  </Container>
);

export default Footer;
