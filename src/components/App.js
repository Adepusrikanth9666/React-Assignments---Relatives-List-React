import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    const relatives = ["srikanth", "sainaveen", "chandana", "varunsai"];
    return (
    
        <ol id="relativeList">{relatives.map((relative,index)=>
            <li key={`relativeListItem${index+1}`}></li>)}
            </ol>
      
    );
  }
}

export default App;
