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
    padding:${(props) => props.padding || "0 18px"};
    transition:0.5s;
    :hover{
        cursor:pointer;
        background-color: ${(props) => props.hoverBackgroundColor || "#4500a0"};
    }
`

const Button = ({title,height,backgroundColor,color,hoverBackgroundColor}) =>{
    return(
        <>
            <ConnectButton
                height={height}
                backgroundColor={backgroundColor}
                color={color}
                hoverBackgroundColor={hoverBackgroundColor}
            >
                {title ? title : 'Connect Wallet'}
            </ConnectButton>
        </>
    )
}

export default Button;