import React from "react";
import styled from "styled-components";
import Expencelogo from "../Images/Navbar/expencelogo4.png";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import SupportIcon from "@mui/icons-material/Support";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import ShareIcon from "@mui/icons-material/Share";
import LanguageIcon from "@mui/icons-material/Language";

function NavBar() {
  const Container = styled.div`
    width: 100%;
    height: 12vh;
    display: flex;
    align-items: center;
    background-color: black;
    color: white;
    box-shadow: 5px 6px 7px gray;
  `;
  const Wrapper = styled.div`
    width: 95%;
    height: relative;
    background-image: black;
    display: grid;
    grid-template-columns: 50% 50%;
  `;
  const FirstContainer = styled.div`
    display: flex;
    margin-left: 20px;
    align-items: center;
  `;
  const SecondContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
  `;
  const IconContainer = styled.div`
    width: fit-content;
    padding: 2px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const Icon = styled.img`
    width: auto;
    height: 8vh;
  `;
  const IconDesc = styled.h3`
    margin: 5px;
    font-size: 1.4rem;
  `;
  const HelpIcon = styled.div``;
  const HelpDesc = styled.div`
    margin-left: 15px;
  `;
  const FirstMenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10%;
  `;
  const Item = styled.div`
    display: flex;
    margin: 10px;
    align-items: center;
    cursor: pointer;
  `;
  const SecondMenuContainer = styled.div`
    display: flex;
  `;
  return (
    <Container>
      <Wrapper>
        <FirstContainer>
          <IconContainer>
            <Icon src={Expencelogo} />
          </IconContainer>
          <IconDesc>Money Tracker</IconDesc>
          <FirstMenuContainer>
            <Item>
              <HelpIcon>
                <SupportIcon />
              </HelpIcon>
              <HelpDesc>Help?</HelpDesc>
            </Item>
            <Item>
              <HelpIcon>
                <DocumentScannerIcon />
              </HelpIcon>
              <HelpDesc>About us</HelpDesc>
            </Item>
            <Item>
              <HelpIcon></HelpIcon>
              <HelpDesc></HelpDesc>
            </Item>
          </FirstMenuContainer>
        </FirstContainer>
        <SecondContainer>
          <SecondMenuContainer>
            <Item>
              <HelpIcon>
                <LanguageIcon />
              </HelpIcon>
              <HelpDesc>EN</HelpDesc>
            </Item>
            <Item>
              <HelpIcon>
                <LocalPrintshopIcon />
              </HelpIcon>
            </Item>
            <Item>
              <HelpIcon>
                <ShareIcon />
              </HelpIcon>
              <HelpDesc></HelpDesc>
            </Item>
          </SecondMenuContainer>
        </SecondContainer>
      </Wrapper>
    </Container>
  );
}

export default NavBar;
