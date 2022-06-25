import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
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
  z-index: 9999;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  .show {
    display: block;
  }
  .hide {
    display: none;
  }
  hr{
    opacity:0.7;
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
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 1rem;
  }
`;

const Modal = () => {
  const { showModalSwitch, walletConnectSwitch } = useContext(GlobalContext);
  const [isMetaMaskWallet, setIsMetaMaskWallet] = useState(false);
  const [error, setError] = useState("");
  const [connecting, setConnecting] = useState(false);
  const { ethereum } = window;

  const networks = {
    bsc: {
      chainId: `0x${Number(56).toString(16)}`,
      chainName: "Binance Smart Chain Mainnet",
      nativeCurrency: {
        name: "Binance Chain Native Token",
        symbol: "BNB",
        decimals: 18,
      },
      rpcUrls: [
        "https://bsc-dataseed1.binance.org",
        "https://bsc-dataseed2.binance.org",
        "https://bsc-dataseed3.binance.org",
        "https://bsc-dataseed4.binance.org",
        "https://bsc-dataseed1.defibit.io",
        "https://bsc-dataseed2.defibit.io",
        "https://bsc-dataseed3.defibit.io",
        "https://bsc-dataseed4.defibit.io",
        "https://bsc-dataseed1.ninicoin.io",
        "https://bsc-dataseed2.ninicoin.io",
        "https://bsc-dataseed3.ninicoin.io",
        "https://bsc-dataseed4.ninicoin.io",
        "wss://bsc-ws-node.nariox.org",
      ],
      blockExplorerUrls: ["https://bscscan.com"],
    },
  };

  const handleNetworkSwitch = async (networkName) => {
    setError();
    await changeNetwork({ networkName, setError });
  };

  const changeNetwork = async ({ networkName, setError }) => {
    try {
      if (!window.ethereum) throw new Error("No crypto wallet found");
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...networks[networkName],
          },
        ],
      });
    } catch (err) {
      setError(err.message);
    }
  };

  function closeModal() {
    showModalSwitch(false);
  }

  const isMetaMaskInstalled = () => {
    //Have to check the ethereum binding on the window object to see if it's installed
    if (ethereum.isMetaMask === true) {
      return true;
    } else {
      return false;
    }
  };

  function checkForWallet() {
    if (isMetaMaskInstalled === true) {
      setIsMetaMaskWallet(true);
    } else {
      setIsMetaMaskWallet(false);
    }
  }

  function networkChanged(chainId) {
    console.log({ chainId });
  }

  useEffect(() => {
    checkForWallet();
    ethereum.on("chainChanged", networkChanged);

    return () => {
      ethereum.removeListener("chainChanged", networkChanged);
    };
  }, []);

  async function connectMetaMask() {
    try {
      // Show Connecting Modal
      setConnecting(true);
      // Trigger Metamask Login
      await ethereum.request({
        method: "eth_requestAccounts",
      });
      // Change Global State
      walletConnectSwitch(true);
      // Close Modal
      closeModal();
    } catch (error) {
      if(connecting){
        setConnecting(false);
      }
      console.error(error);
      walletConnectSwitch(false);
      setError("Wallet Connection Failed");
    }
  }

  return (
    <>
      {connecting ? <Connecting /> : null}
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
            <div className="wallet_option">
              <Image src="/metamask.svg" height={20} width={20} />
              <Text>
                {isMetaMaskWallet
                  ? "Connect Metamask Wallet"
                  : "Download & Install Metamask Wallet"}
              </Text>
              <Text color="red !important">{error}</Text>
            </div>
            <WalletMenu>
              <WalletOption onClick={() => connectMetaMask()}>
                <div className="network">
                  <Image
                    src="/bsc network.png"
                    height={20}
                    width={20}
                    layout="fixed"
                  />
                  <Text>BSC Network</Text>
                </div>
                <Text
                  fontWeight="300 !important"
                  onClick={() => handleNetworkSwitch("bsc")}
                >
                  Add RPC
                </Text>
              </WalletOption>
            </WalletMenu>
            <div className="wallet_option">
              <Image src="/trustwallet.svg" height={20} width={20} />
              <Text>Connect To Trust Wallet</Text>
            </div>
            <WalletMenu>
              <WalletOption>
                <div className="network">
                  <Image
                    src="/bsc network.png"
                    height={20}
                    width={20}
                    layout="fixed"
                  />
                  <Text>BSC Network</Text>
                </div>
                <Text fontWeight="300 !important">Add RPC</Text>
              </WalletOption>
            </WalletMenu>
          </ModalBody>
        </ModalContent>
      </ModalContainer>
    </>
  );
};

export default Modal;
