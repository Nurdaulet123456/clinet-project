import MainLayouts from "../../layouts/MainLayouts";
import styled from "@emotion/styled";
import React from "react";
import NewsCards from "../../components/molecul/NewsCard/NewsCards";

const MenuPage = () => {
  return (
    <MainLayouts>
      <div className="menu_title">Жаңалықтар</div>

      <ContentContainer>
        <CardsFlex className="news_block">
          <NewsCards newsCards={newsCards} />
        </CardsFlex>
        <div className="news_block">
          <ImageBlock src="/news-block.png" alt="KZ flags" />
        </div>
      </ContentContainer>
    </MainLayouts>
  );
};

const newsCards = [
  {
    id: 1,
    img: "/news.png",
    date: "09.12.2023",
    title:
      "Республика күніне орай Қазақстан Республикасының Мемлекеттік Гимнін орындау челленджі.",
  },
  {
    id: 2,
    img: "/news.png",
    date: "09.12.2023",
    title:
      "Республика күніне орай Қазақстан Республикасының Мемлекеттік Гимнін орындау челленджі.",
  },
  {
    id: 3,
    img: "/news.png",
    date: "09.12.2023",
    title:
      "Республика күніне орай Қазақстан Республикасының Мемлекеттік Гимнін орындау челленджі.",
  },
];

const ImageBlock = styled.img`
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const CardsFlex = styled.div`
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 1.7rem;
  align-items: flex-start;

  margin-top: 2.4rem;

  .news_block {
    width: 50%;
  }

  @media (max-width: 1024px) {
    display: block;
    padding-inline: 1.2rem;
  }
`;

export default MenuPage;
