import React, { useState, useEffect, useRef } from "react";
import analysis from "../images/medical-analysis.jpeg"
import HoverImage from "./HoverImage";
import funfact from "../images/funfact.png";

const { tableau } = window;


function Scenario2(){
  const url = 'https://public.tableau.com/views/Medical_16847518861770/Dashboard2';
  const ref = useRef(null);

  const initViz = () => {
    new tableau.Viz(ref.current, url, {
      width: "100%",
      height: "100%"
    });
  };

  useEffect(initViz, []);

  return (
    <div className="embed">
      <h1 className="embed_heading">Medical expenditure rates in Melbourne</h1>
      <div className="viz-container" ref={ref} />
      <div className="content">
      <h1 className="content_heading">Scenario Analysis</h1>
       <div className="image-container">
          <img className="image" src={analysis} alt="Image 1" />
          <p className="image-description"><br></br>This plot shows the bottom 5 cities and their respective average sentiments based on the twitter data. 

<br></br><br></br>It is observed that people living in suburbs like Churchill, Camperdown have negative sentiments on medicare expenses in Melbourne.

<br></br><br></br>This can be due to various factors like access, income, transport, insurance, healthcare services, etc. 

<br></br><br></br>From the average medicare expenditure rates, it is clear that people living in the suburbs tend to spend more on medicare and are not happy with it from the sentiment analysis.</p>
      </div> 
      <HoverImage
        imageSrc={funfact}
        popupContent={<p>Medicare expenses can sometimes make you wish you had a superhero's healing powers! While Australia's healthcare system provides valuable coverage, medical costs can still make you feel like you need a cape and a mask to fight off the bills. It's like a never-ending battle to keep your budget healthy while taking care of your own well-being. So, remember to channel your inner superhero when dealing with Medicare expenses in Melbourne—they may require some extraordinary powers of financial planning!</p>}
      />
      </div>
    </div>
  );
}


export default Scenario2;