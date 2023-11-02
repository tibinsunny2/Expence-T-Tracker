// import React from "react";
// import styled from "styled-components";
// import NavBar from "../../Components/NavBar/NavBar";
// import Sidebar from "../../Components/sidebar/Sidebar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Outlet } from "react-router-dom";
// import Routing from "../../Components/Router/Routing";
// function MainPage() {
//   const Container = styled.div`
//     width: 100%;
//   `;
//   const ContainerSub = styled.div`
//     width: 100%;
//   `;
//   const Wrapper = styled.div`
//     width: 100%;
//     height: 90vh;
//     display: grid;
//     grid-template-columns: 1fr 11fr;
//     padding: 20px;
//   `;
//   const MainBoxContainer = styled.div`
//     width: 100%;
//     height: 86vh;
//     background-color: var(--color-info-light);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   `;
//   const MainBox = styled.div`
//     width: 70vw;
//     height: 80vh;
//     border-radius: 2%;
//     box-shadow: 5px 5px 5px 8px gray;
//     background-color: white;
//   `;
//   const SidebarConatiner = styled.aside`
//     width: 20vw;
//     height: 90vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   `;
//   const Sidebars = styled.div`
//     width: 80%;
//     height: 80vh;
//     background-color: var(--color-info-dark);
//     padding-top: 10%;
//     box-shadow: 5px 5px 5px gray;
//   `;
//   return (
//     <Container className="container">
//       <ContainerSub>
//         <NavBar />
//         <Wrapper>
//           <SidebarConatiner>
//             <Sidebars>
//               <Sidebar />
//             </Sidebars>
//           </SidebarConatiner>
//           <MainBoxContainer>
//             <Router>
//               <MainBox>
//                 <Routing />
//               </MainBox>
//             </Router>
//           </MainBoxContainer>
//         </Wrapper>
//       </ContainerSub>
//     </Container>
//   );
// }

// export default MainPage;
