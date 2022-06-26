import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/globalContext";
import Bridge from "./components/Bridge";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Connected from "./components/Modal/Connected";

const BridgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

function Home() {
  const { showModal, showDisconnectModal, walletConnectSwitch } =
    useContext(GlobalContext);
  const { ethereum } = window;

  // Check if Metamask is connected
  useEffect(() => {
    (async function checkMetamaskConnection(){
      const accounts = await ethereum.request({ method: 'eth_accounts' })
      if(accounts.length !== 0){
        walletConnectSwitch(true);
      } else {
        walletConnectSwitch(false);
  
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Check if Trust Wallet is Connected
  // Create a connector
  const connector = new WalletConnect({
    bridge: "https://bridge.walletconnect.org", // Required
    qrcodeModal: QRCodeModal,
  });

  return (
    <>
      <Navbar />
      {showModal ? <Modal /> : null}
      {showDisconnectModal ? <Connected /> : null}
      <BridgeContainer>
        <Header />
        <Bridge />
      </BridgeContainer>
      <Footer />
    </>
  );
}

export default Home;
