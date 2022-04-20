import React from "react";
import { Container } from 'reactstrap';
import './index.css';

export default function Layout(props) {

  return (

    <Container fluid className="layout">

      {props.children}

    </Container>

  );
}


