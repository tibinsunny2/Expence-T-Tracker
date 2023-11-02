import React from "react";
import styled from "styled-components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function OtpPage() {
  const Container = styled.div`
    width: 100%;
  `;
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
  `;
  const SubWrapper = styled.div``;
  const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-left: 30%;
    padding: 60px;
    margin-top: 30px;
  `;
  const HeaddingContainer = styled.div`
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: 600;
  `;
  const Headding = styled.div``;
  const SubHeaddingContainer = styled.div`
    margin-bottom: 90px;
    font-size: 15px;
  `;
  const SubHeadding = styled.div``;
  const LinkContainer = styled.div`
  
  `;
  const Link = styled.a`
    text-decoration: underline;
    color: black;
    font-size: 0.7rem;
    cursor: pointer;
  `;
  const OTPBoxesContainer = styled.div`
    display: flex;
  `;
  const Boxes = styled.div`
    display: block;
    block-size: 10px;
    margin-top: 20px;
    margin-bottom: 40px;
  `;
  const Input = styled.input`
    width: 40px;
    height: 40px;
    font-size: 24px;
    text-align: center;
    margin: 0 5px;
    border: none;
    border-radius: 5px;
    background-color: #cec6c6;
  `;
  const RecallButtonContainer = styled.div`
    margin-top: 40px;
    margin-bottom: 30px;
    width: fit-content;
    background-color: #cec6c6;
    padding: 10px;
    border-radius: 20px;
  `;
  const RecallButton = styled.div`
    font-size: 15px;
    cursor: pointer;
  `;
  const MovementButtonContainer = styled.div`
    display: flex;
   
  `;
  const BackButton = styled.div`
    padding: 10px;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    border-radius: 20px;
    background-color: #cec6c6;
    font-size: .7rem;
    display:flex;
    align-items: center;
    cursor: pointer;
  `;
  const NextButtonContainer = styled.div`
    width: fit-content;
    margin-left: 90px;
  `;
  const NextButton = styled.button`
    padding: 10px;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    border-radius: 20px;
    font-size: 15px;
  `;

  return (
    <Container>
      <Wrapper className="container">
        <SubWrapper className="container">
          <MainBox>
            <HeaddingContainer>
              <Headding>Welcome back, User.</Headding>
            </HeaddingContainer>
            <SubHeaddingContainer>
              <SubHeadding>
                Enter the 4-digit code sent to your phone number.
              </SubHeadding>
            </SubHeaddingContainer>
            <LinkContainer>
              <Link>Changed your mobile number?</Link>
            </LinkContainer>
            <OTPBoxesContainer>
              <Boxes>
                <Input type="str" maxLength={1} />
              </Boxes>
              <Boxes>
                <Input maxLength={1} />
              </Boxes>
              <Boxes>
                <Input maxLength={1} />
              </Boxes>
              <Boxes>
                <Input maxLength={1} />
              </Boxes>
            </OTPBoxesContainer>
            <RecallButtonContainer>
              <RecallButton>I didn't receive a code</RecallButton>
            </RecallButtonContainer>
            <MovementButtonContainer>
              <BackButton>Go Back</BackButton>
              <NextButtonContainer>
                <NextButton>
                  Next
                  <ArrowForwardIcon />
                </NextButton>
              </NextButtonContainer>
            </MovementButtonContainer>
          </MainBox>
        </SubWrapper>
      </Wrapper>
    </Container>
  );
}

export default OtpPage;
