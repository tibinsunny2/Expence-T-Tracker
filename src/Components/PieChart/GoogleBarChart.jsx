// src/components/GoogleBarChart3D.js
import React from 'react';
import { Chart } from 'react-google-charts';
import styled from 'styled-components';

const StyledChart = styled(Chart)`
width: 700px;
  max-width: 900px;
  height: 38vh;
  margin: 0 auto;
  background-color: var(--color-blue);
  box-shadow: 5px 10px 5px gray;

`;

const GoogleBarChart3D = () => {
  const data = [
    ['Categories', 'Expence items', 'Amount'],
    ['Food', 8175000, 8008000],
    ['Travel', 3792000, 369400],
    ['Friends', 2695000, 2896000],
    ['Smoke', 2099000, 1953000],
    ['petrole', 1526000, 1517000],
  ];

  return (
    <StyledChart 
    chartType="BarChart"
    data={data}
    options={{
      title: 'Daily Expence in Bar Chart',
      chartArea: { width: '50%', heigth:'50%', },
      is3D: true, // Enable 3D view
      backgroundColor: 'lightblue',
    }}
    
    />
  );
};

export default GoogleBarChart3D;
