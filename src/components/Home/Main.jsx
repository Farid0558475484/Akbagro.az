import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import s from ".//Main.module.scss";
import Servis from "./../Servis/Servis";

function Main() {
  return (
    <>
      <Container fluid className={s.Main}>
        <Row className="mt-5 mb-3">
          <Col md="6">
            <div className={s.content}>
              <h1 className={s.title}>“AKB Agro-ya xoş gəldiniz!</h1>

              <p className={s.text}>
                “AKB Agro” şirkəti 2023-ci ildə yaradılmışdır. Şirkətimiz
                peşəkar işçiləri ilə sektorda keyfiyyət, peşəkar iş intizamı,
                yüksək effektivlik anlayışı və müştəri məmnuniyyətini başlıca
                vəzifə kimi rəhbər tutaraq fəaliyyətini davam etdirir.
              </p>
              <p className={s.text}>
                Biz “AKB Agro şirkəti olaraq hər növ suvarma sistemlərinin
                satışını, bağlara, villalara və əkin sahələrinə son texnologiya
                ilə çəkilməsini həyata keçiririk. Yeni başladığımız illərdən
                indiyə qədər təcrübəli işçilərimiz sayəsində bir çox layihələrə
                uğurla imza atmışıq. Biz müştərilərərimizə satdığımız
                məhsulların keyfiyyətinə hər zəmən diqqət edirik.
              </p>
            </div>
          </Col>

          <Col md="6">
            <img
              src="/img7.jpeg"
              alt="Logo"
              className="img-fluid"
              layout="responsive"
              objectFit="cover"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <img
                src="/1dd.jpg"
                alt="Logo"
                layout="responsive"
                objectFit="cover"
                className={s.imgMain}
              />
            </div>
          </Col>
        </Row>
        <Servis />
        <Row className="mt-3 ">
          <Col md="6" className={s.order2}>
            <img
              src="/img5.jpeg"
              alt="Logo"
              className="img-fluid"
              layout="responsive"
              objectFit="cover"
            />
          </Col>
          <Col md="6" className={s.order1}>
            <h1 className={s.title}>Şirkətin missiyası</h1>

            <p className={s.text}>
              Biz aqrar sahədə fəaliyyət göstərən sahibkarların qazancını
              artırmaq üçün aşağıdakıları təklif edirik:
              <br />
              Beynəlxalq tərəfdaşlarımızla birlikdə yerli fermerlərin inkişafını
              artırmaq;
              <br />
              Davamlı olaraq sahibkarların iş effektivliyini ölçmək və artımını
              təmin etmək;
              <br />
              Onları işlərinin və məhsullarının keyfiyyətlərinin yüksəldilməsinə
              kömək edəcək lazımi dəstəkləyici xidmətlərlə təmin etmək.
              <br />
              Ətraf mühitin çirklənməsini birinci prioritet halına gətirərək
              kənd təsərrüfatını davamlı inkişaf etdirmək üçün elmi və praktik
              təcrübə yaratmaq.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Main;
