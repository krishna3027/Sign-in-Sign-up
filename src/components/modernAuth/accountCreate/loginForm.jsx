import React, { useContext} from "react";
// import { useEffect } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
// import Log from "../forExport/log";
// import SuccessSignUp from "../../userValidation/successSignUp";
// let k = console.log("hello there")
// console.log('where are you')
export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  
  // const {handleFormSubmit} = useContext(AccountContext);
  // const handleFormSubmit=()=>{
  //   return(
  // <SuccessSignUp />
  // )
  // }

  

  // useEffect(()=>{
  //   if(letsok){
  //     <SuccessSignUp />
  //   }
  // }


  return (
    <BoxContainer >
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}