import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import s from "./Slider.module.scss";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src="/img4.jpeg"
          alt="Logo"
          className={s.img}
          width={100}
          height={50}
          layout="responsive"
          objectFit="cover"
        />
        <Carousel.Caption>
          <h3>Akb Agro</h3>
          <p>Damci suvarma sistemleri</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/img2.jpeg"
          alt="Logo"
          className={s.img}
          width={100}
          height={70}
          layout="responsive"
          objectFit="cover"
        />

        <Carousel.Caption>
          <h3>Akb Agro</h3>
          <p>Cileme suvarma sistemleri</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/s2.jpeg"
          alt="Logo"
          width={100}
          height={100}
          layout="responsive"
          objectFit="cover"
          className={s.img}
        />
        <Carousel.Caption>
          <h3>Akb Agro</h3>
          <p>Ağıllı gübrələmə</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
