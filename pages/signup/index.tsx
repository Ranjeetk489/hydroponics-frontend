import { Input, StyledLabel, SubmitButton } from '../../styles/globalstyles';
import Navbar from '../../components/Navbar';
import { FormEvent } from 'react';
import { useInputsAndValidation } from '../../hooks/useInputsAndValidation';
import { register as registerUser } from '../../utils/auth';
import { useRouter } from 'next/router';

interface RegisterInputs {
  email: string;
  password: string;
  confirm: string;
}

const Signup = (props: any) => {
  const { handleChange, inputs, isValid, resetForm } = useInputsAndValidation();
  const router = useRouter();
  const registerInputs = inputs as RegisterInputs;
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const { email, password, confirm } = registerInputs;
    if (password === confirm) {
      registerUser({
        email: email,
        password: password,
      })
        .then((user) => {
          router.push('/');
          // set state to logged in
          // todo - add success message
          props.handleRegister(user);
          resetForm();
        })
        .catch((err) => console.log(err));
    } else {
      // todo - add failure message
      console.log("Passwords don't match.");
    }
  };

  return (
    <>
      <Navbar handleLogout={props.handleLogout}></Navbar>
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
