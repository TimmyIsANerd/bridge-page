import styled from "styled-components";
import { useState, useContext } from "react";
import { GlobalContext } from "../../../context/globalContext";
import { AiOutlineCloseCircle } from "react-icons/ai";

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
  .show{
    display:block;
  }
  .hide{
    display:none;
  }
`;

const ModalContent = styled.div`
  width: 550px;
  height: 350px;
  @media (max-width: 480px) {
    width: 95%;
  }
  border-radius: 26px;
  background-color: #fff;
  padding: 1rem;

  hr{
    opacity:0.8;
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

const ModalBody = styled.div``;

const WalletMenu = styled.div``;

const WalletOption = styled.div``;



const Modal = () => {
  const {showModalSwitch} = useContext(GlobalContext);

  function closeModal(){
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
            <AiOutlineCloseCircle size={20}  onClick={() => closeModal()} />
          </IconContainer>
          <ModalBody>
            <h3>Connect To Metamask</h3>
            <WalletMenu>
              <WalletOption>
              
              </WalletOption>
            </WalletMenu>
          </ModalBody>
        </ModalContent>
      </ModalContainer>
    </>
  );
};

export default Modal;
