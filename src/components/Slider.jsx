import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../../src/Data";
import { mobile } from "../responsive";
//import imgSlider from "../images/1.jpg";

//create  a style component
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin-top: 10px;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  box-shadow: 1px 1px 0 gray;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
  margin: 5px;
  border-radius: 1%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-top: 20px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  margin-top: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      {/* used props */}
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} key={item.id} />
            </ImgContainer>
            <InfoContainer>
              <Title> {item.title} </Title>
              <Desc>{item.desc}</Desc>
              <Button> SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;

//multiple images for slides

// <Slide bg="#7c21ce">
// <ImgContainer>
//   <Image src="https://images.pexels.com/photos/433527/pexels-photo-433527.jpeg" />
// </ImgContainer>
// <InfoContainer>
//   <Title> BIRTHDAY DECORE</Title>
//   <Desc>
//     GET FLAT 5% OFF ON BIRTHDAYS'S FLORAL DECORATIONS.
//   </Desc>
//   <Button> SHOP NOW</Button>
// </InfoContainer>
// </Slide>

// <Slide bg="#7c01ce">
// <ImgContainer>
//   <Image
//     src="https://images.unsplash.com/photo-1521543832500-49e69fb2bea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
//     style={{ marginLeft: 100 }}
//   />
// </ImgContainer>
// <InfoContainer>
//   <Title> WEDDING BELLS</Title>
//   <Desc>
//     VIBRANT RED AND PINK WITH CORAL PEONIES BOUQUETS(back in stock)
//   </Desc>
//   <Button> SHOP NOW</Button>
// </InfoContainer>
// </Slide>
