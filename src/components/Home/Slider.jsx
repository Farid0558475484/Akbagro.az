import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import s from "./Slider.module.scss";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src="/a1.jpg"
          alt="Logo"
          className={s.img}
        
        />
        <Carousel.Caption className={s.captionItem}>
          <h3 className={s.title} >AKB Agro</h3>
          <p className={s.desc}>Damci suvarma sistemleri</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/img2.jpeg"
          alt="Logo"
          className={s.img}
        
        />

        <Carousel.Caption  className={s.captionItem}>
          <h3 className={s.title}>AKB Agro</h3>
          <p className={s.desc}>Cileme suvarma sistemleri</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/2ss.jpg"
          alt="Logo"
          
          className={s.img}
        />
        <Carousel.Caption  className={s.captionItem}>
          <h3 className={s.title}>AKB Agro</h3>
          <p className={s.desc}> gübrələmə</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
