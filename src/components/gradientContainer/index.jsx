import React from "react";
import './index.css';

export default function GradientContainer(props) {

    return <>

        <div className="gradient-container">
            {props.children}
        </div>

    </>

}