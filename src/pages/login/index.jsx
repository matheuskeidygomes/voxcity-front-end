import React, { useState } from "react";
import FormArea from "../../components/formArea";
import Header from "../../components/header";
import Content from "../../components/content";
import FormContent from "../../components/formContent";
import './index.css';
import { Link } from 'react-router-dom';
import { Person, Key, Alert } from "../../assets";
import { DoLogin } from "../../services/auth";
import { api } from "../../services/api";

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function Login(e) {

    e.preventDefault();

    if (email !== "" && password !== "") {

      let res = await fetch(`${api}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      let json = await res.json();

      if (json.error) {

        setError(json.error);

      } else {

        DoLogin(json);

        window.location.href = '/';
      }

    } else {

      setError("Por favor, preencha os campos necessários!");
    }

  }


  return <>

      <FormArea>

        <Header title={"Seja bem vindo!"} desc={"Digite suas credenciais para acessar sua conta em nossa plataforma."} />

        <Content>

          <FormContent>

            <form onSubmit={(e) => Login(e)}>

              {error &&

                <div className="error">

                  <div className="error-icon"> {Alert} </div>

                  <small> {error} </small>

                </div>

              }

              <div className="login-label">

                <div id="login-icon" className="icon login-icon">

                  {Person}

                </div>

                <input className="login-input" type="email" placeholder="Digite seu e-mail..." value={email} onChange={(e) => setEmail(e.target.value)} />

              </div>

              <div className="login-label">

                <div>

                  <div id="login-icon" className="icon login-icon">

                    {Key}

                  </div>

                </div>

                <input className="login-input" type="password" placeholder="Digite sua senha..." value={password} onChange={(e) => setPassword(e.target.value)} />

              </div>

              <small className="login-small"> Não possui uma conta? Clique <Link to="/register"> aqui </Link> para se cadastrar.</small>

              <input className="login-button" type="submit" value="Login" />

            </form>


          </FormContent>

        </Content>

      </FormArea>

  </>

}
