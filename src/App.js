import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.styles.scss";

const RouteHats = () => {
  return (
    <div>
      <h1> *********** HATS ********************</h1>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      {/*
         without switch, if not "exact" : /something will 
                                       return /'s component along with it's own
                                       handled through "match param"
         with switch, if not "exact" : always 1st case will be returned /something will 
                                       return /'s component if 1st case
         history:  Link, location: full location, match: whatever it matches to 
         these props are accessible to only one child it's own
         Prop drilling/tunneling:  passing down props to components that don't need
                                   withRouter is solution (hoc)
      */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={RouteHats} />
      </Switch>
    </div>
  );
};

export default App;
