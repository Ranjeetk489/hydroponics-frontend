import { Input, StyledLabel } from '../../styles/globalstyles';
import Navbar from '../../components/Navbar';

const Signup = () => {
  return (
    <>
      <Navbar></Navbar>
      <form className="form_type_onboarding">
        <StyledLabel>
          Email
          <Input name="email" type="email"></Input>
        </StyledLabel>
        <StyledLabel>
          Passowrd
          <Input name="password" type="password"></Input>
        </StyledLabel>
        <StyledLabel>
          Confirm password
          <Input name="confirm" type="password"></Input>
        </StyledLabel>

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Signup;
