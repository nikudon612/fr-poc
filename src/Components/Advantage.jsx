import React from "react";
import "../Styles/Advantage.css";
import frlogo from "../Assets/Forerunner_Wordmark_White.png";
import asterix from "../Assets/green-asterix.png";
import line from "../Assets/Line.png";
import arrow from "../Assets/arrow.png";
import ladies from "../Assets/ladies.png";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Advantage() {
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    function fadeIn() {
      gsap.fromTo(
        ".advantage-logo",
        { opacity: 0, y: 50 },
        {
          duration: 1,
          y: 0,
          opacity: 1,
          ease: "power2.inOut",
          onComplete: fadeAdvantageIn(),
        }
      );
    }

    function fadeAdvantageIn() {
      gsap
        .fromTo(
          ".advantage-text-sub",
          { opacity: 0, y: 50 },
          {
            duration: 1,
            y: 0,
            opacity: 1,
            ease: "power2.inOut",
          }
        )
        .delay(0.6);
    }

    function fadeAsterixIn() {
      gsap
        .fromTo(
          ".asterix",
          { opacity: 0, y: 50 },
          {
            duration: 1,
            y: 0,
            opacity: 1,
            ease: "power2.inOut",
            onComplete: fadeLowerText(),
          }
        )
        .delay(0.6);
    }

    function fadeLowerText() {
      gsap
        .fromTo(
          ".advantage-bottom-half-text",
          { opacity: 0, y: 50 },
          { duration: 1, y: 0, opacity: 1, ease: "power2.inOut" }
        )
        .delay(0.6);
    }

    gsap.from(".advantage", {
      scrollTrigger: {
        trigger: ".advantage",
        start: "top 80%",
        end: "center center",
        once: true,
      },
      onComplete: fadeIn,
    });

    function fadeInBottom() {
      gsap
        .fromTo(
          ".advantage-bottom-half",
          { opacity: 0, y: 50 },
          {
            duration: 1,
            y: 0,
            opacity: 1,
            ease: "power2.inOut",
          }
        )
        .delay(0.6);
    }


    gsap.from(".advantage-bottom-half", {
      scrollTrigger: {
        trigger: ".advantage",
        start: "top 50%",
        end: "center center",
        once: true,
      },
      onComplete: fadeAsterixIn,
    });
  }, []);
  return (
    <div className="advantage">
      <div className="advantage-top">
        <div className="advantage-top-half">
          <div className="advantage-text">
            <img src={frlogo} className="advantage-logo" />
            <div className="advantage-text-sub">Advantage</div>
          </div>
          <img src={asterix} className="asterix" />
        </div>
        <div className="advantage-bottom-half">
          <img src={line} className="advantage-line " />

          <div className="advantage-bottom-half-text">
            Forerunner is a{" "}
            <span className="bolded">reasearch-focused, thesis-driven</span>{" "}
            venture capital firm that's
            <br />
            <span className="bolded">purpose-built</span> to better understand
            and serve a fast paced changing society.
          </div>
        </div>
      </div>
      <div className="advantage-bottom">
        <img src={ladies} className="advantage-bottom-image" />
        <div className="panel5-image-overlay">
          <div className="panel5-brandName" href="">
            Faire
          </div>
          <img src={arrow} className="panel5-brandName panel5-arrow" />
        </div>
      </div>
    </div>
  );
}

export default Advantage;
