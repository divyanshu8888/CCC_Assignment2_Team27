import React, { useState, useEffect, useRef } from "react";
const { tableau } = window;

function HomePage(props) {
  const [url] = useState(
    
    'https://public.tableau.com/views/DemoMap_16840656041010/Dashboard1'
  );
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
      <h1 className="embed_heading">Is Melbourne livable?</h1>
      <div style={setVizStyle} ref={ref} />
      
      <div class="login-box">
      <h2>Question Box</h2>
      <h2>Hey Richard and team</h2>
      <h2>Please post your questions here.</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" required=""/>
          
          <label>Any questions?...</label>
        </div>

        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          send email
        </a>     
      </form> 
    </div>
    </div>
  );
}

const setVizStyle = {
  width: "100vw",
  height: "100vh",
}; 

export default HomePage;
 