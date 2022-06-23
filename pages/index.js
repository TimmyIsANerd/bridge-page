import Head from 'next/head'
import Bridge from './components/Bridge';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import styled from 'styled-components';

const BridgeContainer = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
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
        <Bridge />
      </BridgeContainer>
      <Footer />
    </>
  )
}


export default Home;