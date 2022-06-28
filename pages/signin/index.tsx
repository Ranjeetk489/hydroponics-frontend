import { FormEvent } from 'react';
import Navbar from '../../components/Navbar';
import { useInputsAndValidation } from '../../hooks/useInputsAndValidation';
import { Input, StyledLabel, SubmitButton } from '../../styles/globalstyles';
import { login as requestLogin } from '../../utils/auth';
import { useRouter } from 'next/router';

interface LoginInputs {
  email: string;
  password: string;
}

const Signin = (props: any) => {
  const router = useRouter();
  const { handleChange, inputs, isValid, resetForm } = useInputsAndValidation();
  const loginInputs = inputs as LoginInputs;
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const { email, password } = loginInputs;
    requestLogin({ email, password })
      .then(() => {
        // set user context logged in
        // set JWT in cookies
        props.handleLogin({ email });
        resetForm();
        router.push('/');
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Navbar handleLogout={props.handleLogout}></Navbar>
      <form onSubmit={handleSubmit} className="form_type_onboarding">
        <StyledLabel>
          Email
          <Input name="email" value={loginInputs.email || ''} required={true} minLength={2} onChange={handleChange} type="email"></Input>
        </StyledLabel>
        <StyledLabel>
          Passowrd
          <Input name="password" value={loginInputs.password || ''} required={true} minLength={6} onChange={handleChange} type="password"></Input>
        </StyledLabel>
        <SubmitButton disabled={!isValid} isValid={isValid} type="submit">
          Log in
        </SubmitButton>
      </form>
    </>
  );
};

export default Signin;
