import React from "react";
import "../../Styles/Panel2.css";
import cc from "../../Assets/cc.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import arrow from "../../Assets/arrow.png";
import line from "../../Assets/Line.png";

const Panel2 = () => {
  function click3() {
    gsap.to(window, {
      duration: 1.25,
      scrollTo: { y: ".panel3", offsetY: 30 },
    });
  }

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    function fadeIn() {
      gsap.fromTo(
        ".panel2-upper-text",
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
          ".panel2-lower-text",
          { opacity: 0, y: 50 },
          { duration: 1, y: 0, opacity: 1, ease: "power2.inOut" }
        )
        .delay(0.6);
    }
    gsap.from(".panel2", {
      scrollTrigger: {
        trigger: ".panel2",
        start: "top 80%",
        end: "center center",
        once: true,
      },
      onComplete: fadeIn,
    });
  }, []);
  return (
    <div className="panel2">
      <div className="panel2-left">
        <img src={cc} className="panel2-image" />
        <div className="panel2-image-overlay">
          <div className="panel2-brandName" href="">
            Chime
          </div>
          <img src={arrow} className="panel2-brandName panel2-arrow" />
        </div>
      </div>
      <div className="panel2-right">
        <div className="panel2-text">
          <div className="panel2-upper-text">
            <p className="bold-text">The need and potential is clear,</p>
            <p className="italic-text">and the opportunities are massive.</p>
          </div>
          <img src={line} className="line" />
          <div className="panel2-lower-text">
            <li className="list-text">
              Evolved attitudes and social norms are shaping demands.
            </li>
            <li className="list-text">
              Antiquated and fragile systems are begging for reinvention.
            </li>
            <li className="list-text">
              Massive demographic shifts are fueling emerging needs.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel2;
