import styled from "@emotion/styled";
import Link from "next/link";
import React, { FC } from "react";

const TeacherCard: FC = () => {
  return (
    <CardWrapper>
      <ProfileBlock>
        <ProfileImage
          src="/teacher.png"
          alt="Profile"
        />
        <ProfileContent>
          <Name>КОСАЕВ УЛАН ЕРЛАНОВИЧ</Name>
          <Qualification>БИЛІКТІЛІК САНАТЫ-ПЕДАГОГ</Qualification>
        </ProfileContent>
      </ProfileBlock>
      <ContentBlock>
        <Info>ЛАУАЗЫМЫ-ДЕНЕ ОРЫС ТІЛІ ЖӘНЕ ӘДЕБИЕТІ ПӘНІ МҰҒАЛІМІ</Info>
        <Subtitle>Жұмыс тәжірбиесі...</Subtitle>
        <Description>2012-2016 жылдары - Алатау ауданының мектебінде зерттеуші мұғалім болып жұмыс
          атқарды.</Description>
        <Description>2016-2018 жылдары - Алматы қаласындағы №3 мектебінде мұғалім болып жұмыс атқарды.</Description>
        <Subtitle>Мамандығы</Subtitle>
        <Description>Бітірген жылы - 2008 жылы</Description>
        <Description>Университет - SDU университеті</Description>
        <Description>Деңгей - Бакалавр</Description>
        <Description>Мамандығы- қазақ тілі пән мұғалімі.</Description>
        <Description>2016-2018 жылдары - Алматы қаласындағы №3 мектебінде мұғалім болып жұмыс атқарды.</Description>
        {/* Repeat for other sections */}
      </ContentBlock>
      <ButtonContainer>
          <Button>
            <Link href="/teachers/calendar">Сабақ кестесі</Link>
          </Button>
        <Button>Резюме</Button>
      </ButtonContainer>
    </CardWrapper>
  )
    ;
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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const ProfileImage = styled.img`
  height: 100%;
`;

const ContentBlock = styled.div`
  padding: 0 16px;
`;

const Name = styled.h1`
  font-size: 24px;
  color: #E94E29;
  margin: 0;
`;

const Qualification = styled.p`
  font-size: 18px;
  color: #666666;
  margin-top: 4px;
  margin-bottom: 16px;
`;

const Info = styled.p`
  font-size: 16px;
  color: #233255;
  font-weight: 700;
  margin-bottom: 16px;
`;
const Subtitle = styled.p`
  font-size: 16px;
  color: #E94E29;
  font-weight: 700;
`;
const Description = styled.p`
  font-size: 16px;
  color: #233255;
  font-weight: 700;
  margin-bottom: 16px;
  padding-left: 10px;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 40px 16px 5px;
`;

const Button = styled.button`
  background-color: #092C4C;
  border: none;
  color: white;
  padding: 10px 20px;

  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #092C4C;
  }
`;

export default TeacherCard;

