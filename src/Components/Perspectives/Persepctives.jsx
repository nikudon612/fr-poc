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
      start: "top 80%",
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

  const articleData = [
    {
      photo: image,
      type: "INSIGHTS",
      title: "The Crumbling Infrastructure of the Web",
      key: 1,
    },
    {
      photo: image,
      type: "THESIS",
      title: "The Future Forerunners; Fund VI $1B",
      key: 2,
    },
    {
      photo: image,
      type: "PORTFOLIO",
      title: "Glossier Gets A Makover",
      key: 3,
    },
    {
      photo: image,
      type: "PORTFOLIO",
      title: "Glossier Gets A Makover",
      key: 4,
    },
    {
      photo: image,
      type: "INSIGHTS",
      title: "The Crumbling Infrastructure of the Web",
      key: 5,
    },
    {
      photo: image,
      type: "THESIS",
      title: "The Future Forerunners; Fund VI $1B",
      key: 6,
    },
  ];
  
  const articleList = articleData.map((article) => {
    return (
      <SplideSlide className="pers-slide" key={article.key}>
        <img className="pers-image" src={article.photo} alt="" />
        <div className="slide-text">
          <div className="slide-type">{article.type}</div>
          <div className="slide-sub">{article.title}</div>
        </div>
      </SplideSlide>
    );
  });

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
        {/* <Splide
          className="pers-slider"
          options={{
            pagination: false,
            perPage: 3,
          }}
        >
          {articleList}
        </Splide> */}
        {data ? (
          <ul>
            {data.map((item) => (
              <li key={item.sys.id}>{item.fields.title}</li>
            ))}
          </ul>
        ) : (
          <p>Loading Data...</p>
        )}
      </div>
    </div>
  );
}

export default Persepctives;
