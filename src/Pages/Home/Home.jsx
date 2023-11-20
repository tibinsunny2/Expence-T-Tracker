import React, { useEffect } from "react";
import styled from "styled-components";
import GoogleChart from "../../Components/BarChart/Barchart";
import PaymentsIcon from "@mui/icons-material/Payments";
import trackerReducer from "../../Store/tackerReducer";
function Home() {
  const Container = styled.div`
    width: 100%;
    height: 80vh;
  `;
  const Wrapper = styled.div`
    width: 100%;
    height: 80vh;
  `;
  const MainBox = styled.div`
    width: 100%;
    height: inherit;
    display: grid;
    grid-template-rows: 50% 50%;
    border-radius: 20px;
    text-align: center;
  `;
  const FirstContainer = styled.div`
    background-color: lightblue;
    width: 100%;
    height: 100%;
  `;
  const SecondContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
    padding-bottom: 10%;
  `;
  const CardContainer = styled.div`
    width: 100%;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  `;
  const Card = styled.div`
    width: 100%;
    padding: 20px;
    height: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 100px;
  `;
  const CardContainer1 = styled.div`
    background-image: linear-gradient(to right, #dabed0, white 80%);
    flex: 1;

    justify-content: center;
    align-items: center;
    border-radius: 10%;
    box-shadow: 5px 5px 5px 5px gray;
    text-align: center;
  `;
  const CardContainer2 = styled.div`
    background-image: linear-gradient(to right, #dabed0, white 80%);
    text-align: center;
    flex: 1;
    background-color: var(--color-background);
    justify-content: center;
    align-items: center;
    margin: 10px;
    border-radius: 10%;
    box-shadow: 5px 5px 5px 5px gray;
    text-align: center;
  `;
  const CardContainer3 = styled.div`
    background-image: linear-gradient(to right, #dabed0, white 80%);
    text-align: center;
    flex: 1;
    background-color: var(--color-background);
    justify-content: center;
    align-items: center;
    border-radius: 10%;
    box-shadow: 5px 5px 5px 5px gray;
  `;
  const Icon = styled.div``;
  const IconDesc = styled.div``;
  const LapContainer = styled.div`
    background-color: white;
    width: 50%;
    height: fit-content;
    border-radius: 20px;
    margin-top: 40px;
  `;
  const LapScreen = styled.div`
    margin: 5%;
    top: 10px;
  `;
  const LapBase1 = styled.div`
    width: 55%;
    height: 20px;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    background-color: white;
    justify-content: center;
    align-items: center;
    color: white;
  `;
  const LapBase2 = styled.div`
    width: 55%;
    height: 20px;
    padding: 30px;
    border-radius: 8px;
    display: flex;
    background-color: white;
    justify-content: center;
    align-items: center;
  `;
  return (
    <Container>
      <Wrapper>
        <MainBox>
          <FirstContainer>
            <h2 style={{ margin: "0px", fontSize: "40px" }}>
              Welcome User....
            </h2>
            <CardContainer>
              <Card>
                <CardContainer1>
                  <Icon>
                    <PaymentsIcon
                      style={{ fontSize: "4rem", color: "var( --color-green)" }}
                    />
                    <br />$ 30000
                  </Icon>
                  <IconDesc>Salary</IconDesc>
                </CardContainer1>
                <CardContainer2>
                  <Icon>
                    <PaymentsIcon
                      style={{ fontSize: "4rem", color: "var( --color-green)" }}
                    />
                  </Icon>
                  <IconDesc>
                    {" "}
                    $4000
                    <br />
                    Expence
                  </IconDesc>
                </CardContainer2>
                <CardContainer3>
                  <Icon>
                    <PaymentsIcon
                      style={{ fontSize: "4rem", color: "var( --color-green)" }}
                    />
                  </Icon>
                  <IconDesc>
                    $24000
                    <br />
                    Balance
                  </IconDesc>
                </CardContainer3>
              </Card>
            </CardContainer>
          </FirstContainer>
          <SecondContainer>
            <LapContainer>
              <LapScreen>
                <GoogleChart />
              </LapScreen>
            </LapContainer>
            <LapBase1></LapBase1>
            <LapBase2>
              “Do not save what is left after spending, but spend what is left
              after saving”. – Warren Buffett
            </LapBase2>
          </SecondContainer>
        </MainBox>
      </Wrapper>
    </Container>
  );
}

export default Home;
