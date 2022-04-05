import React from "react";
import styled from "styled-components";
import { Send } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fcf1ed;
`;
const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "40px" })}
`;
const Desc = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #cb3486;
  color: white;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>News Letter</Title>
      <Desc> Get timely Updates From your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Enter your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;

// @keyframes mover {
//     0% {
//       transform: translateY(0);
//     }
//     100% {
//       transform: translateY(15px);
//     }
//   }

//   animation: mover 1s infinite alternate;
