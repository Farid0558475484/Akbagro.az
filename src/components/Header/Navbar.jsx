import React from "react";
import styles from "./Navbar.module.scss";
import { NavLink } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <NavLink href="/">
          <img
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className={styles.border}
          />
        </NavLink>
      </div>
      <div>
        <ul className={styles.navbar__links}>
          <li>
            <NavLink href="/">Şirkət </NavLink>
          </li>
          <li>
            <NavLink href="/about-us">Haqqımızda</NavLink>
          </li>
          <li>
            <NavLink href="/products">Məhsullar</NavLink>
          </li>
          <li>
            <NavLink href="/services">Xidmətlər</NavLink>
          </li>
          <li>
            <NavLink href="/contact">Əlaqə</NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.phone}>
        <a href="tel:+994508591717">
          <Button variant="success">Zeng et</Button>{" "}
        </a>
      </div>
    </nav>
  );
}
