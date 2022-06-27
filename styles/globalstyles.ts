import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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
`;

export const Input = styled.input`
  margin-top: 0.2rem;
  min-width: 200px;
  &:focus {
    background-color: rgb(106, 184, 139);
  }
`;

export const SubmitButton = styled.button<{ isValid: boolean }>`
  background-color: ${({ isValid }) => isValid && 'rgb(106, 184, 139)'};
`;
