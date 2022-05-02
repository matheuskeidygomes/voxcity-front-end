import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Layout from "./components/layout";
import MenuHeader from "./components/menuHeader";
import GradientContainer from "./components/gradientContainer";
import Footer from "./components/footer";
import Routers from "./Routers";

export default function App() {

  return <>

    <BrowserRouter>

      <GradientContainer>

        <MenuHeader />

        <Layout>

          <Routers />

        </Layout>

        <Footer />

      </GradientContainer>

    </BrowserRouter>

  </>

}



