import React from "react";
import "../../Styles/Panel4.css";
import Man from "../../Assets/man.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import arrow from "../../Assets/arrow.png";
import dogs from "../../Assets/dogs.png";

const Panel4 = () => {
  function click5() {
    gsap.to(window, { duration: 1, y: ".panel5", ease: "power2.inOut" });
  }
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    function fadeIn() {
      gsap.fromTo(
        ".panel4-para",
        { opacity: 0, y: 50 },
        {
          duration: 1,
          y: 0,
          opacity: 1,
          ease: "power2.inOut",
          onComplete: fadeLowerIn(),
        }
      );
    }
    function fadeLowerIn() {
      gsap
        .fromTo(
          ".panel4-bold",
          { opacity: 0, y: 50 },
          { duration: 1, y: 0, opacity: 1, ease: "power2.inOut" }
        )
        .delay(0.6);
    }
    gsap.from(".panel4", {
      scrollTrigger: {
        trigger: ".panel4",
        start: "top 80%",
        end: "center center",
        once: true,
      },
      onComplete: fadeIn,
    });
  }, []);
  return (
    <div className="panel4">
      <div className="panel4-top">
        <div className="panel4-text">
          <div className="panel4-para">
            Our vision for tomorrow comes from our empathy for today. In an
            industry obsessed with trailblazing, we go one step further: We meet
            the consumer where they're going. That makes us unique - and we're
            here to share that insight with founders. When big thinkers are
            poised on the brink of transforming culture, they become more than
            just founders or CEOs, or investors, or entrepreneurs.{" "}
          </div>
          <div className="panel4-bold">They Become Forerunners.</div>
        </div>
      </div>
      <div className="panel4-bottom">
        <img src={dogs} onClick={click5} className="panel4-image" />
        <div className="panel4-image-overlay">
          <div className="panel4-brandName" href="">
            The Farmer's Dog
          </div>
          <img src={arrow} className="panel4-brandName panel4-arrow" />
        </div>
      </div>
    </div>
  );
};

export default Panel4;
