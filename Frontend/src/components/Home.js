import React from "react";
import logo from "../images/unimelb.png";
import gitHubLogo from "../images/github.svg";
//public / static / images / tableau.png

export default function Home() {
  return (
    <div class="div-1"> 
      <img className="unimelb" src={logo} alt="unimelb" />
      <h1>Cluster and Cloud Computing - Assignment 2 - Team 27</h1>
      <p>1. Anjaneya Turai</p>
      <p>2. Aswesh Thrissur Anand</p>
      <p>3. Divyanshu Mishra</p>
      <p>4. Henry Pit</p>
      <p>5. Swetha Gopikumar Sreeja</p>
      <p style={indicatorStyle}>👇</p>
      <a href="https://github.com/divyanshu8888/CCC_Assignment2_Team27" target="_blank">
        {" "}
        <img id="githubLink" src={gitHubLogo} style={githubStyle} alt="github logo" />
      </a>
    </div>
  );
}

const githubStyle = {
  width: "50px",
  height: "50px"
};

const indicatorStyle = {
  fontSize: "3rem",
  width: "100%",
  textAlign: "center"
};
