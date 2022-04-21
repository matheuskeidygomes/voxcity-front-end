import React from "react";
import './index.css';
import NotFoundIcon from '../../assets/notfound.png';

export default function PageNotFound() {
    
    return <>

        <div className="not-found-container">

            <img className="not-found-icon" src={NotFoundIcon} alt="notfound"/>

            <h3 className="not-found-title"> Página não encontrada! </h3>

        </div>

    </>

}