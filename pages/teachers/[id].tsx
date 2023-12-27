import MainLayouts from "@/layouts/MainLayouts";
import styled from "@emotion/styled";
import React from "react";
import TeacherCard from "../../components/molecul/TeacherCard/TeacherCard";
import TeacherSearch from "../../components/organ/TeacherSearch/TeacherSearch";

const MenuPage = () => {
  return (
    <MainLayouts>
      <div className="menu_title">Мұғалімдер</div>

      <PaddingInline>
        <ContentWrapper>
          <CardsContainer>
            <TeacherSearch />
          </CardsContainer>
          <TeacherCard />
        </ContentWrapper>
      </PaddingInline>
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

const PaddingInline = styled.div`
  @media (max-width: 1024px) {
    padding-inline: 1.2rem;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  flex-wrap: nowrap;
  width: 100%;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const CardsContainer = styled.div`
  background-color: white;
  width: 796px;
  border-radius: 10px;
  padding-top: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1024px) {
    margin-bottom: 2rem;
    display: block;
  }
`;

export default MenuPage;
