import React, { useState, useEffect, useRef } from "react";
import analysis from "../images/rental-analysis.png"
import HoverImage from "./HoverImage";
import funfact from "../images/funfact.png";

const { tableau } = window;


function Scenario3(){
  const url = 'https://public.tableau.com/views/Rent_16847608524380/Dashboard3';
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
      <h1 className="embed_heading">Rental rates in Melbourne</h1>
      <div className="viz-container" ref={ref} />
      <div className="content">
      <h1 className="content_heading">Scenario Analysis</h1>
       <div className="image-container">
          <img className="image" src={analysis} alt="Image 1" />
          <p className="image-description"><br></br>Here, you can see the top 5 cities and their respective average sentiments based on the twitter sentiment analysis that was conducted. 

<br></br><br></br>We observe that the highest RAI in Melbourne is in Yarrawonga with 120k.

<br></br><br></br>From our analysis of average sentiments, we observe positive sentiments coming from Yarrawonga.

<br></br><br></br>This implies that suburbs with positive average sentiments tend to have higher Rent Affordability Index.</p>
      </div> 
      <HoverImage
        imageSrc={funfact}
        popupContent={<p>The rental market is so competitive that some properties get snapped up faster than a kangaroo hopping at full speed! With a high demand for housing and a limited supply, finding a rental home in Melbourne can sometimes feel like searching for a needle in a haystack. It's like a real-life game of musical chairs, where tenants have to be quick and nimble to secure their desired abode. So, when it comes to renting a house in Melbourne, be prepared to put your best foot forward and leap into action, or you might find yourself bouncing from one open inspection to the next!</p>}
      />
      </div>
    </div>
  );
}


export default Scenario3;