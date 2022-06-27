import { useContext } from "react";
import { GlobalContext } from "../../../../context/globalContext";
import styled from "styled-components";
import Image from 'next/image';
import Link from 'next/link';

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
  z-index: 99999;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  .show {
    display: block;
  }
  .hide {
    display: none;
  }
`;

const ModalContent = styled.div`
  width: 350px;
  height: 250px;
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


const Text = styled.h3`
  color:${(props) => props.color || "inherit"}
  font-weight:${(props) => props.fontWeight || "400 !important"};
  font-size:14px;
`;

const ModalBody = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:center;
  a{
    color:blue;
  }
`;

const Modal = ({visibility}) => {
  const {showConnectingModal} = useContext(GlobalContext);

  function closeModal() {
    showConnectingModal(false);
  }


  return (
    <>
      <ModalContainer onClick={() => closeModal()}>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Connecting...</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Image src="/loading.gif" width={75} height={75} alt="Loading" />
            <Text>MetaMask Not Installed? <Link href="https://metamask.io/">Download Here</Link></Text>
          </ModalBody>
        </ModalContent>
      </ModalContainer>
    </>
  );
};

export default Modal;
