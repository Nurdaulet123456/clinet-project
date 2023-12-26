import { BackIcons } from "@/components/atoms/Icons";
import MainLayouts from "@/layouts/MainLayouts";

import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

const MektepPage = () => {
  return (
    <MainLayouts>
      <div className="menu_title">Жаңалықтар</div>
      <Link href={'/news'}>
        <BackStyled>
          <BackIcons />
        </BackStyled>
      </Link>

      <ContentContainer>
        <DateBlock>13.12.2023</DateBlock>
        <MainBlock>
          <TextElement>
            Республика күніне орай Қазақстан Республикасының Мемлекеттік Гимнін
            орындау челленджі. Сіздерді еліміздің мемлекеттік мерекесі
            Республика күнімен шын жүректен құттықтаймыз! Тарихи маңызы бар осы
            күні сіздерге зор денсаулық, шаңырақтарыңызға шаттық, баянды бақыт
            пен қажымас қайрат тілейміз. Мемлекетіміздің тұрақты дамуының кепілі
            болып табылатын құндылықтарымыз ел тәуелсіздігі пен халық бірлігі
            нығая берсін.
            <br />
            <br />
            Республика күніне орай Қазақстан Республикасының Мемлекеттік Гимнін
            орындау челленджі. Сіздерді еліміздің мемлекеттік мерекесі
            Республика күнімен шын жүректен құттықтаймыз! Тарихи маңызы бар осы
            күні сіздерге зор денсаулық, шаңырақтарыңызға шаттық, баянды бақыт
            пен қажымас қайрат тілейміз. Мемлекетіміздің тұрақты дамуының кепілі
            болып табылатын құндылықтарымыз ел тәуелсіздігі пен халық бірлігі
            нығая берсін.
            <br />
            <br />
            Республика күніне орай Қазақстан Республикасының Мемлекеттік Гимнін
            орындау челленджі. Сіздерді еліміздің мемлекеттік мерекесі
            Республика күнімен шын жүректен құттықтаймыз! Тарихи маңызы бар осы
            күні сіздерге зор денсаулық, шаңырақтарыңызға шаттық, баянды бақыт
            пен қажымас қайрат тілейміз. Мемлекетіміздің тұрақты дамуының кепілі
            болып табылатын құндылықтарымыз ел тәуелсіздігі пен халық бірлігі
            нығая берсін.
          </TextElement>
          <ImageElement src="/news-block.png" alt="KZ flags" />
        </MainBlock>
        <GalleryBlock>
          {images.map((item) => (
            <GalleryElement src={item} alt="KZ flags" />
          ))}
        </GalleryBlock>
      </ContentContainer>
    </MainLayouts>
  );
};

const images = [
  "/news-block.png",
  "/news-block.png",
  "/news-block.png",
  "/news-block.png",
  "/news-block.png",
];

const BackStyled = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;

    position: absolute;
    top: 32px;
    right: 25px;

    cursor: pointer;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  padding: 16px 28px;

  border-radius: 25px;

  background: white;

  @media (max-width: 1024px) {
    display: flex;
    background-color: transparent;
  }
`;

const DateBlock = styled.div`
  color: #1b447a;
  font-size: 30px;
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: 1.6rem;
    color: white;
    font-weight: 400;
  }
`;

const MainBlock = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: 1.5fr 1fr;
  justify-items: center;

  @media (max-width: 1024px) {
    display: block;
    order: 3;
  }
`;

const TextElement = styled.div`
  overflow-y: scroll;

  height: 350px;
  padding-right: 10px;

  font-size: 18px;

  @media (max-width: 1024px) {
    height: 100%;
    color: #ffffff;
  }

  &::-webkit-scrollbar {
    width: 18px;
    background-color: #548fe0;
    border-radius: 10px;

    @media (max-width: 1024px) {
      width: 0;
    }

    &-thumb {
      border-radius: 10px;
      border: 3px solid #548fe0;
      -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.8);
      background-color: white;
      transition: all 0.3s ease-in-out;
      &:hover {
        background-color: #f3f3f3;
      }
    }
  }
`;

const ImageElement = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 1024px) {
    order: 1;
    display: none;
  }
`;

const GalleryBlock = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 20px;

  @media (max-width: 1024px) {
    display: block;

    order: 2;
  }
`;

const GalleryElement = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 5px;

  @media (max-width: 1024px) {
    display: block;

    order: 2;
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      display: none;
    }
    width: 100%;
    height: 100%;

    margin-bottom: 2.4rem;
  }
`;

export default MektepPage;
