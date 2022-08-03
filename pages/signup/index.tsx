import {
  FormContainer,
  Input,
  StyledHeader,
  StyledLabel,
  SubmitButton,
} from "../../styles/globalstyles";
import Navbar from "../../components/Navbar";
import { FormEvent } from "react";
import { useInputsAndValidation } from "../../hooks/useInputsAndValidation";
import { register as registerUser } from "../../utils/auth";
import { useRouter } from "next/router";
import styled from "styled-components";

interface RegisterInputs {
  email: string;
  phoneNumber: string;
  confirm: string;
}

// TODO: Implement custom error messages

const Signup = (props: any) => {
  const { handleChange, inputs, isValid, resetForm } = useInputsAndValidation();
  const router = useRouter();
  const registerInputs = inputs as RegisterInputs;
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const { email, phoneNumber /* , confirm */ } = registerInputs;
    registerUser({
      email: email,
      phoneNumber: phoneNumber,
    })
      .then((user) => {
        router.push("/");
        // set state to logged in
        // TODO: add success message
        props.handleRegister(user);
        resetForm();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar handleLogout={props.handleLogout}></Navbar>
      <FormContainer onSubmit={handleSubmit} className="form_type_onboarding">
        <StyledHeader>Create an account</StyledHeader>
        <StyledLabel>Email</StyledLabel>
        <Input
          name="email"
          minLength={2}
          required={true}
          value={registerInputs.email || ""}
          onChange={handleChange}
          type="email"></Input>
        <StyledLabel>Phone Number</StyledLabel>
        <Input
          name="phoneNumber"
          minLength={6}
          required={true}
          value={registerInputs.phoneNumber || ""}
          onChange={handleChange}
          type="tel"></Input>
        {/* <StyledLabel>
          Confirm password
          <Input name='confirm' minLength={6} required={true} value={registerInputs.confirm || ''} onChange={handleChange} type='tel'></Input>
        </StyledLabel> */}
        <StyledBox>
          <StyledCheckbox type="checkbox" required={true}></StyledCheckbox>
          <Terms>I agree to the terms and conditions</Terms>
        </StyledBox>

        <SubmitButton disabled={!isValid} isValid={isValid} type="submit">
          Register
        </SubmitButton>
      </FormContainer>
    </>
  );
};

export default Signup;

const StyledBox = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0 1.2rem 0;
`;

const Terms = styled.label`
  position: relative;
  align-self: center;
  font-size: 1.2rem;
  margin-left: 10px;
`;

const StyledCheckbox = styled.input`
  &:focus {
    accent-color: green;
  }
`;
