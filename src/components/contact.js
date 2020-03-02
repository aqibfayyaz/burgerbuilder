import React, { Component } from "react";
import aqib from "../003.jpg";
import "./contact.css";
import {Link} from 'react-router-dom'

class contact extends Component {
  render() {
    return (
      <div>
        <div
          className="container firstdiv"
          style={{
            display: "flex",
            justifyContent: "space-between",
           
          }}
        >
          <div className='div1' style={{ width: "30%"}}>
            <h1>Aqib Fayyaz Shaheer</h1>
            <div className="card">
              <div className="card-image">
                <img src={aqib} className='myimg' />
                
              </div>
              <div className="card-content">
                <p>
                I am a Software Engineer and Professional web developer with more than 2 years of experience in full stack development.
                
                 </p>
              </div>
              <div className="card-action">
                <Link to="/projects">Check My Projects</Link>
              </div>
            </div>
          </div>

          <div className='div2'
            style={{
              
              width: "55%",
              textAlign: "center"
            }}
          >
            <h1>CONTACT US</h1>
            <hr className="line" />
            <br />
            <br />

            <div style={{ display: "flex",flexFlow:'row', justifyContent: "flex-start" }}>
              <div  >
                <i className="large material-icons white-text black">call</i>{" "}
              </div>
              <div className="valign-wrapper" style={{marginLeft:'10%'}}>
                <h5>0314-5707308</h5>
              </div>
            </div>
            <br />

            <div style={{ display: "flex",flexFlow:'row', justifyContent: "flex-start" }}>
              <div>
                <i className="large material-icons white-text black">mail</i>{" "}
              </div>
              <div className="valign-wrapper" style={{marginLeft:'10%'}}>
                <h5>aqibbfayyaz@gmail.com</h5>
              </div>
            </div>
            <br />

            <div style={{ display: "flex",flexFlow:'row', justifyContent: "flex-start" }}>
              <div>
                <i className="large material-icons white-text black">
                  {" "}
                  phone_android
                </i>{" "}
              </div>
              <div className="valign-wrapper" style={{marginLeft:'10%'}}>
                <h5>0310-9180881</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default contact;
