import React from "react";
import { mobile } from "../responsive";
import {
  Facebook,
  Instagram,
  Twitter,
  Pinterest,
  MailOutlined,
  Room,
  Phone,
} from "@material-ui/icons";
import styled from "styled-components";

const Component = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
  margin: 20px 5px 5px 5px;
`;
const Desc = styled.p`
  margin: 20px 5px 5px 5px;
`;
const SocialContainer = styled.div`
  display: flex;

  margin: 10px;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#eeee" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Component>
      <Left>
        <Logo>FLORgeous.</Logo>
        <Desc>Flowers say it better, our promise: 100% fresh guaranteed.</Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>wedding Bells</ListItem>
          <ListItem>Birthday cakes</ListItem>
          <ListItem>Flowers</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>

        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          95 vasagatan , Stockholm center 4538
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +46 74569323
        </ContactItem>
        <ContactItem>
          <MailOutlined style={{ marginRight: "10px" }} /> contact@flora.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Component>
  );
};

export default Footer;
