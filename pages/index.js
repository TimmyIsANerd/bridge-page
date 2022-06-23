import Head from 'next/head'
import { useState } from 'react';
import Bridge from './components/Bridge';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import Header from './components/Header';
import Modal from './components/Modal';

const BridgeContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
`;


function Home() {
  const [modal, setModal] = useState(false);

  return(
    <>
      <Head>
        {/* Change Page Title Here */}
        <title>Bridge Page</title>
      </Head>
      <Navbar />
      <Modal />
      <BridgeContainer>
        <Header />
        <Bridge />
      </BridgeContainer>
      <Footer />
    </>
  )
}


export default Home;