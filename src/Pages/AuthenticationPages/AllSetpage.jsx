import React from "react";
import styled from "styled-components";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
function AllSetPage() {
  const Container = styled.div`
    width: 100%;
    
  `;
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
  `;
  const SubWrapper = styled.div`
  display: flex;
  margin-left: 30%;
  margin-top: 10%;

  `;
  const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 30px;
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
  const IconContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
    background-color: green;
    border-radius: 60%;
   
  `
  const SubIconContainer=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
 
  `

  return (
    <Container>
      <Wrapper className="container">
        <SubWrapper className="container">
            <IconContainer>
                <SubIconContainer>
                    <CheckCircleIcon style={{ fontSize: "100px",color:"white"
                }}/>
                </SubIconContainer>
            </IconContainer>
          <MainBox>
            <HeaddingContainer>
              <Headding>All Set</Headding>
            </HeaddingContainer>
            <SubHeaddingContainer>
              <SubHeadding>
                Hi there you are one of our greate customer Welcome....
              </SubHeadding>
            </SubHeaddingContainer>
          </MainBox>
        </SubWrapper>
      </Wrapper>
    </Container>
  );
}

export default AllSetPage;
