import React from "react";
import "./Navbar.css";

const Navbar = props => <nav className="navbar navbar-inverse navbar-fixed-top">
<div className="container-fluid">

 <p className="title">Clicky Game</p>
<h3 id="scoreDisplay">Current Score: {props.score}</h3>
          <h3 id="topScoreDisplay">Top Score: {props.highScore}</h3>
          
          <h3 id="message" className={props.message == "You chose incorrectly" ? "incorrect" : "correct"}>{props.message}</h3>

          </div>
          </nav>;

export default Navbar;