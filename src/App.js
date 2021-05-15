import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
// import Portfolio from "./pages/portfolio";
// import Contact from "./pages/contact";
// import Resume from "./pages/resume";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  </Router>
)

export default App;
