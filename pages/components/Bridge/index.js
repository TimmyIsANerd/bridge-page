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
  margin:0.5rem 0;
`;

const AmountInput = styled.input`
`;

const Bridge = () => {
  return (
    <>
      <Container>
        <Heading>Bridge</Heading>
        <hr />

        <FormContainer>
          <Form>
            <FormGroup>
              <label htmlFor="amount">Amount</label>
              <AmountInput type="number" id="amount" />
            </FormGroup>
          </Form>
        </FormContainer>
        <ButtonContainer>
          <Button />
        </ButtonContainer>
      </Container>
    </>
  );
};

export default Bridge;
