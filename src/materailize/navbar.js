import React, { Component } from "react";
import M from 'materialize-css/dist/js/materialize.min.js'
import {Link} from 'react-router-dom';
import './navbar.css'


class navbar extends Component {
  
    
    componentDidMount() {
        document.addEventListener("DOMContentLoaded", function() {
          var elems = document.querySelectorAll(".sidenav");
          var instances = M.Sidenav.init(elems, {});
        });
      }





  render() {
  
    return (
      <div style={{height:"100%"}} className="valign-wrapper">
        <nav style={{height:"100%"}}>
          <div class="nav-wrapper mynav">
            <a href="#!" class="brand-logo">
              Logo
            </a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger">
              <i class="material-icons ">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
              <li>
                <Link to="/">Resume</Link>
              </li>
              <li>
              <Link to="/contact">Contact Us</Link>
              </li>
              <li>
              <Link to="/about">About Us</Link>
              </li>
              <li>
              <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
        <li>
                <Link to="/">Resume</Link>
              </li>
              <li>
              <Link to="/contact">Contact Us</Link>
              </li>
              <li>
              <Link to="/about">About Us</Link>
              </li>
              <li>
              <Link to="/projects">Projects</Link>
              </li>
        </ul>
      </div>
    );
  }
}

export default navbar;
