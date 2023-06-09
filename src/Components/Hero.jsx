import React from "react";
import "../Styles/Hero.css";
import mango from "../Assets/Rectangle.png";
import yellow from "../Assets/yellow.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import arrow from "../Assets/arrow.png";
import makeup from "../Assets/makeup.png";

function Hero() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  function click() {
    gsap.to(window, {
      duration: 1.25,
      scrollTo: { y: ".panel1", offsetY: 100 },
    });
  }

  React.useEffect(() => {
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: 20, ease: "back.out(3)" },
      { duration: 1, y: 0, opacity: 1 }
    );
    gsap.fromTo(
      ".small-hero-text, .larger-hero-text",
      {
        scrollTrigger: {
          trigger: ".hero",
          start: "-100% top",
          end: "30% top",
          scrub: 0.8,
        },
        opacity: 0,
        y: 0,
        ease: "back.out(3)",
      },
      {
        scrollTrigger: {
          trigger: ".hero",
          start: "-100% top",
          end: "30% top",
          scrub: 0.8,
        },
        duration: 1,
        y: -50,
        opacity: 1,
      }
    );
  }, []);

  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-text">
          <p className="small-hero-text">Investing at the intersection of</p>
          <div className="larger-hero-text">
            Innovation
            <br />
            <span className="ampersand">&</span>
            <br />
            <span className="Culture">Culture</span>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-image">
          <img src={makeup} alt="hero" className="hero-image" />
          <div className="hero-image-overlay">
            <div className="brandName" href="">
              Glossier
            </div>
            <img src={arrow} className="brandName arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
