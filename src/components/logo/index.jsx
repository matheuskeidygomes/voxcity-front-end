import React from "react";
import Logomarca from '../../assets/logo.png';
import './index.css';

export default function Logo() {

    return <>

        <div className="menu-logo">

            <img src={Logomarca} alt="logo" />
            <h1>Voxcity</h1>

        </div>

    </>

}