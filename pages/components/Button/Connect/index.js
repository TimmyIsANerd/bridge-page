import styled from "styled-components";
import { useContext } from "react";
import { GlobalContext } from "../../../../context/globalContext";

const ConnectButton = styled.button`
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



const Button = ({
  title,
  height,
  backgroundColor,
  color,
  hoverBackgroundColor,
  padding,
}) => {
  const { showModalSwitch } = useContext(GlobalContext);

  function handleConnectClick() {
    showModalSwitch(true);
  }

  return (
    <>
      <ConnectButton
        height={height}
        backgroundColor={backgroundColor}
        color={color}
        hoverBackgroundColor={hoverBackgroundColor}
        padding={padding}
        onClick={handleConnectClick}
      >
        {title ? title : "Connect Wallet"}
      </ConnectButton>
    </>
  );
};

export default Button;
