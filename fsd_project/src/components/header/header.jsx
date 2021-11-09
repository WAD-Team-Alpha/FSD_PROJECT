import React from "react";
import classes from "./header.module.css";
import AboutAccount from "./about_account/about_account";
import LogoTitle from "./logo_title/logo_title";
import SearchBar from "./search_bar/search_bar";

const Header = (props) => {
  return (
    <header>
      <div className={`${classes.header}`}>
        <LogoTitle />
        <SearchBar />
        <AboutAccount
          loginButtonHandler={props.loginButtonHandler}
          signin={props.signin}
        />
      </div>
    </header>
  );
};

export default Header;
