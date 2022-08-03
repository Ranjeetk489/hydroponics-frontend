import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  .form_type_onboarding {
    display: flex;
    flex-direction: column;
    width: min-content;
    margin: auto;
    font-size: 0.8rem;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.6rem;
  font-size: 1.2rem;
  margin: 1.4rem 0 7px 4px;

`;

export const Input = styled.input`
padding: 1rem  ;
width:30rem;
max-width:35rem;
border: 2px solid #D2D0DD;
border-radius: 5px;
  &:focus {
    background-color: rgb(106, 184, 139);
  }
`;

export const StyledHeader = styled.h1`
  font-size: 3rem;
`;

export const SubmitButton = styled.button<{ isValid: boolean }>`
  border: none;
  line-height: 22px;
  cursor: pointer;
  background-color: ${({ isValid }) => isValid && 'rgb(106, 184, 139)'};
  &:disabled {
    background-color: rgba(106, 184, 139, 0.4);
  }
  padding: 12px 1rem;
  margin-top: 10px;
`;







// login and signup form ccontainer

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 90vh;
`;

