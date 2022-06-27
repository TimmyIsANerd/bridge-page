import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import styled from "styled-components";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../context/globalContext";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Image from "next/image";
import Connecting from "./Connecting";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  .show {
    display: block;
  }
  .hide {
    display: none;
  }
  hr {
    opacity: 0.7;
  }
`;

const ModalContent = styled.div`
  width: 550px;
  height: 420px;
  @media (max-width: 480px) {
    width: 95%;
  }
  border-radius: 26px;
  background-color: #fff;
  padding: 1rem;

  hr {
    opacity: 0.8;
  }
`;

const ModalHeader = styled.div``;

const ModalTitle = styled.h2`
  text-align: center;
`;

const IconContainer = styled.div`
  position: relative;
  left: 95%;
  bottom: 20%;
  :hover {
    cursor: pointer;
  }
`;

const Text = styled.h3`
  color:${(props) => props.color || "inherit"}
  font-weight:${(props) => props.fontWeight || "400 !important"};
  font-size:14px;
`;

const ModalBody = styled.div`
  .wallet_option {
    display: flex;
    column-gap: 1rem;
  }
`;

const WalletMenu = styled.div`
  width: 100%;
`;

const WalletOption = styled.div`
  min-width: 212px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 17px 20px 17px;
  margin-top: 10px;
  background: rgba(240, 242, 243, 0.5);
  border-radius: 10px;
  cursor: pointer;
  .network {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;
  }
`;

const Modal = () => {
  const { showModalSwitch, walletConnectSwitch,connectingModal,showConnectingModal } = useContext(GlobalContext);
  const [error, setError] = useState("");
  const { ethereum } = window;

  function connectTrustWallet() {
    // Create a connector
    const connector = new WalletConnect({
      bridge: "https://bridge.walletconnect.org", // Required
      qrcodeModal: QRCodeModal,
    });

    // Check if connection is already established
    if (!connector.connected) {
      // create new session
      connector.createSession();
    }

    // Subscribe to connection events
    connector.on("connect", (error, payload) => {
      if (error) {
        throw error;
      }

      // Get provided accounts and chainId
      const { accounts, chainId } = payload.params[0];
      // Change Global State
      walletConnectSwitch(true);

      // Close Modal
      closeModal();
    });

    connector.on("session_update", (error, payload) => {
      if (error) {
        throw error;
      }

      // Get updated accounts and chainId
      const { accounts, chainId } = payload.params[0];
    });
  }

  function disconnectTrustWallet() {
    connector.on("disconnect", (error, payload) => {
      if (error) {
        throw error;
      }

      // Delete connector
      // Close Modal
      closeModal();
      // Change Global State
      walletConnectSwitch(false);
    });
  }

  function closeModal() {
    showModalSwitch(false);
  }

  async function connectMetaMask() {
    try {
      // Show Connecting Modal
      showConnectingModal(true);
      // Trigger Metamask Login
      await ethereum.request({
        method: "eth_requestAccounts",
      });
      // Change Global State
      walletConnectSwitch(true);
      // Close Modal
      closeModal();
    } catch (error) {
      if(error){
        walletConnectSwitch(false);
      }
      if (connectingModal) {
        showConnectingModal(false);
      }
      walletConnectSwitch(false);
      console.error(error);
      setError("Wallet Connection Failed");
    }
  }

  return (
    <>
      {connectingModal ? <Connecting/> : null }
      <ModalContainer>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Connect Wallet</ModalTitle>
          </ModalHeader>
          <hr />
          <IconContainer>
            <AiOutlineCloseCircle size={20} onClick={() => closeModal()} />
          </IconContainer>
          <ModalBody>
            <WalletMenu>
              <WalletOption onClick={() => connectMetaMask()}>
                <div className="network">
                  <Image
                    src="/metamask.svg"
                    height={20}
                    width={20}
                    layout="fixed"
                    alt="Metamask Logo"
                  />
                  <Text>Connect Metamask Wallet</Text>
                </div>
              </WalletOption>
            </WalletMenu>
            <WalletMenu>
              <WalletOption
                onClick={() => {
                  connectTrustWallet();
                }}
              >
                <div className="network">
                  <Image
                    src="/trustwallet.svg"
                    height={20}
                    width={20}
                    layout="fixed"
                    alt="Trust Wallet Logo"
                  />
                  <Text>Connect Trust Wallet</Text>
                </div>
              </WalletOption>
            </WalletMenu>
          </ModalBody>
        </ModalContent>
      </ModalContainer>
    </>
  );
};

export default Modal;
