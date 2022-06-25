import { useContext, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../../context/globalContext";
import Button from "../Button/Connect";
import Image from "next/image";

const Container = styled.div`
  border-radius: 26px;
  background: #fff;
  min-height: 300px;
  width: 700px;
  margin: 4rem 0;
  padding: 1.5rem;
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    width: 80%;
  }
`;

const Heading = styled.h3`
  font-weight: 500;
`;

const ButtonContainer = styled.div`
  width: 100%;
`;

const FormContainer = styled.div``;

const Form = styled.form``;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  row-gap: 0.5rem;
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  label {
    font-weight: 600;
  }
`;

const Balance = styled.div``;

const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 50px;
`;
const AmountInput = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid rgba(194, 201, 209, 0.5);
  border-radius: 12px;
  padding: 10px 25px;
  background-color: #f5f7fb;
`;

const AddressInput = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid rgba(194, 201, 209, 0.5);
  border-radius: 12px;
  padding: 10px 25px;
  background-color: #f5f7fb;
  :disabled {
    cursor: not-allowed;
  }
`;

const ErrorMsg = styled.p`
  color: #e85151;
`;

const DropdownContainer = styled.div`
  color: #000;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
`;

const DropdownHeader = styled.div`
  cursor: pointer;
  border-radius: 12px;
  border: 1px solid rgba(194, 201, 209, 0.5);
  background-color: #f5f7fb;
  height: 45px;
  backdrop-filter: blur(1px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:div {
    display: flex;
  }
  .chain_icon {
    margin: 0px;
    display: flex;
    align-items: center;
    width: 15px;
    height: 15px;
  }
  :hover {
    cursor: ${(props) => props.cursor || "pointer"};
  }
`;

const DropdownListContainer = styled.div`
  color: #000;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: -10px 48.5967px 140px rgba(126, 123, 160, 0.2);
  backdrop-filter: blur(19px);
  border-radius: 10px;
  overflow: hidden;
  width: 15.5em;
  position: absolute;
  /* top: 10%; */
  margin-top: 1.5rem;
  z-index: 999;
`;

const DropdownList = styled("ul")`
  list-style-type: none;
`;

const ListItem = styled("li")`
  cursor: pointer;
  font-weight: 400;
  padding: 15px 0;
  margin: 0 0 0 -40px;
  display: flex;
  align-items: center;
  transition: all 0.3s linear;
  backdrop-filter: blur(19px);

  &:last-child {
    margin-bottom: -16px;
  }
  &:hover {
    background: #4500a0;
    color: rgba(255, 255, 255, 1);
  }
`;

const TokenIcon = styled("img")`
  margin: 0 15px;
  width: 25px;
  height: 25px;
  object-fit: contain;
`;

const Text = styled("p")`
  font-size: 13px;
  color: #91979d;
  margin-left: 25px;
  :disabled {
    cursor: not-allowed;
  }
`;

const ConnectWalletDropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50px;
  z-index: 99;
  :hover {
    cursor: pointer;
  }
`;

const ConnectWalletOption = styled.div`
  margin-top: 1rem;
  height: 50px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 5px #333;
  border-radius: 12px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
  }
  .show {
    display: block;
  }
  .hide {
    display: hide;
  }
`;

const DepositBTN = styled.button`
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
  :disabled{
    background-color:grey;
  }
`

const Bridge = () => {
  const { ethereum } = window;
  const [isError, setIsError] = useState(false);
  const [showConnectOption, setShowConnectOption] = useState(false);
  const { walletConnected, showModalSwitch } = useContext(GlobalContext);

  function showOption() {
    setShowConnectOption(!showConnectOption);
  }

  function handleModalSwitch() {
    showModalSwitch();
  }

  return (
    <>
      <Container>
        <Heading>Bridge</Heading>
        <hr />

        <FormContainer>
          <Form>
            <FormGroup>
              <LabelContainer>
                <label htmlFor="token">Token</label>
              </LabelContainer>
              <InputWrap>
                <DropdownContainer>
                  {walletConnected ? (
                    <DropdownHeader>
                      <Text>Select Token</Text>
                    </DropdownHeader>
                  ) : (
                    <DropdownHeader cursor="not-allowed">
                      <Text>Connect Wallet First</Text>
                    </DropdownHeader>
                  )}
                </DropdownContainer>
              </InputWrap>
            </FormGroup>
            <FormGroup>
              <LabelContainer>
                <label htmlFor="amount">Amount</label>
                <Balance>Balance:--</Balance>
              </LabelContainer>
              <InputWrap>
                <AmountInput
                  type="number"
                  id="amount"
                  placeholder="Enter an amount"
                />
              </InputWrap>
              {isError ? <ErrorMsg>Error Message</ErrorMsg> : null}
            </FormGroup>
            <FormGroup>
              <LabelContainer>
                <label htmlFor="address">Receiving Address</label>
              </LabelContainer>
              <InputWrap>
                {walletConnected ? (
                  <AddressInput
                    type="text"
                    id="address"
                    value="0xF2255c5F4dd0a2dfC4B65bab08EE27CA58333362"
                  />
                ) : (
                  <>
                    <ConnectWalletDropdown onClick={() => showOption()}>
                      <AddressInput
                        type="text"
                        disabled
                        id="address"
                        placeholder="Connect Wallet First"
                      />
                      {showConnectOption ? (
                        <>
                          <ConnectWalletOption
                            onClick={() => handleModalSwitch()}
                          >
                            <div>
                              <Text>Connect Wallet</Text>
                              <Image
                                src="/metamask.svg"
                                width={20}
                                height={20}
                              />
                            </div>
                          </ConnectWalletOption>
                        </>
                      ) : null}
                    </ConnectWalletDropdown>
                  </>
                )}
              </InputWrap>
            </FormGroup>
          </Form>
        </FormContainer>
        {walletConnected ? (
          <>
            <DepositBTN>Deposit BTT</DepositBTN>
          </>
        ) : (
          <>
            <ButtonContainer>
              <Button height="60px" padding="4px 16px" />
            </ButtonContainer>
          </>
        )}
      </Container>
    </>
  );
};

export default Bridge;
