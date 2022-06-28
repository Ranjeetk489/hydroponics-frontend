import { Input, StyledLabel, SubmitButton } from '../../styles/globalstyles';
import Navbar from '../../components/Navbar';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useInputsAndValidation } from '../../hooks/useInputsAndValidation';
import { register as registerUser } from '../../utils/auth';

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
    const { email, password, confirm } = registerInputs;
    if (password === confirm) {
      registerUser({
        email: email,
        password: password,
      })
        .then((res) => {
          // todo - navigate to Login / Homepage
          // todo - add success message
          resetForm();
          console.log(res);
        })
        .catch((err) => console.log(err));
    } else {
      // todo - add failure message
      console.log("Passwords don't match.");
    }
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
