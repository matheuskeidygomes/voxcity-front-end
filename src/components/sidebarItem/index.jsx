import React from "react";
import './index.css';

export default function SideBarItem(props) {

  let active = props.active ? "icon-active" : "icon";

  return (

    <div className="item">

      <div className={`${active}`}> {props.image} </div>

      <div className="title-container">

        <span className="title"> {props.title} </span>
        <small className="description"> {props.description} </small>

      </div>

    </div>

  );

}


