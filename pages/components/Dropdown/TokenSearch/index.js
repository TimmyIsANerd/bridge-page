import styled from "styled-components";

export const TokenSearchContainer = styled.div`
  width: 650px;
  height: 450px;
  background-color: #fff;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  margin-top: 0.5rem;
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  margin-top: 1rem;
  overflow-y:scroll;
  @media(max-width: 768px) {
    width:600px;
  }
  @media(max-width:480px){
    width:350px;
  }
`;
export const TokenName = styled.p`
    margin:0;
    @media(max-width:480px){
      font-size:12px;
    }
`;
export const TokenSymbol = styled.p``;
export const TokenContractAddress = styled.p`
    margin:0;
    font-size:12px;
    @media(max-width:480px){
      font-size:8px;
    }
`;
export const TokenSearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background-color: #f5f7fb;
  :focus,
  :active {
    border: none;
  }
`;

export const TokenFormInputWrap = styled.div`
  width: 90%;
  height: 35px;
  border: 1px solid rgba(194, 201, 209, 0.5);
  border-radius: 12px;
  padding: 10px 25px;
  background-color: #f5f7fb;
  border-radius: 30px;
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  margin-top:1rem;
  align-items: center;
  padding: 0 15px;
  * {
    margin: 0 5px;
  }
`;
export const TokenListContainer = styled.div`
    width: 90%;
`;
export const TokenList = styled.div`
  width: 100%;
  margin-top: 1rem;
`;
export const TokenListItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 55px;
  padding: 5px;
  border-bottom:0.2px solid rgba(194, 201, 209, 0.5);
  a.contractAddress{
    font-size:12px;
  }
  .left_side{
    display:flex;
    flex-direction:row;
    align-items:center;
  }
  column-gap:3.5rem;
  @media(max-width:480px){
    column-gap:1rem;
    padding: 0px;

  }
  :hover{ 
    background-color: #f5f7fb;
  }
`;
