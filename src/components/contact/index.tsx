import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  background-color: #1b1b1b;
  color: #959595;
  text-align: center;
  padding: 80px 20px;
  margin-bottom: 50px;
`;

const ContactTitle = styled.h2`
  color: #fff;
  font-size: 36px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 2px solid #959595;
  background-color: transparent;
  color: #fff;
  border-radius: 5px;
  outline: none;
  transition: 0.3s ease;

  &:focus {
    border-color: #ff6500;
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  font-size: 16px;
  border: 2px solid #959595;
  background-color: transparent;
  color: #fff;
  border-radius: 5px;
  outline: none;
  transition: 0.3s ease;
  resize: none;
  height: 120px;

  &:focus {
    border-color: #ff6500;
  }
`;

const SubmitButton = styled.button`
  background-color: #ff6500;
  border: none;
  padding: 12px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s ease;

  &:hover {
    background-color: #FF8542;
  }
`;

const Contact = () => {
  return (
    <ContactSection>
      <ContactTitle>Contact Me</ContactTitle>
      <Form>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <TextArea placeholder="Your Message" required />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </Form>
    </ContactSection>
  );
};

export default Contact;
