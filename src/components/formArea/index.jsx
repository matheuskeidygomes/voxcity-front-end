import React from "react";
import { Col } from 'reactstrap';
import './index.css';

export default function FormArea(props) {

  return (

    <div className="formArea"> 

      <Col>

        {props.children}

      </Col>

    </div>

  );
}


