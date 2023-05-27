import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import Scenario1 from "../components/Scenario1";
import Events from "../components/Events";
import Home from "../components/Home";
import Scenario2 from "../components/Scenario2";
import Scenario3 from "../components/Scenario3";
import Scenario4 from "../components/Scenario4";

function Main() {
  return (
    <section>
      <Route path="/" exact component={Home} />
      <Route path="/home/" component={HomePage} />
      <Route path="/scenario1/" component={Scenario1} />
      <Route path="/scenario2/" component={Scenario2} />
      <Route path="/scenario3/" component={Scenario3} />
      <Route path="/scenario4/" component={Scenario4} />
      <Route path="/events/" component={Events} />
      {/* testing sending string prop and destructure in component */}
    </section>
  );
}

export default Main;
