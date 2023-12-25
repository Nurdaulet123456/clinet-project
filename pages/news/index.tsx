import MainLayouts from "../../layouts/MainLayouts";
import styled from "@emotion/styled";
import React from "react";
import NewsCards from "../../components/molecul/NewsCard/NewsCards";

const MenuPage = () => {
  return (
    <MainLayouts>
      <div className="menu_title">Жаңалықтар</div>

      <ContentContainer>
        <CardsFlex>
          <NewsCards newsCards={newsCards} />
        </CardsFlex>
        <ImageBlock
          src="/news-block.png"
          alt="KZ flags"
        />
      </ContentContainer>
    </MainLayouts>
  );
};

const newsCards = [
  {
    id: 1,
    img: "/news.png",
    date: "09.12.2023",
    title: "Республика күніне орай Қазақстан Республикасының Мемлекеттік Гимнін орындау челленджі.",
  },
  {
    id: 2,
    img: "/news.png",
    date: "09.12.2023",
    title: "Республика күніне орай Қазақстан Республикасының Мемлекеттік Гимнін орындау челленджі.",
  },
  {
    id: 3,
    img: "/news.png",
    date: "09.12.2023",
    title: "Республика күніне орай Қазақстан Республикасының Мемлекеттік Гимнін орындау челленджі.",
  },
];

const ImageBlock = styled.img`
  width: 350px;
  object-fit: cover;
  border-radius: 10px;
`;

const CardsFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;

`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.7rem;

  margin-top: 2.4rem;
`;

export default MenuPage;
