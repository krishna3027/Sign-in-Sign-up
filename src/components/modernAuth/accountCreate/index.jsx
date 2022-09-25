import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";

const BoxContainer = styled.div`
  margin-top:20px;
  width:300px ;
  max-width:100%;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  // box-shadow: 0 0 2px rgba(15, 15, 15, 0.38);
  box-shadow: 10px 50px 70px rgba(0,0,0,0.45),
    /* inset 5px 5px 10px rgba(0,0,0,0.5), */
    /* left shadow commented */
    
    inset 5px 5px 20px rgba(255,255,255,0.2);

    /* inset -5px -5px 15px rgba(0,0,0,0.75); */
    /* right shadow commented */
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; 
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  // background: rgb(241, 196, 15);
  // background: linear-gradient(
  //   58deg,
  //   rgba(241, 196, 15, 1) 20%,
  //   rgba(243, 172, 18, 1) 100%
  // );
  // background-image changed with green
  background-image: linear-gradient(
    305deg,
    hsl(128deg 88% 46%) 0%,
    hsl(122deg 89% 48%) 6%,
    hsl(115deg 89% 50%) 14%,
    hsl(108deg 89% 53%) 23%,
    hsl(102deg 90% 55%) 33%,
    hsl(95deg 91% 57%) 44%,
    hsl(89deg 91% 59%) 55%,
    hsl(82deg 92% 62%) 65%,
    hsl(75deg 92% 64%) 76%,
    hsl(68deg 92% 66%) 85%,
    hsl(62deg 93% 68%) 93%,
    hsl(55deg 93% 70%) 100%
  );

`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  margin-right: 70%;
  margin-bottom: 30%;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 80%;
  // width is manupulated to 70% from 100%
  display: flex;
  flex-direction: column;
  padding:0 0 0 4%;
`;

const backdropVariants = {
  expanded: {
    width: "250%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignin };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === "signin" && (
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>Back</HeaderText>
              <SmallText>Please sign-in to continue!</SmallText>
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <HeaderText>Create</HeaderText>
              <HeaderText>Account</HeaderText>
              <SmallText>Please sign-up to continue!</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "signin" && <LoginForm />}
          {active === "signup" && <SignupForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}