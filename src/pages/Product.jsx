import React from "react";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "70vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const ProductInfoContainer = styled.div`
  display: flex;
  padding: 50px;
`;
const ProductDetails = styled.div``;
const ImageBox = styled.img`
  width: 30%;
  ${mobile({
    width: "60%",
  })}
`;

const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1525096122400-e43fa92b933f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHdlZGRpbmclMjBib3F1ZXR8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
        </ImgContainer>
        <InfoContainer>
          <Title> White Harmony</Title>
          <Desc>
            This is a sweet tussie mussie(small hand-tied victorian style)
            bouquet of large white roses blooms, spray roses, accents of wax,
            hydrangea, greenery and any sort of cute bloom we might have at the
            moment. It is meant to express love and care. Please let us know
            your preference or leave it up to our expert designer.
          </Desc>
          <Price>1500 kr</Price>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
          <ProductInfoContainer>
            <ProductDetails>
              <ImageBox src="https://artlefleur.com/skin/frontend/premiumsites/bloom/images/product/view/BN-PDP-PS.gif" />
              <p> Directly from store</p>
            </ProductDetails>
            <ProductDetails>
              <ImageBox src="https://artlefleur.com/skin/frontend/premiumsites/bloom/images/product/view/BN-PDP-PS-arrangement.gif" />
              <p> Designed and Arranged</p>
            </ProductDetails>
          </ProductInfoContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
