import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
/* The "ReactComponent" import name is special and tells 
Create React App that you want a 
React component that renders an SVG */
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

let Header = ({ currentUser }) => {
  const { email } = currentUser;
  const signOut = () => auth.signOut();

  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="header__navigation">
        <Link className="header__navigation-link" to="/products">
          Products
        </Link>
        <Link
          className="header__navigation-link"
          to="/signin"
          onClick={signOut}
        >
          {email ? `Sign out` : `Sign in`}
        </Link>
      </div>
    </div>
  );
};

export default Header;
