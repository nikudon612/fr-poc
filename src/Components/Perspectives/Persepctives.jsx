import React, { useEffect, useState } from 'react';
import "../../Styles/Perspectives.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import image from "../../Assets/glossier.png";
import gsap  from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createClient } from 'contentful';


function Persepctives() {
  //Set Data State
    const [data, setData] = useState(null);
    

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    function fadeIn() {
      gsap.fromTo(".pers-text", {opacity: 0, y: 50}, {duration: 1, y:0, opacity: 1, ease: "power2.inOut", });
    }
    gsap.from('.perspectives', { scrollTrigger: {
      trigger: ".perspectives",
      start: "top 50%",
      end: "center center",
      once: true,
      }, 
      onComplete: fadeIn});

      const client = createClient({
        space: process.env.REACT_APP_SPACE_ID,
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
      });


    const fetchData = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'perspective',
        });
        setData(response.items);
      } catch (error) {
        console.error('Error retrieving data from Contentful:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="perspectives">
      <div className="perspectives-top">
        <div className="pers-text">
          Perspectives
          <div className="pers-sub">
            In the connected world, nothing happens in a vaccum.
            <br />
            The future is already written in today's news - if you know where to
            look.
          </div>
        </div>
        <button className="pers-button right-margin">View all</button>
      </div>
      <div className="perspectives-bottom mask">
        <Splide
          className="pers-slider"
          options={{
            pagination: false,
            perPage: 3,
          }}
        >
        {data ? (
          data.map((item) => {
            return (
              <SplideSlide className="pers-slide" key={item.sys.id}>
                <img className="pers-image" src={item.fields.teaserImage.fields.file.url} alt="" />
                <div className="slide-text">
                  <div className="slide-type">{item.fields.tag1}</div>
                  <div className="slide-sub">{item.fields.title}</div>
                </div>
              </SplideSlide>
            );
          })
        ) : (
          <p>Loading Data...</p>
        )}
        </Splide>
      </div>
    </div>
  );
}

export default Persepctives;
