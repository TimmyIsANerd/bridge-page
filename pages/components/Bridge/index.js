import { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Connect";

const Container = styled.div`
  border-radius: 26px;
  background: #fff;
  min-height: 300px;
  width: 700px;
  margin: 1.5rem 0;
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

const ErrorMsg = styled.p`
  color: #e85151;
`;

const Bridge = () => {
  const [isError, setIsError] = useState(false);

  return (
    <>
      <Container>
        <Heading>Bridge</Heading>
        <hr />

        <FormContainer>
          <Form>
            <FormGroup>
              <LabelContainer>
                <label htmlFor="amount">Amount</label>
                <Balance>Balance:--</Balance>
              </LabelContainer>
              <InputWrap>
                <AmountInput type="number" id="amount" />
              </InputWrap>
              {isError ? <ErrorMsg>Error Message</ErrorMsg> : null}
            </FormGroup>
          </Form>
        </FormContainer>
        <ButtonContainer>
          <Button
            height="60px"
            padding="4px 16px"
          />
        </ButtonContainer>
      </Container>
    </>
  );
};

export default Bridge;
