// src/components/GooglePieChart.js
import React from "react";
import { Chart } from "react-google-charts";
import styled from "styled-components";

const StyledChart = styled(Chart)`
  width: 100%;
  max-width: 900px;
  height: 34vh;
  margin: 0 auto;
  background-color: var( --color-blue);
  box-shadow: 5px 10px 5px gray;
`;
const Container = styled.div`
  width: 100%;
  height: 30vh;
`;
const GooglePieChart = () => {
  const data = [
    ["Task", "Hours per Day"],
    ["Food", 11],
    ["Travel", 2],
    ["Friends", 2],
    ["Smoke", 2],
    ["petrole", 7],
  ];

  return (
    <Container>
      <StyledChart
        chartType="PieChart"
        data={data}
        options={{
          title: "My Daily Activities and expence",
          is3D: true, // Enable 3D view
          backgroundColor: 'lightblue',
        }}
      />
    </Container>
  );
};

export default GooglePieChart;
