import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
function LoginPage() {
  const Container = styled.div`
    width: 100%;
  `;
  const Wrapper = styled.div``;
  const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 210px;
    padding-right: 210px;
    padding-top: 20px;
    padding-bottom: 20px;
  `;
  const HeadderContainer = styled.div``;
  const Headder = styled.h2``;
  const InputContainer = styled.div`
    width: 100%;
    height: fit-content;
    padding: 10px;
    border-radius: 7px;
    background-color: white;
    border: 1px solid black;
    color: white;
  `;
  const Input = styled.input`
    width: 100%;
    border: none!important;
    background: transparent!important;
    color: #917c7c;
    padding: 5px;
    outline: none;
  `;
  const ButtonContainer = styled.div`
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 20px;
    margin-top: 10px;
  `;
  const Button = styled.button`
    outline: none!important;;
    border: none!important;;
    background-color: black;
    color: white;
    text-align: center;
  `;
  const HrContainer = styled.div`
    display: flex;
  `;
  const Hr = styled.hr`
    width: 42%;
    border: 1px solid black;
  `;
  const SocialContainer = styled.div``;
  const Parts = styled.div`
    width: 100%;
    background-color: #a49d9d;
    display: flex;
    justify-content: center;
    padding: 20px;
    margin: 10px;
    border-radius: 10px;
    align-items: center;
  `;
  const PartIcon = styled.img`
    width: 40px;
    margin-right: 10px;
  `;
  const PartDesc = styled.div`
    font-weight: 500;
  `;
  const QrContainer = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    padding: 20px;
    margin: 10px;
    border-radius: 10px;
    align-items: center;
  `;
  const QrIcon = styled.img`
    width: 40px;
    margin-right: 10px;
  `;
  const QrDesc = styled.div`
    font-weight: 500;
  `;
  const FooterContainer = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    margin: 10px;
    border-radius: 10px;
    align-items: center;
  `;
  const FooterDesc = styled.div`
  font-size: small;
  `;
  const FooterDownDesc = styled.div`
  margin-top: 20px;
  font-size: small;
  `;
  const FooterDownDescLink = styled.a``;

  return (
    <Container>
      <Wrapper className="container">
        <DivContainer>
          <HeadderContainer>
            <Headder>What's your phone number or email?</Headder>
          </HeadderContainer>
          <InputContainer>
            <Input placeholder="  Enter phone number or email"></Input>
          </InputContainer>
          <ButtonContainer>
            <Button>Continue</Button>
          </ButtonContainer>
          <HrContainer>
            <Hr />
            or
            <Hr />
          </HrContainer>
          <SocialContainer>
            <Parts>
              
              <PartIcon src="Gicon.png" />
              <PartDesc>Continue with Google</PartDesc>
            </Parts>
            <Parts>
            <Link to={"/applelogin"} style={{display:"flex",justifyContent:"center",alignItems:"center",color:"black"}}>
              <PartIcon src="appleIcon.png" />
              <PartDesc>Continue with Apple</PartDesc>
              </Link>
            </Parts>
            <Parts>
              <a style={{display:"flex",justifyContent:"center",alignItems:"center",color:"black"}} href="https://www.facebook.com/login.php?skip_api_login=1&api_key=277064115737714&kid_directed_site=0&app_id=277064115737714&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D277064115737714%26redirect_uri%3Dhttps%253A%252F%252Fauth.uber.com%252Fv2%252Ffacebookloginsuccess%26scope%3Dpublic_profile%252Cemail%26response_type%3Dcode%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D8a6391df-ec54-434f-8c96-7288b94a6d8e%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fauth.uber.com%2Fv2%2Ffacebookloginsuccess%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%23_%3D_&display=page&locale=en_GB&pl_dbl=0">
              <PartIcon src="facebookIcon.png" />
              <PartDesc>Continue with Facebook</PartDesc>
              </a>
            </Parts>
          </SocialContainer>
          <HrContainer>
            <Hr />
            or
            <Hr />
          </HrContainer>
          <QrContainer>
            <QrIcon src="Qrlogo.png" />
            <QrDesc>Log in with QR code</QrDesc>
          </QrContainer>
          <FooterContainer>
            <FooterDesc>
              By proceeding, you consent to get calls, WhatsApp or SMS messages,
              including by automated means, from Uber and its affiliates to the
              number provided.
            </FooterDesc>
            <FooterDownDesc>
              This site is protected by reCAPTCHA and the Google <FooterDownDescLink>Privacy Policy</FooterDownDescLink>
              and<FooterDownDescLink>Terms of Service apply.</FooterDownDescLink> 
            </FooterDownDesc>
          </FooterContainer>
        </DivContainer>
      </Wrapper>
    </Container>
  );
}

export default LoginPage;
