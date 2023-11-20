import React from "react";
import './Table.css'
import styled from "styled-components";
function Table() {
  const Container=styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  `
  const Wrapper=styled.div`
  width: 90%;
    padding: 2%;
    box-shadow: 5px 5px 5px lightgray;
  `

  return (
    <Container>
      <Wrapper>
  <h1>Daily Expence</h1>
      <h2>
        Total:<i class="fa-solid fa-dollar-sign icon"></i>
      </h2>
      <table class="table">
        <thead>
          <th>si no</th>
          <th>Categories</th>
          <th>Date Of Payment</th>
          <th>Method of Payment</th>
          <th> Paid to</th>
          <th>Description</th>
          <th>Amount paid</th>
          <th>Running Total</th>
          <th>Balance</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Food</td>
            <td>21/2/23</td>
            <td>upi</td>
            <td>ashik</td>
            <td>jnja</td>
            <td>2000</td>
            <td>1000000</td>
            <td>1111</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Food</td>
            <td>21/2/23</td>
            <td>upi</td>
            <td>ashik</td>
            <td>jnja</td>
            <td>2000</td>
            <td>1000000</td>
            <td>1111</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Food</td>
            <td>21/2/23</td>
            <td>upi</td>
            <td>ashik</td>
            <td>jnja</td>
            <td>2000</td>
            <td>1000000</td>
            <td>1111</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Food</td>
            <td>21/2/23</td>
            <td>upi</td>
            <td>ashik</td>
            <td>jnja</td>
            <td>2000</td>
            <td>1000000</td>
            <td>1111</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Food</td>
            <td>21/2/23</td>
            <td>upi</td>
            <td>ashik</td>
            <td>jnja</td>
            <td>2000</td>
            <td>1000000</td>
            <td>1111</td>
          </tr>
          <tr>
         
            <td>1</td>
            <td>Food</td>
            <td>21/2/23</td>
            <td>upi</td>
            <td>ashik</td>
            <td>jnja</td>
            <td>2000</td>
            <td>1000000</td>
            <td>1111</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Food</td>
            <td>21/2/23</td>
            <td>upi</td>
            <td>ashik</td>
            <td>jnja</td>
            <td>2000</td>
            <td>1000000</td>
            <td>1111</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Food</td>
            <td>21/2/23</td>
            <td>upi</td>
            <td>ashik</td>
            <td>jnja</td>
            <td>2000</td>
            <td>1000000</td>
            <td>1111</td>
          </tr>
        </tbody>
      </table>
      </Wrapper>
    
    </Container>
  );
}
export default Table;