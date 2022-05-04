import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { isLogged, refreshTokenIsValid, DoLogin } from "./services/auth";
import Home from './pages/home';
import StepOne from "./pages/register/step1";
import StepTwo from "./pages/register/step2";
import StepThree from "./pages/register/step3";
import StepFourth from "./pages/register/step4";
import Login from './pages/login';
import PageNotFound from "./pages/404";
import { api } from './services/api.js';

export default function Routers() {

  const [verifyingToken, setVerifyingToken] = useState(false);
  const logged = isLogged();

  useEffect(() => {

    async function RefreshToken() {

      if (refreshTokenIsValid().status === true) {

        setVerifyingToken(true)

        const res = await fetch(`${api}/refresh`, {
          method: 'POST',
          body: JSON.stringify({
            refreshToken: refreshTokenIsValid().refreshToken
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const json = await res.json();

        DoLogin(json);
        setVerifyingToken(false);

      }

    }

    RefreshToken();

  }, [])

  function PrivateRoute(props) {
    return logged ? props.children : <Navigate to="/login" />
  }

  function HiddenLoggedRoute(props) {
    return logged ? <Navigate to="/" /> : props.children;
  }

  if (verifyingToken) {

    return;

  } else {

    return (

      <Routes>

        <Route path="/" element={<PrivateRoute> <Home /> </PrivateRoute>} />
        <Route path="/login" element={<HiddenLoggedRoute> <Login /> </HiddenLoggedRoute>} />
        <Route path="register/" element={<HiddenLoggedRoute> <StepOne /> </HiddenLoggedRoute>} />
        <Route path="register/2" element={<HiddenLoggedRoute> <StepTwo /> </HiddenLoggedRoute>} />
        <Route path="register/3" element={<HiddenLoggedRoute> <StepThree /> </HiddenLoggedRoute>} />
        <Route path="register/4" element={<HiddenLoggedRoute> <StepFourth /> </HiddenLoggedRoute>} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>

    );

  }

}
