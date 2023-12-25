import React from "react";
import MainLayouts from "@/layouts/MainLayouts";
import styled from "@emotion/styled";
import PrideCards from "../components/molecul/PrideCards/PrideCards";
import Tabs from "../components/molecul/Tabs/Tabs";

const MenuPage = () => {
  return (
    <MainLayouts>
      <div className="menu_title">Мектеп мақтаныштары</div>

      <TabsFlex>
        <Tabs link="" tabs={tabs} />
      </TabsFlex>

      <CardsContainer>
        <PrideCards prideCards={prideCards} />
      </CardsContainer>
    </MainLayouts>
  );
};

const tabs = [
  {
    id: 1,
    type: "Спорт",
  },
  {
    id: 2,
    type: "Өнер",
  },
  {
    id: 3,
    type: "Пәндік олимпиада",
  },
  {
    id: 4,
    type: "Алтын белгі",
  },
  {
    id: 4,
    type: "Қызыл аттестат",
  },
];

const prideCards = [
  {
    id: 1,
    img: "/pride.png",
    fullName: "Адия Рускулова",
    title: "Бокстан Республика чемпионы",
    grade: "9 сынып оқушысы",
  },
  {
    id: 2,
    img: "/pride.png",
    fullName: "Адия Рускулова",
    title: "Бокстан Республика чемпионы",
    grade: "9 сынып оқушысы",
  },
  {
    id: 3,
    img: "/pride.png",
    fullName: "Адия Рускулова",
    title: "Бокстан Республика чемпионы",
    grade: "9 сынып оқушысы",
  },
  {
    id: 4,
    img: "/pride.png",
    fullName: "Адия Рускулова",
    title: "Бокстан Республика чемпионы",
    grade: "9 сынып оқушысы",
  },
  {
    id: 5,
    img: "/pride.png",
    fullName: "Адия Рускулова",
    title: "Бокстан Республика чемпионы",
    grade: "9 сынып оқушысы",
  },
  {
    id: 6,
    img: "/pride.png",
    fullName: "Адия Рускулова",
    title: "Бокстан Республика чемпионы",
    grade: "9 сынып оқушысы",
  },
  {
    id: 7,
    img: "/pride.png",
    fullName: "Адия Рускулова",
    title: "Бокстан Республика чемпионы",
    grade: "9 сынып оқушысы",
  },
  {
    id: 8,
    img: "/pride.png",
    fullName: "Адия Рускулова",
    title: "Бокстан Республика чемпионы",
    grade: "9 сынып оқушысы",
  },
  {
    id: 9,
    img: "/pride.png",
    fullName: "Адия Рускулова",
    title: "Бокстан Республика чемпионы",
    grade: "9 сынып оқушысы",
  },
];

const TabsFlex = styled.div`
  display: flex;

  gap: 1.7rem;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.7rem;
  
  margin-top: 2.4rem;
`;

export default MenuPage;
