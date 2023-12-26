import React from "react";
import MainLayouts from "@/layouts/MainLayouts";
import styled from "@emotion/styled";
import Tabs from "../../components/molecul/Tabs/Tabs";
import PrideCards1 from "@/components/organ/Prides/Prides1";
import PrideCards2 from "@/components/organ/Prides/Prides2";
import PrideCards3 from "@/components/organ/Prides/Prides3";
import PrideCards4 from "@/components/organ/Prides/Prides4";
import PrideCards5 from "@/components/organ/Prides/Prides5";
import { useRouter } from "next/router";
import useScroll from "@/hooks/useScroll";

const MenuPage = () => {
  const router = useRouter();

  const { containerRef, handleTouchEnd, handleTouchMove, handleTouchStart } =
    useScroll();

  return (
    <MainLayouts>
      <div className="menu_title">Мектеп мақтаныштары</div>
      <PaddingInline>
        <TabsFlex
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
          ref={containerRef}
        >
          <Tabs link="prides" tabs={tabs} />
        </TabsFlex>

        {router.asPath.split("/").at(-1) === "1" && (
          <CardsContainer>
            <PrideCards1 prideCards={prideCards} />
          </CardsContainer>
        )}

        {router.asPath.split("/").at(-1) === "2" && (
          <CardsContainer>
            <PrideCards2 prideCards={prideCards} />
          </CardsContainer>
        )}

        {router.asPath.split("/").at(-1) === "3" && (
          <CardsContainer>
            <PrideCards3 prideCards={prideCards} />
          </CardsContainer>
        )}

        {router.asPath.split("/").at(-1) === "4" && (
          <CardsContainer>
            <PrideCards4 prideCards={prideCards} />
          </CardsContainer>
        )}

        {router.asPath.split("/").at(-1) === "5" && (
          <CardsContainer>
            <PrideCards5 prideCards={prideCards} />
          </CardsContainer>
        )}
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
    id: 5,
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
  align-items: center;
  overflow-x: auto;
  width: auto;
`;

const PaddingInline = styled.div`
  @media (max-width: 1024px) {
    padding-inline: 1.2rem;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.7rem;

  margin-top: 2.4rem;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    column-gap: 1.6rem;
  }
`;

export default MenuPage;
