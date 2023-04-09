import React, { useState } from "react";
import s from "./Menu.module.scss";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Menu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={s.bodyMenu}>
        <div className={s.MobileMenu}>
          <Link to="/">
            <img
              src="/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className={s.border}
            />
          </Link>
          <a href="tel:+994508591717">
          <button variant="success" className={s.btn}>
                Zəng edin !
              </button>
          </a>
          <FaBars onClick={handleShow} className={s.icon} />
        </div>

        <Offcanvas show={show} onHide={handleClose} className={s.bodyMenu}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className={s.title}>
              {" "}
              <li onClick={handleClose}>
                <Link to="/"> AkbAgro.az</Link>
              </li>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div>
              <ul className={s.navbar__links}>
                <li onClick={handleClose}>
                  <Link to="/">Şirkət</Link>
                </li>
                <li onClick={handleClose}>
                  <Link to="/about-us">Haqqımızda</Link>
                </li>
                <li onClick={handleClose}>
                  <Link to="/products">Məhsullar</Link>
                </li>
                <li onClick={handleClose}>
                  <Link to="/services">Xidmətlər</Link>
                </li>
                <li onClick={handleClose}>
                  <Link to="/contact">Əlaqə</Link>
                </li>
              </ul>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default Menu;
