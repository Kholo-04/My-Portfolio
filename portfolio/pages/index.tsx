import { Fragment } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/UI/Hero";
import Services from "../components/UI/Services";
import About from "../components/UI/About";
import Portfolio from "../components/UI/Portfolio";
import Testimonial from "../components/UI/Testimonial";
import Contact from "../components/UI/Contact";
import Footer from "../components/Footer/Footer";


export default function Home() {
  return (
    <Fragment>
      <Header/>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer/>
    </Fragment>
  );
}
