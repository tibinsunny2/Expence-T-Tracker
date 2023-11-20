import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddCardIcon from "@mui/icons-material/AddCard";
import HistoryIcon from "@mui/icons-material/History";
import EditNoteIcon from "@mui/icons-material/EditNote";
import SummarizeIcon from "@mui/icons-material/Summarize";
import LogoutIcon from "@mui/icons-material/Logout";
import Dp from "../Images/Navbar/dp.jpg";
import Lock from '../Images/Navbar/lock.png'
import './Sidebar.css'
function Sidebar() {
  const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: lightblue;
  `;
  const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
background-color: lightblue;
  `;
  const Parent=styled.div`
     height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
background-color: lightblue;
  `
  const UserContainer = styled.div`
   background-color: lightblue;`;
  const UserDp = styled.img`
    width: 100px;
    border-radius: 50%;
    height: fit-content;
   
  
  `;
  const DpContainer = styled.div`
   background-color: lightblue;`;
  const UserName = styled.div`
   background-color: lightblue;`;
  const FirstContainer = styled.ul`
    padding: 60px;
  `;
  const SecondContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    
   
  `;
  const ItemContainer = styled.li`
    display: flex;
    margin: 5px;
  `;
  const ItemIcon = styled.div`
    margin-right: 8px;
  `;
  const location = useLocation();
const AccessToken=localStorage.getItem('accessToken')
  const LocClear=()=>{
    localStorage.clear()
    window.location.reload();
  }
  return (
    <Container>
      <Wrapper>
      {
        !AccessToken?<UserDp src={Lock}/>:<Parent>
            <UserContainer>
          <DpContainer>
            <UserDp src={Dp}/>
          </DpContainer>
          <UserName>Username</UserName>
        </UserContainer>
        <FirstContainer>
          <ItemContainer>
            <ItemIcon>
              <HomeIcon />
            </ItemIcon>
            <Link
            style={{"textDecoration":"none"}}
              to="/home"
              className={location.pathname === "/home" ? "active" : ""}
            >
              Home
            </Link>
          </ItemContainer>
          <ItemContainer>
            <ItemIcon>
              <DashboardIcon />
            </ItemIcon>
            <Link
            style={{"textDecoration":"none"}}
              to="/dashbord"
              className={location.pathname === "/dashbord" ? "active" : ""}
            >
              Dashboard
            </Link>
          </ItemContainer>
          <ItemContainer>
            <ItemIcon>
              <AddCardIcon />
            </ItemIcon>
            <Link
            style={{"textDecoration":"none"}}
              to="/add"
              className={location.pathname === "/add" ? "active" : ""}
            >
              Add Expence
            </Link>
          </ItemContainer>
          <ItemContainer>
            <ItemIcon>
              <HistoryIcon />
            </ItemIcon>
            <Link
            style={{"textDecoration":"none"}}
              to="/history"
              className={location.pathname === "/history" ? "active" : ""}
            >
              History
            </Link>
          </ItemContainer>
          <ItemContainer>
            <ItemIcon>
              <EditNoteIcon />
            </ItemIcon>
            <Link
            style={{"textDecoration":"none"}}
              to="/edit"
              className={location.pathname === "/edit" ? "active" : ""}
            >
              Edit
            </Link>
          </ItemContainer>
          <ItemContainer>
            <ItemIcon>
              <SummarizeIcon />
            </ItemIcon>
            <Link
            style={{"textDecoration":"none"}}
              to="/report"
              className={location.pathname === "/report" ? "active" : ""}
            >
              Report
            </Link>
          </ItemContainer>
        </FirstContainer>
        <SecondContainer>
          <ItemContainer>
            <ItemIcon>
              <LogoutIcon />
            </ItemIcon>
            <Link style={{"textDecoration":"none"}} onClick={LocClear}>Logout</Link>
          </ItemContainer>
        </SecondContainer>
        </Parent>
      }
      </Wrapper>
    </Container>
  );
}

export default Sidebar;
