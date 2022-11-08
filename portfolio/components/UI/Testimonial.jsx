import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import network from "../../public/images/Connected world.png";
import Slider from "react-slick";
import classes from "../../styles/testimonial.module.css";

const Testimonial = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" className={`${classes.testimonial__img}`}>
            <Image alt="network-img" src={network} width="400" height="400" />
          </Col>

          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Testimonials" />
            <h4 className="mt-4 mb-5">What my colleagues say about me!</h4>

            <Slider {...settings}>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                

                  <div>
                    <h6>Peter Molawa</h6>
                    <h6>Systems Developer</h6>
                  </div>
                </div>

                <p>
                  A pleasure to work with, we developed a great 
                  working relationship as she is such a great communicator. 
                  I truly appriciate her attention to detail and creactive
                  approach to bring projects to life.
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
              

                  <div>
                    <h6>Lerato Nkuna</h6>
                    <h6>Web Developer</h6>
                  </div>
                </div>

                <p>
                Kholo is a hard working lady who completes every 
                task that she sets her mind to. 
                She is strong willed and speaks her mind.
                 Kholo is a passionate human being who likes 
                 to laugh and enjoy any moment she is in.
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                

                  <div>
                    <h6>Jowie Mankga</h6>
                    <h6>Web Developer</h6>
                  </div>
                </div>
                <p>
                Kholofelo is flexible, vibrant and adaptive young lady 
                who is very passionate with Software Development. 
                My experience working with her is she is goal orientated 
                and pay attention to every detail. I have learnt not only 
                technical skills from her but also soft skills. She loves 
                helping people and very passionate with people she works with.


                </p>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
