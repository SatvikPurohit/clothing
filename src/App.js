import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component.jsx";
import HomePage from "./pages/homepage/homepage.component";
import Products from "./pages/products/products.component.jsx";
import SignIn from "./pages/signin/signin.component.jsx";
import "./App.styles.scss";

const App = () => {
  return (
    <>
      <Header />

      {/*
         without switch, if not "exact" : /something will 
                                       return /'s component along with it's own
                                       handled through "match param"
         with switch, if not "exact" : always 1st case will be returned /something will 
                                       return /'s component if 1st case
         history:  Link,
         location: full location regardless of which root we are only,
         match: whatever it matches to 
         these props are accessible to only one child it's own
         Prop drilling/tunneling:  passing down props to components 
                                   that don't need
                                   withRouter is solution (hoc)
                                   because router props are only for 
                                   components passed to component= 
      */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products" component={Products} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </>
  );
};

export default App;
