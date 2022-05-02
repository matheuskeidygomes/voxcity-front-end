import React, { useState, useContext } from "react";
import { Context } from '../../../contexts/context';
import FormArea from "../../../components/formArea";
import Header from "../../../components/header";
import Content from "../../../components/content";
import SideBar from "../../../components/sidebar";
import FormContent from "../../../components/formContent";
import { useNavigate } from 'react-router-dom';
import { Alert } from '../../../assets/index';

export default function StepThree() {

  const { dispatch } = useContext(Context);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  function AddContacts(e) {

    e.preventDefault();

    if (email !== "" && phone !== "") {

      if (isNaN(phone) === false) {

        dispatch({
          type: 'ADD_EMAIL',
          payload: email
        })

        dispatch({
          type: 'ADD_PHONE',
          payload: phone
        })

        navigate("/register/4");

      } else {

        setError("Por favor, insira um número de telefone válido!")
      }

    } else {
      setError("Por favor, preencha os campos necessários para prosseguir!");
    }

  }

  return (

    <FormArea>

      <Header title={"Cadastre-se em nossa plataforma "} desc={"Preencha os dados do formulário, com seus dados pessoais."} />

      <Content>

        <SideBar active3 />

        <FormContent>

          <form onSubmit={(e) => AddContacts(e)}>

            <small> Passo 3/4 </small>

            <h1 className="form-title">  Como podemos achar você? </h1>

            <small className="form-small"> Preencha os campos abaixo com seus dados de contato </small>

            {error &&

              <div className="error">

                <div className="error-icon"> {Alert} </div>

                <small> {error} </small>

              </div>

            }

            <input className="form-input" type="email" placeholder="Digite aqui seu e-mail completo..." value={email} onChange={(e) => setEmail(e.target.value)} />

            <input className="form-input" type="tel" placeholder="Digite aqui seu telefone com DDD: (XX) XXXXX-XXXX" minlength={11} maxLength={11} value={phone} onChange={(e) => setPhone(e.target.value)} />

            <div className="container-button">

              <input className="form-button" type="submit" value="Avançar" />

              <button className="back-button" onClick={() => navigate('/register/2')}> Voltar </button>

            </div>

          </form>


        </FormContent>

      </Content>

    </FormArea>
    
  );

}


