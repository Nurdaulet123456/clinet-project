import styled from "@emotion/styled";
import Link from "next/link";
import React, { FC, useState } from "react";

const TeacherCard: FC = () => {
  const [content, setContent] = useState<boolean>(false);

  return (
    <CardWrapper>
      <div>
        <ProfileBlock>
          <ProfileImage src="/teacher.png" alt="Profile" />
          <ProfileContent>
            <Name>КОСАЕВ УЛАН ЕРЛАНОВИЧ</Name>
            <Qualification>БИЛІКТІЛІК САНАТЫ-ПЕДАГОГ</Qualification>
          </ProfileContent>
        </ProfileBlock>
        <Info style={{ padding: "0 16px" }}>ЛАУАЗЫМЫ-ДЕНЕ ОРЫС ТІЛІ ЖӘНЕ ӘДЕБИЕТІ ПӘНІ МҰҒАЛІМІ</Info>
      </div>
      <ContentBlock>
        {content && (
          <>
            <Subtitle>Жұмыс тәжірбиесі</Subtitle>
            <Description>
              2012-2016 жылдары - Алатау ауданының мектебінде зерттеуші мұғалім
              болып жұмыс атқарды.
            </Description>
            <Description>
              2016-2018 жылдары - Алматы қаласындағы №3 мектебінде мұғалім болып
              жұмыс атқарды.
            </Description>
            <Subtitle style={{ marginTop: "1.7rem" }}>Мамандығы</Subtitle>
            <Description>Бітірген жылы - 2008 жылы</Description>
            <Description>Университет - SDU университеті</Description>
            <Description>Деңгей - Бакалавр</Description>
            <Description>Мамандығы- қазақ тілі пән мұғалімі.</Description>
            <Description>
              2016-2018 жылдары - Алматы қаласындағы №3 мектебінде мұғалім болып
              жұмыс атқарды.
            </Description>
          </>
        )}
        {/* Repeat for other sections */}
      </ContentBlock>
      <ButtonContainer>
        <Button>
          <Link href="/teachers/calendar">Сабақ кестесі</Link>
        </Button>
        <Button onClick={() => setContent(!content)}>Резюме</Button>
      </ButtonContainer>
    </CardWrapper>
  );
};

const ProfileBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
`;
const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;
const CardWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  max-width: 522px;
  height: 906px;
  font-family: "Inter", sans-serif;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1024px) {
    background-color: transparent;
    box-shadow: none;
  }
`;

const ProfileImage = styled.img`
  height: 100%;
`;

const ContentBlock = styled.div`
  padding: 0 16px;

  @media (max-width: 1024px) {
    color: white;
  }
`;

const Name = styled.h1`
  font-size: 24px;
  font-family: "Inter", sans-serif;
  color: #e94e29;
  margin: 0;

  @media (max-width: 1024px) {
    color: white;
    font-size: 1.8rem;
  }
`;

const Qualification = styled.p`
  font-size: 18px;
  color: #666666;
  margin-top: 4px;
  margin-bottom: 16px;

  font-family: "Inter", sans-serif;

  @media (max-width: 1024px) {
    color: white;
    font-size: 16px;
  }
`;

const Info = styled.p`
  font-size: 20px;
  color: #233255b2;
  font-weight: 600;
  font-family: "Inter", sans-serif;
  margin-bottom: 16px;
  @media (max-width: 1024px) {
    color: white;
  }
`;
const Subtitle = styled.p`
  font-size: 20px;
  font-family: "Inter", sans-serif;
  color: #e94e29;
  font-weight: 600;
  @media (max-width: 1024px) {
    color: white;
  }
`;
const Description = styled.p`
  font-size: 20px;
  font-family: "Inter", sans-serif;
  color: #000;
  font-weight: 500;
  margin-bottom: 10px;
  padding-left: 10px;
  @media (max-width: 1024px) {
    color: white;
    padding: 0;
    font-weight: 400;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 40px 16px 5px;

  margin-top: 20rem;:

  @media (max-width: 1024px) {
    button {
      &:last-child {
        display: none;
      }

      &:first-child {
        width: 100%;
        background-color: white;
        color: #636CBD;
      }
    }
  }
`;

const Button = styled.button`
  background-color: #092c4c;
  border: none;
  color: white;
  padding: 10px 20px;

  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #092c4c;
  }
`;

export default TeacherCard;
