import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from "./components/layout";
import Home from './pages/home';
import StepOne from "./pages/register/step1";
import StepTwo from "./pages/register/step2";
import StepThree from "./pages/register/step3";
import Login from './pages/login';
import StepFourth from "./pages/register/step4";
import { isLogged } from "./services/auth";
import MenuHeader from "./components/menuHeader";
import GradientContainer from "./components/gradientContainer";
import Footer from "./components/footer";
import PageNotFound from "./pages/404";

export default function App() {

  const logged = isLogged();

  function PrivateRoute(props) {
    return logged ? props.children : <Navigate to="/login" />
  }

  function HiddenLoggedRoute(props) {
    return logged ? <Navigate to="/" /> : props.children;
  }

  return <>

    <BrowserRouter>

      <GradientContainer>

        <MenuHeader />

        <Layout>

          <Routes>

            <Route path="/" element={<PrivateRoute> <Home /> </PrivateRoute>} />
            <Route path="/login" element={<HiddenLoggedRoute> <Login /> </HiddenLoggedRoute>} />
            <Route path="register/" element={<HiddenLoggedRoute> <StepOne /> </HiddenLoggedRoute>} />
            <Route path="register/2" element={<HiddenLoggedRoute> <StepTwo /> </HiddenLoggedRoute>} />
            <Route path="register/3" element={<HiddenLoggedRoute> <StepThree /> </HiddenLoggedRoute>} />
            <Route path="register/4" element={<HiddenLoggedRoute> <StepFourth /> </HiddenLoggedRoute>} />
            <Route path="*" element={<PageNotFound/>} />

          </Routes>

        </Layout>

        <Footer/>

      </GradientContainer>

    </BrowserRouter>

  </>

}



