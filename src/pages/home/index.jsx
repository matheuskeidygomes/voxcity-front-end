import React, { useState, useEffect } from "react";
import './index.css';
import Cookies from 'js-cookie';
import { api } from '../../services/api';
import LoadingIcon from '../../assets/loading.gif';

export default function Home() {

  let userId = Cookies.get('id');
  let token = Cookies.get('token');
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function getUser() {

      let res = await fetch(`${api}/user/${userId}`, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });


      let hasUser = await res.json();

      setUser(hasUser);
      setLoading(false);
    }

    getUser();

  }, [])

  return <>

    {loading ? 

      <img src={LoadingIcon} alt="loading"/>
    
    :

      <div class="user-container">

        <h2> Seja bem vindo! </h2>

        <span className="user-title">Nome Completo:</span> <small className="user-info">{user.name}</small>
        <span className="user-title">E-mail:</span> <small className="user-info">{user.email}</small>
        <span className="user-title">Telefone:</span> <small className="user-info">{user.phone}</small>
        <span className="user-title">Nível:</span> <small className="user-info">{user.experience}</small>
        <span className="user-title">Id Alfanumérico:</span> <small className="user-info">{user.alphanumeric}</small>

      </div>

    }

  </>

}


