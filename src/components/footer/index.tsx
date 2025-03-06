import React from "react";
import styled from "styled-components";
import { FaBehance, FaDribbble, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaVimeoV } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #1b1b1b;
  color: #959595;
  text-align: center;
  padding: 80px 20px 60px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid #1b1b1b;
  }
`;


const SubText = styled.p`
  font-style: italic;
  margin-bottom: 10px;
  color: #959595;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  margin-bottom: 20px;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

const Email = styled.a`
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  border-bottom: 2px solid #ff6500;
  padding-bottom: 3px;

  &:hover {
    color: #ff6500;
  }
`;

const QuoteButton = styled.button`
  background: none;
  border: 2px solid #ff6500;
  padding: 12px 25px;
  color: #ff6500;
  font-size: 18px;
  cursor: pointer;
  border-radius: 30px;
  transition: 0.3s ease;

  &:hover {
    background: #ff6500;
    color: #fff;
  }
`;

const SocialIcons = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const SocialIcon = styled.a`
  color: #959595;
  font-size: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6500;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SubText>Your cup of tea?</SubText>
      <Title>Let's start</Title>
      <ContactContainer>
        <ContactItem>
          <Email href="mailto:hello@example.com">hello@example.com</Email>
        </ContactItem>
        <ContactItem>
          <span>📞</span> +421 902 468 085
        </ContactItem>
      </ContactContainer>
      <QuoteButton>Get a quote</QuoteButton>
      <SocialIcons>
        <SocialIcon href="#"><FaBehance /></SocialIcon>
        <SocialIcon href="#"><FaDribbble /></SocialIcon>
        <SocialIcon href="#"><FaFacebookF /></SocialIcon>
        <SocialIcon href="#"><FaInstagram /></SocialIcon>
        <SocialIcon href="#"><FaTwitter /></SocialIcon>
        <SocialIcon href="#"><FaLinkedinIn /></SocialIcon>
        <SocialIcon href="#"><FaVimeoV /></SocialIcon>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
