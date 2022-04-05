import React from "react";
import styled from "styled-components";
//create  a style component
const Container = styled.div`
  height: 30px;
  background-color: #cb3486;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const Desc = styled.p`
  animation: mover 1s infinite alternate;
  @keyframes mover {
    0% {
      transform: translateX(-15);
    }
    100% {
      transform: translateX(15px);
    }
  }
`;

function Announcement() {
  return (
    <Container>
      <Desc>Super Deal : Free Shipping on order over 499 kr</Desc>
    </Container>
  );
}

export default Announcement;
