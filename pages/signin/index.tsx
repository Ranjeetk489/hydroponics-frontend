import Navbar from '../../components/Navbar';
import { Input, StyledLabel } from '../../styles/globalstyles';

const Signin = () => {
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
        <button type="submit">Log in</button>
      </form>
    </>
  );
};

export default Signin;
