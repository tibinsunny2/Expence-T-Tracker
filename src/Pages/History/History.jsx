import React from 'react'
import styled from 'styled-components'
import EditNoteIcon from '@mui/icons-material/EditNote';
function History() {
  const Container=styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
    height: 100%;
  `
  const Wrapper=styled.div`

  `
  const ButtonContainer=styled.div`
    width: 100%;
    text-align: end;

  `
const EditButton=styled.button`
padding: 20px;
color: white;
border-radius: 20px;
background-color: var(--color-blue);
cursor: pointer;
margin-top: 20px;
`
  return (
    <Container>
      <Wrapper>
      <h1>Expence History</h1>
      <ButtonContainer>
  <EditButton>
      Edit Documents
    </EditButton>
  </ButtonContainer>
      <h2>
        Total:<i class="fa-solid fa-dollar-sign icon"></i>
      </h2>
     
      <table class="table">
        <thead>
          <th>si no</th>
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
  )
}

export default History