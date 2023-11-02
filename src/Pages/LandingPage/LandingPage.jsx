import React from "react";
import styled from "styled-components";
import GmailLogin from "../AuthenticationPages/GmailLogin";
function LandingPage() {
  const Container = styled.div`
    width: 100%;
  `;
  const Wrapper = styled.div`
    width: 100%;
   
  `;
  const Page = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
  `;
  const TermsContainer=styled.div`
  color: black;
  `
  const Terms=styled.div`
    
  `
  return (
    <Container>
      <Wrapper>
        <Page>
          <GmailLogin />
          {/* <TermsContainer>
            <Terms>
              We’re constantly developing new technologies and features to
              improve our services. For example, we use artificial intelligence
              and machine learning to provide you with simultaneous
              translations, and to better detect and block spam and malware. As
              part of this continual improvement, we sometimes add or remove
              features and functionalities, increase or decrease limits to our
              services, and start offering new services or stop offering old
              ones. When a service requires or includes downloadable software,
              that software sometimes updates automatically on your device once
              a new version or feature is available. Some services let you
              adjust your automatic update settings.
            </Terms>
          </TermsContainer> */}
        </Page>
      </Wrapper>
    </Container>
  );
}

export default LandingPage;
