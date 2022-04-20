import React from "react";
import './index.css';
import SideBarItem from "../sidebarItem";
import { Person, Contact, Profissional, Key } from '../../assets/index';

export default function SideBar(props) {

  const FirstItem = props.active1 ? 'active' : false;
  const SecondItem = props.active2 ? 'active' : false;
  const ThirdItem = props.active3 ? 'active' : false;
  const FourthItem = props.active4 ? 'active' : false;

  return (

    <div className="sidebar">

      <SideBarItem active={FirstItem} title="Pessoal" description="Se identifique" image={Person}/>
      <SideBarItem active={SecondItem} title="Profissional" description="Seu nível" image={Profissional}/>
      <SideBarItem active={ThirdItem} title="Contatos" description="Como te achar" image={Contact}/>
      <SideBarItem active={FourthItem} title="Privacidade" description="Assegure-se" image={Key}/>
      
    </div>

  );
}


