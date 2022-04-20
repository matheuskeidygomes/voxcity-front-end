import React, { useState } from "react";
import FormArea from "../../../components/formArea";
import Header from "../../../components/header";
import Content from "../../../components/content";
import SideBar from "../../../components/sidebar";
import FormContent from "../../../components/formContent";
import './index.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Alert } from '../../../assets/index';
import Cool from '../../../assets/cool.png';
import Party from '../../../assets/party.png';

export default function StepTwo() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [experience, setExperience] = useState('');
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const Marked1 = select1 ? 'border-selected' : null;
  const Marked2 = select2 ? 'border-selected' : null;

  const [error, setError] = useState('');

  function AddExperience(e) {

    e.preventDefault();

    if (experience !== '') {

      dispatch({
        type: 'ADD_EXPERIENCE',
        payload: experience
      });

      navigate('/register/3');

    } else {

      setError("Por favor, selecione seu nível de experiência!")
    }

  }

  function setSelected1() {
    setExperience('Iniciante');
    setSelect2(false);
    setSelect1(true);
  }

  function setSelected2() {
    setExperience('Programador');
    setSelect1(false);
    setSelect2(true);
  }

  return (

      <FormArea>

        <Header title={"Cadastre-se em nossa plataforma "} desc={"Preencha os dados do formulário, com seus dados pessoais."} />

        <Content>

          <SideBar active2 />

          <FormContent>

            <form onSubmit={(e) => AddExperience(e)}>

              <small> Passo 2/4 </small>

              <h1 className="form-title">  Qual seu nível de experiência? </h1>

              <small className="form-small"> Escolha a opção que melhor condiz com seu estado profissional atual </small>

              {error &&

                <div className="error">

                  <div className="error-icon"> {Alert} </div>

                  <small> {error} </small>

                </div>

              }

              <div className={`form-experience ${Marked1}`} onClick={() => setSelected1()}>

                <img src={Party} alt="" className="experience-icon" />

                <div className="experience-container">
                  <span className="experience-title"> Iniciante </span>
                  <small className="experience-desc"> Comecei a programar há menos de 2 anos. </small>
                </div>

              </div>

              <div className={`form-experience ${Marked2}`} onClick={() => setSelected2()}>

                <img src={Cool} alt="" className="experience-icon" />

                <div className="experience-container">
                  <span className="experience-title"> Programador </span>
                  <small className="experience-desc"> Comecei a programar há 2 anos ou mais. </small>
                </div>

              </div>

              <div className="container-button">

                <input className="form-button" type="submit" value="Avançar" />

                <button className="back-button" onClick={() => navigate('/register')}> Voltar </button>

              </div>

            </form>

          </FormContent>

        </Content>

      </FormArea>   

  );

}


