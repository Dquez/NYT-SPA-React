import React from "react";
import {Link} from "react-router-dom";
import "./Nav.css";
const Nav = (props) =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
    <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
    {/* Ternary operator to switch between the link that takes users to the saved articles and the home page */}
    <Link to={props.articleType === "notSaved" ? "/savedArticles" : "/" }><p className="text-center" id="view-saved">
             {props.articleType === "notSaved" ?  "Click me to view the saved articles!" : "Go back to the homepage!"}
             </p>
    </Link>
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>
    </div>
  </nav>;

export default Nav;
