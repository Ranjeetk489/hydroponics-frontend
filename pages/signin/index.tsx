import { FormEvent } from 'react';
import Navbar from '../../components/Navbar';
import { useInputsAndValidation } from '../../hooks/useInputsAndValidation';
import { Input, StyledHeader, StyledLabel, SubmitButton, FormContainer } from '../../styles/globalstyles';
import { login as requestLogin } from '../../utils/auth';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Image from 'next/image';

interface LoginInputs {
  email: string;
  phoneNumber: string;
}

// TODO: Implement custom error messages

const Signin = (props: any) => {
  const router = useRouter();
  const { handleChange, inputs, isValid, resetForm } = useInputsAndValidation();
  const loginInputs = inputs as LoginInputs;
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const { email, phoneNumber } = loginInputs;
    requestLogin({ email, phoneNumber })
      .then(() => {
        // set user context logged in
        // set JWT in cookies
        props.handleLogin({ email, phoneNumber });
        resetForm();
        router.push('/');
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Navbar handleLogout={props.handleLogout}></Navbar>
          <FormContainer onSubmit={handleSubmit} className='form_type_onboarding'>
            <StyledHeader>Welcome back</StyledHeader>
            <StyledLabel>
              Email</StyledLabel>
            <Input name='email' value={loginInputs.email || ''} required={true} minLength={2} onChange={handleChange} type='email' placeholder='Enter your email'></Input>
            <StyledLabel>
              Phone number</StyledLabel>
            <Input name='phoneNumber' value={loginInputs.phoneNumber || ''} required={true} minLength={6} onChange={handleChange} placeholder="Enter your Number" type='tel'></Input>
              <ForgotPassword>Forgot Password</ForgotPassword>
            <SubmitButton disabled={!isValid} isValid={isValid} type='submit'>
              Log in
            </SubmitButton>
          </FormContainer>
    </>
  );
};

export default Signin;




const ForgotPassword = styled.span`
  cursor: pointer;
  font-size: 1.2rem;
  margin:6px 0 1rem 4px;
  font-weight: 700;
  color: blue;
`




