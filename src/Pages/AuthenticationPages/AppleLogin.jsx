import React from "react";
import styled from "styled-components";
import AppleNavebar from "../../components/Home/AppleNavebar";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link } from "react-router-dom";

function AppleLogin() {
  const Container = styled.div`
    width: 100%;
  `;
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const Navebar = styled.div``;
  const SecondNavContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  const AppleId = styled.button`
    border: none;
    outline: none;
    background-color: white;
    font-size: 30px;
    font-weight: 600;
    padding: 0px;
    margin: 0px;
  `;
  const Signin = styled.button`
    border: none;
    outline: none;
    background-color: white;
    font-size: 20px;
    font-weight: 100;
    cursor: pointer;
  `;
  const Hr = styled.hr`
    margin-top: 2px;
    width: 80%;
    border: 1px solid gray;
  `;
  const SecondContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const IconContainer = styled.div``;
  const Icon = styled.img`
    width: 100px;
    height: 90px;
    border-radius: 20px;
  `;
  const IconDesc = styled.div`
    margin-top: 20px;
    font-size: 25px;
    margin-bottom: 20px;
  `;
  const CredentialBox = styled.div`
    width: 700px;
    border: 3px solid gray;
    border-radius: 15px;
    padding: 30px;
    margin-bottom: 20px;
    margin-left: 200px;
  `;
  const Label = styled.div`
    margin-bottom: 10px;
    font-weight: 500;
  `;
  const InputContainer = styled.div`
    padding: 10px;
  `;
  const EmailPassword = styled.input`
    width: 100%;
    border-radius: 10px;
    border: 2px solid gray;
    padding: 20px;
    margin-bottom: 20px;
  `;
  const Password = styled.input`
    width: 100%;
    border-radius: 10px;
    border: 2px solid gray;
    padding: 20px;
  `;
  const ThirdContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const CurrectionLink = styled.div`
    font-size: 25px;
    font-weight: 500;
    cursor: pointer;
  `;
  const Icon2 = styled.div`
    color: #106ffd;
    width: fit-content;
    margin-top: 30px;
    margin-bottom: 20px;
  `;
  const Desc = styled.div`
    font-size: 1rem;
    max-width: 400px;
    text-align: center;
  `;
  return (
    <Container>
      <Navebar>
        <AppleNavebar />
      </Navebar>
      <Wrapper className="container">
        <SecondNavContainer>
          <AppleId>Apple ID</AppleId>
          <Signin>Sign In</Signin>
        </SecondNavContainer>
        <Hr />
        <SecondContainer>
          <IconContainer>
            <Icon src="https://helios-i.mashable.com/imagery/articles/03y6VwlrZqnsuvnwR8CtGAL/hero-image.fill.size_1200x675.v1623372852.jpg" />
          </IconContainer>
          <IconDesc>Use your Apple ID to sign in to Uber .</IconDesc>
        </SecondContainer>
        <CredentialBox>
          <InputContainer>
            <Label>Enter Email/phone number</Label>
            <EmailPassword placeholder="Enter Email/phone number"></EmailPassword>
            <Password placeholder="Enter password" />
          </InputContainer>
        </CredentialBox>
        <ThirdContainer>
          <CurrectionLink>
            <Link>
              Forgot password?
              <ArrowOutwardIcon />
            </Link>
          </CurrectionLink>
          <Icon2>
            <ConnectWithoutContactIcon style={{ fontSize: "60px" }} />
          </Icon2>
          <Desc>
            In setting up Sign in with Apple ,information about your
            interactions with Apple and this device maybe used by Apple to help
            you from fraud.
            <Link
              style={{
                fontSize: "1.1rem",
                fontWeight: "400",
                cursor: "pointer",
              }}
            >
              See how your data is managed......
            </Link>
          </Desc>
        </ThirdContainer>
      </Wrapper>
    </Container>
  );
}

export default AppleLogin;
