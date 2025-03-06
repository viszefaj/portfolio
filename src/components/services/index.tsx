import React from "react";
import styled from "styled-components";
import { FaCode, FaPaintBrush, FaDatabase, FaMobileAlt } from "react-icons/fa";

const ServicesSection = styled.section`
  background-color: #000; /* Pure black background */
  color: #959595;
  text-align: center;
  padding: 80px 20px;
`;

const SectionTitle = styled.h2`
  color: #fff;
  font-size: 36px;
  margin-bottom: 40px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

const Card = styled.div`
  background-color: #1b1b1b;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease, background-color 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    border-color: #ff6500;
    background-color: #111;
  }
`;

const IconWrapper = styled.div`
  font-size: 40px;
  color: #ff6500;
  margin-bottom: 15px;
`;

const CardTitle = styled.h3`
  color: #fff;
  font-size: 20px;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #959595;
`;

const Services = () => {
  return (
    <ServicesSection>
      <SectionTitle>Services</SectionTitle>
      <ServicesGrid>
        <Card>
          <IconWrapper><FaCode /></IconWrapper>
          <CardTitle>Web Development</CardTitle>
          <CardDescription>Building responsive and modern web applications.</CardDescription>
        </Card>

        <Card>
          <IconWrapper><FaPaintBrush /></IconWrapper>
          <CardTitle>UI/UX Design</CardTitle>
          <CardDescription>Designing intuitive and aesthetic user experiences.</CardDescription>
        </Card>

        <Card>
          <IconWrapper><FaDatabase /></IconWrapper>
          <CardTitle>Backend Development</CardTitle>
          <CardDescription>Developing secure and scalable server-side applications.</CardDescription>
        </Card>

        <Card>
          <IconWrapper><FaMobileAlt /></IconWrapper>
          <CardTitle>Mobile Development</CardTitle>
          <CardDescription>Creating mobile-friendly and cross-platform applications.</CardDescription>
        </Card>
      </ServicesGrid>
    </ServicesSection>
  );
};

export default Services;
