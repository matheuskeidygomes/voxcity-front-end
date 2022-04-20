import React from "react";
import './index.css';

export default function GradientContainer(props) {

    return <>

        <div class="gradient-container">
            {props.children}
        </div>

    </>

}