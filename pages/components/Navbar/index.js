import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";
import { IoMdNotifications } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../Button/Connect";

const NavbarContainer = styled.div`
  max-width: 100%;
  height: 75px;
  padding: 1rem 0.8rem;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NavLogo = styled.div``;

const NavLinkContainer = styled.div`
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    column-gap: 1rem;
  }
  li {
    padding: 5px 15px;
  }
  li:hover {
    cursor: pointer;
  }
  .active_link {
    background-color: #101010;
    color: #fff;
    border-radius: 30px;
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
  @media (max-width: 480px) {
    display: none;
  }
`;

const ConnectButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1rem;
`;

const Menu = styled.div`
  display: none;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 480px) {
    display: block;
  }
`;

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  function flipToggle(){
    setToggle(!toggle);
  }

  return (
    <>
      <NavbarContainer>
        <NavLogo>
          <Image src="/logo.svg" width={106} height={30} />
        </NavLogo>
        <NavColumn className={toggle ? "show_nav" : "hide"}>
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
            <Button
              height="36px !important"
              backgroundColor="rgba(255,255,255,.5) !important"
              color="#000"
              hoverBackgroundColor="rgba(255,255,255,.8) !important"
            />
          </ConnectButtonContainer>
        </NavColumn>
        <Menu>
          <GiHamburgerMenu size={25} padding="0 18px" fontSize="14px" />
        </Menu>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
