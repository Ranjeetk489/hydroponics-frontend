import { Input, StyledLabel } from '../../styles/globalstyles';
import Navbar from '../../components/Navbar';
import { ChangeEvent, FormEvent, useState } from 'react';

const Signup = () => {
  const [inputs, setInputs] = useState({
    password: '',
    email: '',
    confirm: '',
  });

  // todo: custom validation and inputs hook
  const handleInput = (event: ChangeEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <>
      <Navbar></Navbar>
      <form onSubmit={handleSubmit} className="form_type_onboarding">
        <StyledLabel>
          Email
          <Input value={inputs.email} onChange={handleInput} name="email" type="email"></Input>
        </StyledLabel>
        <StyledLabel>
          Passowrd
          <Input value={inputs.password} onChange={handleInput} name="password" type="password"></Input>
        </StyledLabel>
        <StyledLabel>
          Confirm password
          <Input value={inputs.confirm} onChange={handleInput} name="confirm" type="password"></Input>
        </StyledLabel>

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Signup;
