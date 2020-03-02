import React, { Component } from "react";

import Main from './components/main';
import Navbar from './materailize/navbar';


class App extends Component {
  render() {
    return (
      <div style={{height:"100%",display:"flex",flexFlow:"column"}}>
       
       <div style={{height:"10%"}}>
        <Navbar/>
        </div>

        <div style={{flexGrow:"1"}}>
        <Main  />
        </div>

      </div>
    );
  }
}

export default App;
