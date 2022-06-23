import styled from "styled-components";

const ConnectButton = styled.button`
    width: 100%;
    height: ${(props) => props.height || "40px"};
    background-color: ${(props) => props.backgroundColor || "#101010"};
    border: none !important;
    border-radius: 9999px;
    outline: none !important;
    text-align: center;
    font-size: ${(props) => props.fontSize || "14px"};
    color: ${(props) => props.color || "#fff"};
    vertical-align: middle;
    position: relative;
    z-index: 1;
    overflow: hidden;
    animation: all .3s ease;
    padding:0 10px;
    :hover{
        cursor:pointer;
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