import React from "react";
import s from "./Logo.module.scss";

function Logo() {
  return (
    <div className={s.logoContainer}>
      <img src="./logo.png" alt="Logo" className={s.logo} />
    </div>
  );
}

export default Logo;
