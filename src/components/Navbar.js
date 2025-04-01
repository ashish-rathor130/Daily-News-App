import React, { Component } from "react";
import News from "./News";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    let { newlink ,colorChanger} = this.props;
    let cssStyle = {
      fontSize: "16px",
      fontWeight: "bold",
    };
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-primary px-2 fixed-top">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="#"
            style={{
              textShadow: "1px 1px 0 green, 2px 2px 0 green",
              color: "white",
              letterSpacing: "2px",
              fontWeight: "bold",
            }}
          >
            NewsDaily
          </Link>
          <div className={`border border-white p-1 rounded-circle w-2 h-2 mx-2 `} style={{lineHeight:"4px"}} onClick={colorChanger}>
                  <icon className={`fa ${this.props.color === "white" ?"fa-sun":"fa-moon"}`}></icon>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li className="nav-item">
                <Link
                  className="navbar-brand text-white "
                  to="/"
                  style={cssStyle}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="navbar-brand text-white "
                  to="/business"
                  style={cssStyle}
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="navbar-brand text-white "
                  to="/entertainment"
                  style={cssStyle}
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="navbar-brand text-white "
                  to="/general"
                  style={cssStyle}
                >
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="navbar-brand text-white "
                  to="/health"
                  style={cssStyle}
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="navbar-brand text-white "
                  to="/science"
                  style={cssStyle}
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="navbar-brand text-white "
                  to="/sports"
                  style={cssStyle}
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="navbar-brand text-white "
                  to="/technology"
                  style={cssStyle}
                >
                  Technology
                </Link>
              </li>
              <div className="d-none">
                {document.body.style.background=`${this.props.color}`}
              </div>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
