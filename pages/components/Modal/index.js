import styled from "styled-components";
import { useContext } from "react";
import { GlobalContext } from "../../../context/globalContext";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Image from "next/image";

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
  const { showModalSwitch } = useContext(GlobalContext);

  function closeModal() {
    showModalSwitch(false);
  }

  return (
    <>
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
              <Text>Connect To Metamask</Text>
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
