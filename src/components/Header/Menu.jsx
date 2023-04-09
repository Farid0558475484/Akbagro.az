import React, { useState } from "react";
import s from "./Menu.module.scss";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";

function Menu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={s.bodyMenu}>
        <div className={s.MobileMenu}>
          <NavLink href="/">
            <img
              src="/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className={s.border}
            />
          </NavLink>
          <a href="tel:+99477384242">
            <Button variant="success">Zeng et</Button>
          </a>
          <Button variant="primary" onClick={handleShow}>
            Menu
          </Button>
        </div>

        <Offcanvas show={show} onHide={handleClose} className={s.bodyMenu}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className={s.title}>
              {" "}
              <li onClick={handleClose}>
                <NavLink href="/"> AkbAgro.az</NavLink>
              </li>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div>
              <ul className={s.navbar__links}>
                <li onClick={handleClose}>
                  <NavLink href="/">Şirkət</NavLink>
                </li>
                <li onClick={handleClose}>
                  <NavLink href="/about-us">Haqqımızda</NavLink>
                </li>
                <li onClick={handleClose}>
                  <NavLink href="/products">Məhsullar</NavLink>
                </li>
                <li onClick={handleClose}>
                  <NavLink href="/services">Xidmətlər</NavLink>
                </li>
                <li onClick={handleClose}>
                  <NavLink href="/contact">Əlaqə</NavLink>
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
