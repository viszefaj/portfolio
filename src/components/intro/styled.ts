import styled from "styled-components";

export const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: 10rem;
  padding-left: 2rem;
`;

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  gap: 1rem;
`;

export const SocialMediaSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: row;

  width: 100%;
  gap: 1rem;
`;

export const ButtonsGroup = styled.section`
  display: flex;
  align-items: center;

  padding: 1rem;
  flex-direction: row;
  width: 100%;
  gap: 5rem;
`;

export const ExperienceSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 2rem;
  background-color: #1b1b1b;
  border-radius: 10px;
  width: max-content;
`;

export const ExperienceItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border-right: 1px solid #ff6500;
  color: white;

  &:last-child {
    border-right: none;
  }
`;

export const PhotoSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 2rem;
  width: 100%;
  max-width: 800px;
`;
export const Photo = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 2rem;
`;
