import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalContext';
import Bridge from "./components/Bridge";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Header from "./components/Header";
import Modal from "./components/Modal";

const BridgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

function Home() {

  const {showModal} = useContext(GlobalContext);

  return (
    <>
      <Navbar />
      {showModal ? <Modal/> : null}
      <BridgeContainer>
        <Header />
        <Bridge />
      </BridgeContainer>
      <Footer />
    </>
  );
}

export default Home;
