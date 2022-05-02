import React, { useState, useContext } from "react";
import { Context } from '../../../contexts/context';
import FormArea from "../../../components/formArea";
import Header from "../../../components/header";
import Content from "../../../components/content";
import SideBar from "../../../components/sidebar";
import FormContent from "../../../components/formContent";
import { useNavigate } from 'react-router-dom';
import { Alert } from '../../../assets/index';
import { api } from '../../../services/api.js';
import { DoLogin } from '../../../services/auth.js';
import Load from '../../../assets/loadingform.gif';

export default function StepFourth() {

  const navigate = useNavigate();
  const { state } = useContext(Context);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const user = {
    name: state.user.name,
    email: state.user.email,
    password,
    experience: state.user.experience,
    phone: state.user.phone
  }

  async function AddUser(e) {

    e.preventDefault();

    setLoading(true);

    if (password !== "" && confirmPassword !== "") {

      if (password === confirmPassword) {

        let res = await fetch(`${api}/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
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

        setError("As senhas não coincidem. Por favor, digite novamente.")
      }

    } else {

      setLoading(false);

      setError("Por favor, preencha os campos necessários!");
    }

  }

  return (

    <FormArea>

      <Header title={"Cadastre-se em nossa plataforma "} desc={"Preencha os dados do formulário, com seus dados pessoais."} />

      <Content>

        <SideBar active4 />

        <FormContent>

          <form onSubmit={(e) => AddUser(e)}>

            <small> Passo 4/4 </small>

            <h1 className="form-title">  Escolha sua melhor senha  </h1>

            <small className="form-small"> Digite sua senha e a confirme antes de prosseguir com seu cadastro.</small>

            {error &&

              <div className="error">

                <div className="error-icon"> {Alert} </div>

                <small> {error} </small>

              </div>

            }

            <input className="form-input" type="password" placeholder="Digite aqui sua senha.." value={password} onChange={(e) => setPassword(e.target.value)} />

            <input className="form-input" type="password" placeholder="Confirme sua senha..." value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

            <div className="container-button">

              {loading ?

                <button className="form-button"> <img style={{ width: 25, height: 20 }} src={Load} alt="load" /> </button>

                :

                <input className="form-button" type="submit" value="Avançar" />
              }

              <button className="back-button" onClick={() => navigate('/register/3')}> Voltar </button>

            </div>

          </form>

        </FormContent>

      </Content>

    </FormArea>

  );

}


