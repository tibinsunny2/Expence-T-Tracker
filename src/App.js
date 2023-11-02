import React from "react";
import styled from "styled-components";
import NavBar from "../src/Components/NavBar/NavBar";
import Sidebar from "../src/Components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import LandingPage from "../src/Pages/LandingPage/LandingPage";
import Dashboard from "../src/Pages/Dashboard/Dashboard";
import Add from "../src/Pages/Add/Add";
import History from "../src/Pages/History/History";
import Edit from "../src/Pages/Edit/Edit";
import Reports from "../src/Pages/Report/Reports";
import Home from "../src/Pages/Home/Home";
import './App.css'
import GmailLogin from "./Pages/AuthenticationPages/GmailLogin";
import GmailSignUp from "./Pages/AuthenticationPages/GmailSignUp";
function App() {
  const Container = styled.div`
    width: 100%;
    overflow-x: hidden;
   
  `;
  const ContainerSub = styled.div`
    width: 100%;
    border: 1px solid lightgray;
  `;
  const Wrapper = styled.div`
    width: 100%;
    height: 90vh;
    display: grid;
    grid-template-columns: 1fr 11fr;
 ;
  `;
  const MainBoxContainer = styled.div`
    width: 100%;
    height: 86vh;
    background-color: var(--color-info-light);
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const MainBox = styled.div`
    width: 70vw;
    height: 80vh;
    border-radius: 2%;
    box-shadow: 5px 5px 5px 8px gray;
    background-color: white;
  `;
  const SidebarConatiner = styled.aside`
    width: 20vw;
    height: 86vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Sidebars = styled.div`
    width: 80%;
    height: 80vh;
    background-color: var(--color-info-dark);
    padding-top: 10%;
    box-shadow: 5px 5px 5px gray;
  `;
  return (
    <Router>
      <Container className="App">
        <ContainerSub className="container">
          <NavBar style={{"position":"fixed"}} />
          <Wrapper>
            <SidebarConatiner>
              <Sidebars>
                <Sidebar />
              </Sidebars>
            </SidebarConatiner>
            <MainBoxContainer>
              <MainBox>
                <Outlet />
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/dashbord" element={<Dashboard />} />
                  <Route path="/add" element={<Add />} />
                  <Route path="/history" element={<History />} />
                  <Route path="/edit" element={<Edit />} />
                  <Route path="/report" element={<Reports />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/login" element={<GmailLogin/>}/>
                  <Route path="/signup" element={<GmailSignUp/>}/>
                </Routes>
              </MainBox>
            </MainBoxContainer>
          </Wrapper>
        </ContainerSub>
      </Container>
    </Router>
  );
}

export default App;
