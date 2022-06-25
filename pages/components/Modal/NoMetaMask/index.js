import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
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
  height: 270px;
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

const ModalBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;
  a {
    color: blue;
  }
`;

const CloseButton = styled.button`
  width: 100%;
  height: ${(props) => props.height || "40px"};
  background-color: ${(props) => props.backgroundColor || "#101010"};
  border: none !important;
  border-radius: 9999px;
  outline: none !important;
  text-align: center;
  font-size: ${(props) => props.fontSize || "16px"};
  color: ${(props) => props.color || "#fff"};
  vertical-align: middle;
  position: relative;
  z-index: 1;
  overflow: hidden;
  padding: ${(props) => props.padding || "0 18px"};
  transition: 0.5s;
  :hover {
    cursor: pointer;
    background-color: ${(props) => props.hoverBackgroundColor || "#4500a0"};
  }
`;

const IconContainer = styled.div`
  position: relative;
  left: 93%;
  bottom: 30%;
  :hover {
    cursor: pointer;
  }
`;

const Text = styled.h3`
  color:${(props) => props.color || "inherit"}
  font-weight:${(props) => props.fontWeight || "400 !important"};
  font-size:14px;
`;

const NoMetaMask = () => {
  
  function closeModal() {
    showDisconnectModalSwitch(false);
  }

  return (
    <>
      <ModalContainer>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Install Metamask</ModalTitle>
          </ModalHeader>
          <IconContainer>
            <AiOutlineCloseCircle size={20} onClick={() => closeModal()} />
          </IconContainer>
          <ModalBody>
            <Image src="/metamask.svg" width={75} height={75} />
            <Text>
              Don`&apos;'t have metamask?{" "}
              <Link href="https://metamask.io/">Download Here</Link>
            </Text>
            <CloseButton onClick={() => handleDisconnectModal()}>
              Close
            </CloseButton>
          </ModalBody>
        </ModalContent>
      </ModalContainer>
    </>
  );
};

export default NoMetaMask;
