import React from "react";
import styles from "./Navbar.module.scss";
// import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <Link href="/">
          <img
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className={styles.border}
          />
        </Link>
      </div>
      <div>
        <ul className={styles.navbar__links}>
          <li>
            <Link to="/">Şirkət</Link>
          </li>
          <li>
            <Link to="/about-us">Haqqımızda</Link>
          </li>
          <li>
            <Link to="/products">Məhsullar</Link>
          </li>
          <li>
            <Link to="/services">Xidmətlər</Link>
          </li>
          <li>
            <Link to="/contact">Əlaqə</Link>
          </li>
        </ul>
      </div>
      <div className={styles.phone}>
        <a href="tel:+994508591717">
          <button variant="success" className={styles.btn}>
            Zəng edin !
          </button>
        </a>
      </div>
    </nav>
  );
}
