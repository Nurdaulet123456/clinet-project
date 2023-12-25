import Tabs from "@/components/molecul/Tabs/Tabs";
import MektepFooter from "@/components/organ/MektepFooter";
import MektepHeader from "@/components/organ/MektepHeader";
import MektepT1 from "@/components/organ/MektepT/MektepT1";
import MainLayouts from "@/layouts/MainLayouts";

import styled from "@emotion/styled";
import React from "react";
import NewsCards from "../../components/molecul/NewsCard/NewsCards";

const MektepPage = () => {
  return (
    <MainLayouts>
      <div className="menu_title">Жаңалықтар</div>

      <ContentContainer>
        <DateBlock>
          13.12.2023
        </DateBlock>
        <MainBlock>
          <TextElement>
            Республика күніне орай Қазақстан Республикасының Мемлекеттік Гимнін орындау челленджі. Сіздерді еліміздің мемлекеттік мерекесі Республика күнімен шын жүректен құттықтаймыз! Тарихи маңызы бар осы күні сіздерге зор денсаулық, шаңырақтарыңызға шаттық, баянды бақыт пен қажымас қайрат тілейміз. Мемлекетіміздің тұрақты дамуының кепілі болып табылатын құндылықтарымыз ел тәуелсіздігі пен халық бірлігі нығая берсін.
            <br/>
            <br/>
            Республика күніне орай Қазақстан Республикасының Мемлекеттік Гимнін орындау челленджі. Сіздерді еліміздің мемлекеттік мерекесі Республика күнімен шын жүректен құттықтаймыз! Тарихи маңызы бар осы күні сіздерге зор денсаулық, шаңырақтарыңызға шаттық, баянды бақыт пен қажымас қайрат тілейміз. Мемлекетіміздің тұрақты дамуының кепілі болып табылатын құндылықтарымыз ел тәуелсіздігі пен халық бірлігі нығая берсін.
            <br/>
            <br/>
            Республика күніне орай Қазақстан Республикасының Мемлекеттік Гимнін орындау челленджі. Сіздерді еліміздің мемлекеттік мерекесі Республика күнімен шын жүректен құттықтаймыз! Тарихи маңызы бар осы күні сіздерге зор денсаулық, шаңырақтарыңызға шаттық, баянды бақыт пен қажымас қайрат тілейміз. Мемлекетіміздің тұрақты дамуының кепілі болып табылатын құндылықтарымыз ел тәуелсіздігі пен халық бірлігі нығая берсін.
          </TextElement>
          <ImageElement
            src="/news-block.png"
            alt="KZ flags"
          />
        </MainBlock>
        <GalleryBlock>
          {images.map((item) => (
            <GalleryElement
              src={item}
              alt="KZ flags"
            />
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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  
  height: 80vh;
  padding: 16px 28px;
  
  border-radius: 25px;
  
  background: white;
`;

const DateBlock = styled.div`
  color: #1B447A;
  font-size: 30px;
  font-weight: 700;
`;


const MainBlock = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: 1.5fr 1fr;
  justify-items: center;
`;

const TextElement = styled.div`
  overflow-y: scroll;
  
  height: 350px;
  padding-right: 10px;

  font-size: 18px;

  &::-webkit-scrollbar {
    width: 18px;
    background-color: #548FE0;
    border-radius: 10px;

    &-thumb {
      border-radius: 10px;
      border: 3px solid #548FE0;
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
`;

const GalleryBlock = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 20px;
`;

const GalleryElement = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 5px;
`;

export default MektepPage;
