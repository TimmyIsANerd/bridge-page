import styled from "styled-components";
import { useState, useContext } from "react";
import Image from "next/image";
import { IoMdNotifications } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../Button/Connect";
import { GlobalContext } from "../../../context/globalContext";

const NavbarContainer = styled.div`
  max-width: 100%;
  height: 75px;
  padding: 1rem 0.8rem;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 480px) {
    .show_nav {
      display: flex;
    }
    .hide {
      display: none;
    }
  }
  @media (min-width: 768px) {
    .show_nav {
      display: flex;
    }
    .hide {
      display: none;
    }
  }
`;

const NavLogo = styled.div``;

const NavLinkContainer = styled.div`
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 1rem;
  }
  li {
    padding: 5px 15px;
    text-align: center;
  }
  li:hover {
    cursor: pointer;
  }
  .active_link {
    background-color: #101010;
    color: #fff;
    border-radius: 30px;
  }
  @media (max-width: 768px) {
    ul {
      flex-direction: column;
      align-items: center;
      row-gap: 1rem;
      margin-left: -2.5rem;
    }
  }
`;

const NotificationContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  padding: 5px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

const NavColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  @media (max-width: 768px) {
    border-radius: 0px;
    background-color: #fff;
    position: absolute;
    top: 0%;
    left:0%;
    width: 60%;
    height: 100%;
    z-index: 999;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ConnectButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1rem;
  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const Menu = styled.div`
  display: none;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

const ConnectedText = styled.button`
  width: 100%;
  height: ${(props) => props.height || "40px"};
  background-color: ${(props) => props.backgroundColor || "#101010"};
  border: none !important;
  border-radius: 9999px;
  outline: none !important;
  text-align: center;
  font-size: ${(props) => props.fontSize || "16px"};
  color: ${(props) => props.color || "#fff"};
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

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { walletConnected,showDisconnectModalSwitch } = useContext(GlobalContext);

  function handleDisconnectModal(){
    showDisconnectModalSwitch(true);
  }

  function flipToggle() {
    setToggle(!toggle);
  }

  return (
    <>
      <NavbarContainer>
        <NavLogo>
          <Image src="/logo.svg" width={106} height={30} alt="Brand Logo" />
        </NavLogo>
        <NavColumn className={toggle ? "show_nav" : "hide "}>
          <NavLinkContainer>
            <ul>
              <li>Wallet</li>
              <li className="active_link">Bridge</li>
              <li>Staking</li>
              <li>Converter</li>
              <li>BTT Redomination</li>
            </ul>
          </NavLinkContainer>
          <ConnectButtonContainer>
            <NotificationContainer>
              <IoMdNotifications />
            </NotificationContainer>
            {walletConnected ? (
              <ConnectedText
                title="Connected"
                height="36px !important"
                backgroundColor="rgba(255,255,255,.5) !important"
                color="#000"
                hoverBackgroundColor="rgba(255,255,255,.8) !important"
                onClick={() => handleDisconnectModal(true)}
              > Connected </ConnectedText>
            ) : (
              <Button
                height="36px !important"
                backgroundColor="rgba(255,255,255,.5) !important"
                color="#000"
                hoverBackgroundColor="rgba(255,255,255,.8) !important"
              />
            )}
          </ConnectButtonContainer>
        </NavColumn>
        <Menu onClick={flipToggle}>
          <GiHamburgerMenu size={25} padding="0 18px" fontSize="14px" />
        </Menu>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
