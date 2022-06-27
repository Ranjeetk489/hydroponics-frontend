import { Input, StyledLabel, SubmitButton } from '../../styles/globalstyles';
import Navbar from '../../components/Navbar';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useInputsAndValidation } from '../../hooks/useInputsAndValidation';

interface RegisterInputs {
  email: string;
  password: string;
  confirm: string;
}

const Signup = () => {
  const { handleChange, errors, inputs, isValid, resetForm, setErrors, setInputs, setIsValid } = useInputsAndValidation();
  const registerInputs = inputs as RegisterInputs;
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <>
      <Navbar></Navbar>
      <form onSubmit={handleSubmit} className="form_type_onboarding">
        <StyledLabel>
          Email
          <Input name="email" minLength={2} required={true} value={registerInputs.email || ''} onChange={handleChange} type="email"></Input>
        </StyledLabel>
        <StyledLabel>
          Passowrd
          <Input name="password" minLength={6} required={true} value={registerInputs.password || ''} onChange={handleChange} type="password"></Input>
        </StyledLabel>
        <StyledLabel>
          Confirm password
          <Input name="confirm" minLength={6} required={true} value={registerInputs.confirm || ''} onChange={handleChange} type="password"></Input>
        </StyledLabel>

        <SubmitButton disabled={!isValid} isValid={isValid} type="submit">
          Register
        </SubmitButton>
      </form>
    </>
  );
};

export default Signup;
