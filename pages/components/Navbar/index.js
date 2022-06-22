import styled from "styled-components";
import Image from 'next/image';
import { IoMdNotifications } from 'react-icons/io'

const NavbarContainer = styled.div`
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
    .active_link{
        background-color:#101010;
        color:#fff;
    }
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
                        <li>Bridge</li>
                        <li>Staking</li>
                        <li>Converter</li>
                        <li>BTT Redomination</li>
                    </ul>
                </NavLinkContainer>
                <ConnectButtonContainer>
                    <div>
                        <IoMdNotifications />
                    </div>
                </ConnectButtonContainer>
            </NavbarContainer>
        </>
    )
}

export default Navbar;