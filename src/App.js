import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component.jsx";
import HomePage from "./pages/homepage/homepage.component";
import Products from "./pages/products/products.component.jsx";
import SignIn from "./pages/signin/signin.component.jsx";
import { auth, currentUserProfileDocument } from "./firebase/firebase.utils";
import "./App.styles.scss";

class App extends React.Component {
  unsubscribeAuth = null;
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  componentDidMount() {
    /* 
      Check: register event handler onAuthStateChanged
      auth.onAuthStateChanged: called only once after sign-in(obj) and on sign-out(null)
      also, for every refresh checks whether session exists or not
      cb (user) =>  has to be async as we are making api call in it
     */
    this.unsubscribeAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // add to firebase store ie. sign-up
        const userRef = await currentUserProfileDocument(user);
        userRef.onSnapshot((snapshot) => {
          const {
            refreshToken,
            photoURL,
            email,
            displayName,
            uid,
          } = snapshot.data();
          this.setState({
            currentUser: {
              refreshToken,
              photoURL,
              email,
              displayName,
              uid,
            },
          });
        });
      } else this.setState({ currentUser: null });
    });
  }

  componentWillUnmount() {
    // un-register
    this.unsubscribeAuth();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
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
  }
}

export default App;
