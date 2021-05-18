import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import resumeData from "./resume-data";
// import Resume from "./pages/resume";

const App = () => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} resumeData={resumeData} />
      </Switch>
    </React.Fragment>
  </Router>
)

export default App;
