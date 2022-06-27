import { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import { useInputsAndValidation } from '../../hooks/useInputsAndValidation';
import { Input, StyledLabel, SubmitButton } from '../../styles/globalstyles';

const Signin = () => {
  const { handleChange, errors, inputs, isValid, resetForm, setErrors, setInputs, setIsValid } = useInputsAndValidation();

  // useEffect(() => {
  //   console.log(`form is valid? ${isValid}`);
  // }, [isValid, inputs]);
  return (
    <>
      <Navbar></Navbar>
      <form className="form_type_onboarding">
        <StyledLabel>
          Email
          <Input name="email" required={true} minLength={2} onChange={handleChange} type="email"></Input>
        </StyledLabel>
        <StyledLabel>
          Passowrd
          <Input name="password" required={true} minLength={6} onChange={handleChange} type="password"></Input>
        </StyledLabel>
        <SubmitButton disabled={!isValid} isValid={isValid} type="submit">
          Log in
        </SubmitButton>
      </form>
    </>
  );
};

export default Signin;
