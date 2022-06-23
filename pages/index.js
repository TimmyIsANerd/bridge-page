import Head from 'next/head'
import Bridge from './components/Bridge';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import Header from './components/Header';

const BridgeContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
  
`;



function Home() {
  return(
    <>
      <Head>
        {/* Change Page Title Here */}
        <title>Bridge Page</title>
      </Head>
      <Navbar />
      <BridgeContainer>
        <Header />
        <Bridge />
      </BridgeContainer>
      <Footer />
    </>
  )
}


export default Home;