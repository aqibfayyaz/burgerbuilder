import React, { Component } from "react";
import "./resume.css";

import aqib from "../look.jpg";

class resume extends Component {
  render() {
    return (
      <div className="maindiv ">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            className="myimage center-align"
            src={aqib}
            alt="could not load image"
          />
        </div>

        <div className="bannertext">
          <h1>Full Stack Web Developer</h1>

          <hr />
          <p>
            HTML/CSS | BOOTSTRAP | JAVASCRIPT | REACT | JQUERY | PHP | WORDPRESS
            | MATERALIZE CSS
          </p>

          <div class="row center-align hide-on-med-and-down ">
            <div class="col s6 m3">
              <i class="  white large material-icons">code</i>
            </div>
            <div class="col s6 m3">
              <i class="large white  material-icons">android</i>
            </div>
            <div class="col s6 m3">
              <i class="large white  material-icons">computer</i>
            </div>
            <div class="col s6 m3">
              <i class="large white material-icons">local_phone</i>
            </div>
          </div>
        </div>


      










      </div>
    );
  }
}

export default resume;
