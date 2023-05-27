import React, { useState, useEffect, useRef } from "react";
import analysis from "../images/travel-analysis.jpeg"
import HoverImage from "./HoverImage";
import funfact from "../images/funfact.png";

const { tableau } = window;


function Scenario4(){
  const url = 'https://public.tableau.com/views/Travel_16847394924240/Dashboard1';
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
      <h1 className="embed_heading">Travel rates in Melbourne</h1>
      <div className="viz-container" ref={ref} />
      <div className="content">
      <h1 className="content_heading">Scenario Analysis</h1>
       <div className="image-container">
          <img className="image" src={analysis} alt="Image 1" />
          <p className="image-description"><br></br>As residents move further outward, another issue faced is transportation issue. <br></br><br></br>Of course, under the travel scheme, the price of travel is constant across all distance, but because of disruptions and irregular schedules, we see more and more negative sentiments as the distance increases. 

<br></br><br></br>In recent times, the government has seemed to become aware of this issue, and a lot more work has been put into improving the public transportation system.</p>
      </div> 
      <HoverImage
        imageSrc={funfact}
        popupContent={<p>Melbourne, Victoria, is known as the "Tram Capital of Australia" because it has the largest urban tram network in the entire world! With over 250 kilometers of tracks and over 400 trams operating, trams have become an iconic symbol of Melbourne's transportation system. It's not just a convenient way to get around the city, but also a unique and charming experience for both locals and visitors. So, when you visit Melbourne, don't forget to hop on a tram and enjoy the ride through the vibrant streets—just be prepared to share the road with these beloved and efficient "streetcars"!</p>}
      />
      </div>
    </div>
  );
}


export default Scenario4;