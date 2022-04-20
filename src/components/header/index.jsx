import React from "react";
import './index.css';

export default function Header (props) {

  return (

    <div className="header"> 

      <h1 className="header-title"> {props.title} </h1>
      
      <small className="header-desc"> {props.desc} </small>

    </div>

  );
}


