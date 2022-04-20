import React from "react";
import { Col } from 'reactstrap';
import './index.css';

export default function FormContent(props) {

  return (

    <Col className="formContent"> 

      {props.children}

    </Col>

  );
}


