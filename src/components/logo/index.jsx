import React from "react";
import Logomarca from '../../assets/logo.png';
import './index.css';
import { Link } from "react-router-dom";

export default function Logo() {

    return <>

        <Link className={"logo-link"} to="/">

            <div className="menu-logo">

                <img src={Logomarca} alt="logo" />
                <h1>Voxcity</h1>

            </div>

        </Link>

    </>

}