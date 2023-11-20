import React, { useState } from "react";
import styled from "styled-components";
function Add() {
  const Conatiner = styled.div`
    width: 100%;
    background-color: lightblue;
    height: 100%;
  `;
  const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  `;
  const FirstContainer = styled.div``;
  const Mainbox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4%;
    margin: 2%;
  `;
  const Headder = styled.h2``;

  const BalanceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 5px 5px 5px gray;
    padding: 5px;
    margin: 8px;
    background-color: white;
  `;
  const Balance = styled.div``;
  const ButtonCancel = styled.div`
    border: 2px solid black;
    color: white;
    background-color: black;
    padding: 10px;
    border-radius: 10px;
  `;

  const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-shadow: 5px 5px 5px gray;
    padding: 10px;
    margin: 8px;
  `;
  const DateContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 5px 5px 5px gray;
    padding: 5px;
    background-color: white;
  `;
  const Input = styled.input`
    margin: 5px;
    box-shadow: 5px 5px 5px gray;
    padding: 5px;
    width: 100%;
  `;
  const ButtonContainer = styled.div``;
  const ButtonRadio = styled.div``;
  const ButtonTransactionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin: 8px;
  `;
  const Buttont = styled.div`
    width: 50%;
    background-color: black;
    color: white;
    padding: 10px;
    border-radius: 10%;
  `;
  const SecondContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 5px 5px 5px gray;
    padding: 5px;
  `;
  const ExpenceContainer = styled.div`
    margin: 8px;
    padding: 30px;
    background-color: var(--color-red);
    border-radius: 10%;
  `;
  const IncomContainer = styled.div`
    margin: 8px;
    background-color: var(--color-green);
    padding: 30px;
    border-radius: 10%;
  `;
  const Selection = styled.select`
    margin: 5px;
    box-shadow: 5px 5px 5px gray;
    padding: 5px;
    width: 100%;
  `;
  const Options = styled.option`
  padding: 2px;
  margin: 2px;
  `;
const postData=()=>{
fetch("	create/", {
  method: "post",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({

  }),
})
  .then((res) => res.json())
  .then((data) => {
    
  });

}
  return (
    <Conatiner>
      <Wrapper>
        <Mainbox>
          <FirstContainer>
            <Headder>Money Tracker</Headder>
            <BalanceContainer>
              <Balance>Balance : $5000</Balance>
              <ButtonCancel>Cancel</ButtonCancel>
            </BalanceContainer>
            <FormContainer>
              <DateContainer>
                <p style={{ color: "gray" }}>date of payment</p>
                <Input
                  style={{ width: "30%" }}
                  placeholder="Date of payment"
                  type="Date"
                />
              </DateContainer>

              <Input type="text" placeholder="Expence Name"></Input>
              <Input type="text" placeholder="Amount Spent"></Input>
              <Selection>
                <Options>categories</Options>
                <Options>asdadasda</Options>
                <Options>asdadasda</Options>
                <Options>asdadasda</Options>
                <Options>asdadasda</Options>
                <Options>asdadasda</Options>
              </Selection>
            </FormContainer>
            <ButtonContainer>
              <ButtonRadio></ButtonRadio>
              <ButtonRadio></ButtonRadio>
            </ButtonContainer>
            <ButtonTransactionContainer>
              <Buttont onClick={postData}>Add Transaction</Buttont>
            </ButtonTransactionContainer>
          </FirstContainer>
          <SecondContainer>
            <ExpenceContainer>Expence : $5000</ExpenceContainer>
            <IncomContainer>Incom : $10000</IncomContainer>
          </SecondContainer>
        </Mainbox>
      </Wrapper>
    </Conatiner>
  );
}

export default Add;
