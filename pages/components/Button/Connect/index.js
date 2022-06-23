import styled from "styled-components";

const ConnectButton = styled.button`
    width: 100%;
    height: 40px;
    background: #101010 !important;
    border: none !important;
    border-radius: 9999px;
    outline: none !important;
    text-align: center;
    font-size: 14px;
    color: #fff !important;
    vertical-align: middle;
    position: relative;
    z-index: 1;
    overflow: hidden;
    animation: all .3s ease;
    :hover{
        color: #878bff;
        border-color: #878bff;
        background: #fff;
    }
`

const Button = ({title}) =>{
    return(
        <>
            <ConnectButton>{title ? title : 'Connect Wallet'}</ConnectButton>
        </>
    )
}

export default Button;