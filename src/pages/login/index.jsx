import React, { useState, useContext } from "react";
import FormArea from "../../components/formArea";
import Header from "../../components/header";
import Content from "../../components/content";
import FormContent from "../../components/formContent";
import './index.css';
import { Link, useNavigate } from 'react-router-dom';
import { Person, Key, Alert } from "../../assets";
import { DoLogin } from "../../services/auth";
import { api } from "../../services/api";
import Load from '../../assets/loadingform.gif';
import { UserContext } from "../../UserProvider";
export default function Login() {

  const navigate = useNavigate();
  const context = useContext(UserContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function Login(e) {

    e.preventDefault();
    setLoading(true);

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

        setLoading(false);
        setError(json.error);

      } else {

        DoLogin(json);
        navigate("/");
        
      }

    } else {

      setLoading(false);
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

            {loading ?

              <button className="login-button"> <img style={{width:25, height:20}} src={Load} alt="load"/> </button>

              :

              <input className="login-button" type="submit" value="Login" />
            }

          </form>

        </FormContent>

      </Content>

    </FormArea>

  </>

}
