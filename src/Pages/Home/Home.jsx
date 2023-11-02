import React from "react";
import styled from "styled-components";
import GoogleChart from "../../Components/BarChart/Barchart";
import PaymentsIcon from '@mui/icons-material/Payments';
function Home() {
  const Container = styled.div`
    width: 100%;
    height: 80vh;

  `;
  const Wrapper = styled.div`
        width: 100%;
        height: 80vh;
  `;
  const MainBox=styled.div`
     width: 100%;
    height: inherit;
    display: grid;
    grid-template-rows: 50% 50%;
  `
  const FirstContainer = styled.div`
    background-color:var( --color-info-dark);
    width: 100%;
    height:100% ;
  `;
  const SecondContainer = styled.div`
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:var( --color-info-dark);
  `;
  const CardContainer=styled.div`
  width: 100%;
    display :flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  `
  const Card=styled.div`
width: 100%;
padding: 20px;
height: inherit;
display: flex;
justify-content: space-between;
align-items: center;
  `
  const CardContainer1=styled.div`
    background-color: var( --color-background);
    flex:1;
   
    justify-content: center;
    align-items: center;
    border-radius:10% ;
    box-shadow: 5px 5px 5px 5px gray;
  `
  const CardContainer2=styled.div`
  flex: 1;
  background-color: var( --color-background);
  justify-content: center;
    align-items: center;
    margin: 10px;
    border-radius:10% ;
    box-shadow: 5px 5px 5px 5px gray;

  `
  const CardContainer3=styled.div`
    flex: 1;
    background-color: var( --color-background);
    justify-content: center;
    align-items: center;
    border-radius:10% ;
    box-shadow: 5px 5px 5px 5px gray;
  `
  const Icon=styled.div`

 

  `
  const IconDesc=styled.div`
    
  `
  return (
    <Container>
      <Wrapper>
        <MainBox>
        <FirstContainer>
          <CardContainer>
            <Card>
            <CardContainer1>
              <Icon>
                <PaymentsIcon style={{ "fontSize":"4rem",  "color": "var( --color-green)"}}/><br/>
                 $ 3000
                </Icon>
                <IconDesc>Expence</IconDesc> 
            </CardContainer1>
            <CardContainer2>
            <Icon>
            <PaymentsIcon style={{ "fontSize":"4rem"}}/>
                </Icon>
                <IconDesc></IconDesc> 
            </CardContainer2>
            <CardContainer3>
            <Icon>
            <PaymentsIcon style={{ "fontSize":"4rem"}}/>
                </Icon>
                <IconDesc></IconDesc> 
            </CardContainer3>
            </Card>
          </CardContainer>
        </FirstContainer>
        <SecondContainer>
        <GoogleChart/>
        </SecondContainer>
        </MainBox>
      </Wrapper>
    </Container>
  );
}

export default Home;
