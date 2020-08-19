import React, { Component } from "react";

import { Link } from "react-router-dom";

import cloud from "./image/cloud.jpg";
import "./Navbar.css";
import "./App.css";
import "./main.css";

class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <nav>
        <div className="logoBtn">
          <div className="logo">
            <Link to="/">
              <img src={cloud} className="logo" alt="" />
            </Link>
          </div>

          <div className="btn" onClick={this.handleClick}>
            <div className="bar"> </div>
            <div className="bar"> </div>
            <div className="bar"> </div>
          </div>
        </div>

        <ul className={this.state.isOpen ? "showNav" : "undefined"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
