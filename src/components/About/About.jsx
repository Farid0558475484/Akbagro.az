import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import s from "./About.module.scss";

function About() {
  return (
    <>
      <Container fluid>
        <Row className="mt-3">
          <img src="/img12.jpeg" alt="Logo" className={s.imgFluid} />
        </Row>
      </Container>
      <Container className={s.aboutMain}>
        <Row>
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
          <Col md="6" className={s.order2}>
            <img
              src="/img9.jpeg"
              alt="Logo"
              className="img-fluid"
              layout="responsive"
              objectFit="cover"
            />
          </Col>
          <Col md="6" className={s.order1}>
            <h1 className={s.title}>Şirkətin missiyası</h1>

            <p className={s.text}>
              Şirkətin əsas missiyası – suya qənaət, məhsuldarlıq və
              rentabelliyi artırmaq məqsədi ilə kənd təsərrüfatı və
              yaşıllaşdırma sahəsində intensiv suvarma metodlarının tətbiqi, su
              resurslarından istifadənin optimallaşdırılması və suvarma
              sistemlərinin idarə edilməsinin avtomatlaşdırılmasıdır.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <h1 className={s.title}>Dünyanın aparıcı markasi</h1>

            <p className={s.text}>
              “AKB Agro suvarma sistemləri sektorunda dünyanın aparıcı
              markalarından biridir. Şirkətimiz kainatın ən qiymətli resursundan
              daha düzgün və səmərəli istifadə etmək üçün müasir avadanlıqlar və
              innovativ həllər təklif edir. ​ Sürətlə qloballaşan dünyada üç
              ciddi problemlə üz-üzəyik - su qıtlığı və çirklənmə, qidaya
              tələbatın artması və əkin sahələrinə ehtiyac. Bunların hər biri
              yaşadığımız planetin gələcəyi üçün çox vacibdir. Ağıllı suvarma
              məhz bu təhdidləri aradan qaldırmaqdan ötrü ön plana çıxmaqdadır.
              Beləliklə, məqsədimiz çox aydındır – müasir suvarma sistemlərini
              ölkəmizdə əlçatan və effektiv həll yolu etmək.
            </p>
          </Col>

          <Col md="6">
            <img
              src="/img6.jpeg"
              alt="Logo"
              className="img-fluid"
              layout="responsive"
              objectFit="cover"
            />
          </Col>
        </Row>
        <Row>
          <Col md="6" className={s.order2}>
            <img
              src="/img8.webp"
              alt="Logo"
              className="img-fluid"
              layout="responsive"
              objectFit="cover"
            />
          </Col>
          <Col md="6" className={s.order1}>
            <h1 className={s.title}>Bizə müraciət</h1>

            <p className={s.text}>
              Bizə müraciət etməklə keyfiyyətli məhsulu və sərfəli qiyməti bir
              ünvanda tapmış olacaqsınız. Dünyanın tanınmış şirkətlərinin
              istehsalı olan ən müasir avadanlıqlar təsərrüfat xərclərinizin
              əhəmiyyətli dərəcədə azalmasına, məhsuldarlığın isə artmasına
              ciddi təkan verəcək. ​ Suvarmadakı köhnə üsullar artıq keçmişdə
              qalıb. Dünyada yaşanan su qıtlığı bizi “Hər damla önəmlidir”
              şüarını əsas tutmağa sövq edir. ​ AGRODRİP daha az resursla daha
              keyfiyyətli və yüksək məhsuldarlıq əldə etmək yolunda ən yaxşı
              bələdçiniz olacaq. Gəlin, uğurlu gələcəyə doğru birlikdə
              addımlayaq.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <h1 className={s.title}>Münasib qiymət</h1>

            <p className={s.text}>
              Müasir suvarma avadanlıqlarını münasib qiymətlərlə
              filiallarımızdan əldə edə bilərsiniz.
            </p>
          </Col>

          <Col md="6">
            <div className={s.logoPhoto}>
              <img src="/logo.png" alt="Logo" width={200} height={200} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
