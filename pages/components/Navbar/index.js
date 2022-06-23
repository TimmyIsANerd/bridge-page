import styled from "styled-components";
import Image from 'next/image';
import { IoMdNotifications } from 'react-icons/io';
import Button from '../Button/Connect';

const NavbarContainer = styled.div`
    position:sticky;
    max-width:100%;
    height:75px;
    padding:1rem 0.8rem;
    background-color:${(props) => props.backgroundColor};
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`

const NavLogo = styled.div`

`

const NavLinkContainer = styled.div`

    ul{
        list-style:none;
        display:flex;
        justify-content:space-between;
        column-gap:1rem;
    }
    li{
        padding:5px 15px;
    }
    li:hover{
        cursor:pointer;
    }
    .active_link{
        background-color:#101010;
        color:#fff;
        border-radius:30px;
    }
`

const NotificationContainer = styled.div`
    background-color: rgba(255,255,255,.5);
    padding:5px;
    border-radius:50%;
    width:25px;
    height:25px;
    display:flex;
    justify-content:center;
    align-items:center;
`

const ConnectButtonContainer = styled.div`

`



const Navbar = () =>{
    return(
        <>
            <NavbarContainer>
                <NavLogo>
                    <Image src='/logo.svg' width={106} height={30} />
                </NavLogo>
                <NavLinkContainer>
                    <ul>
                        <li>Wallet</li>
                        <li className="active_link">Bridge</li>
                        <li>Staking</li>
                        <li>Converter</li>
                        <li>BTT Redomination</li>
                    </ul>
                </NavLinkContainer>
                <NotificationContainer>
                    <IoMdNotifications />
                </NotificationContainer>
                <ConnectButtonContainer>
                    <Button
                        height="36px"
                        backgroundColor="rgba(255,255,255,.5)"
                        color="#fff"
                    />
                </ConnectButtonContainer>
            </NavbarContainer>
        </>
    )
}

export default Navbar;