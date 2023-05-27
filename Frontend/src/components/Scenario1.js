import React, { useState, useEffect, useRef } from "react";
import analysis from "../images/land-analysis.jpeg"
import HoverImage from "./HoverImage";
import funfact from "../images/funfact.png";


const { tableau } = window;
function Scenario1(){
  const url = 'https://public.tableau.com/views/Land_16846774392970/Dashboard1';
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
      <h1 className="embed_heading">Land rates in Melbourne</h1>
      <div className="viz-container" ref={ref} />
      <div className="content">
      <h1 className="content_heading">Scenario Analysis</h1>
       <div className="image-container">
          <img className="image" src={analysis} alt="Image 1" />
          <p className="image-description"><br></br>Here, you can see the top 5 cities and their respective average sentiments based on the twitter sentiment analysis that was conducted. 
<br></br><br></br>We observe a neutral trend of tweets around land rates with the highest average sentiment coming out of Heyfield, Morewell with 0.16 score.  

<br></br><br></br>In Heyfield, the average land price is about 330k which is less compared to Geelong's 950k. And this is reflected on the sentiments where Geelong has lesser sentiment compared to Heyfield.

<br></br><br></br>This implies that suburbs with positive average sentiment tend to have lesser average land rates suggesting that people in Melbourne are not extremely happy about land prices.</p>
      </div> 
      <HoverImage
        imageSrc={funfact}
        popupContent={<p>Land prices can make you do a double-take and question if you're buying real estate or a ticket to outer space! Sometimes, it feels like you need a rocket ship to afford a piece of land. It's like the properties have their own secret mission to blast your wallet into orbit! So, buckle up and get ready for a wild ride when exploring land prices in Melbourne—they're truly out of this world!.</p>}
      />
      </div>
    </div>
  );
}


export default Scenario1;
