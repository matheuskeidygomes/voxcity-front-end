import React, { useState, useContext } from "react";
import { Context } from '../../../contexts/context';
import FormArea from "../../../components/formArea";
import Header from "../../../components/header";
import Content from "../../../components/content";
import SideBar from "../../../components/sidebar";
import FormContent from "../../../components/formContent";
import './index.css';
import { useNavigate, Link } from 'react-router-dom';
import { Alert } from '../../../assets/index';

export default function StepOne() {

  const { dispatch } = useContext(Context);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [error, setError] = useState('');

  function AddName(e) {

    e.preventDefault();

    if (name !== '') {

      dispatch({
        type: 'ADD_NAME',
        payload: name
      });

      navigate('/register/2');

    } else {

      setError("Por favor, preencha os campos necessários para prosseguir!");
    }

  }

  return (

      <FormArea>

        <Header title={"Cadastre-se em nossa plataforma "} desc={"Preencha os dados do formulário, com seus dados pessoais."} />

        <Content>

          <SideBar active1 />

          <FormContent>

            <form onSubmit={(e) => AddName(e)}>

              <small> Passo 1/4 </small>

              <h1 className="form-title"> Vamos começar com seu nome </h1>

              <small className="form-small">Preencha o campo abaixo com seu nome completo</small>

              {error &&

                <div className="error">

                  <div className="error-icon"> {Alert} </div>

                  <small> {error} </small>

                </div>

              }

              <input className="form-input" type="text" placeholder="Digite aqui seu nome completo..." value={name} onChange={(e) => setName(e.target.value)} />

              <small className="already-account">Já possui uma conta? Clique <Link to="/login"> aqui </Link>  para realizar o login.</small>

              <div className="container-button">

                <input className="form-button" type="submit" value="Avançar" />

              </div>

            </form>

          </FormContent>

        </Content>

      </FormArea>

  );

}


