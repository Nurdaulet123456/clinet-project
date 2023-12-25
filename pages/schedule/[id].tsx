import styled from "@emotion/styled";
import React from "react";
import PaginationFlex from "../../components/molecul/PaginationFlex/PaginationFlex";
import PaginationGrid from "../../components/molecul/PaginationGrid/PaginationGrid";
import MainLayouts from "../../layouts/MainLayouts";

const MenuPage = () => {
  return (
    <MainLayouts>
      <div className="menu_title">Сабақ кестесі</div>

      <ContentContainer>
        <PaginationFlex pagination={paginationItems} />
        <PaginationGrid pagination={paginationContent}/>
      </ContentContainer>
    </MainLayouts>
  );
};

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.7rem;

  margin-top: 2.4rem;
`;

const paginationItems = [
  {
    text: "1",
    value: "1",
  },
  {
    text: "2",
    value: "2",
  },
  {
    text: "3",
    value: "3",
  },
  {
    text: "4",
    value: "4",
  },
  {
    text: "5",
    value: "5",
  },
  {
    text: "6",
    value: "6",
  },
  {
    text: "7",
    value: "7",
  },
  {
    text: "8",
    value: "8",
  },
  {
    text: "9",
    value: "9",
  },
  {
    text: "10",
    value: "10",
  },
  {
    text: "11",
    value: "11",
  },
  {
    text: "1 ауысым",
    value: "1quarter"
  },
  {
    text: "2 ауысым",
    value: "2quarter"
  }
];

const allGrades = ["1 A", "1 Ә", "1 Б", "1 В", "2 A", "2 Ә", "2 Б", "2 В", "3 A", "3 Ә", "3 Б", "3 В", "4 A", "4 Ә", "4 Б", "4 В",
  "5 A", "5 Ә", "5 Б", "5 В", "6 A", "6 Ә", "6 Б", "6 В", "7 A", "7 Ә", "7 Б", "7 В", "8 A", "8 Ә", "8 Б", "8 В", "9 A", "9 Ә", "9 Б", "9 В",
  "10 A", "10 Ә", "10 Б", "10 В", "11 A", "11 Ә", "11 Б", "11 В"];

const paginationContent = {
  1: ["1 A", "1 Ә", "1 Б", "1 В"],
  2: ["2 A", "2 Ә", "2 Б", "2 В"],
  3: ["3 A", "3 Ә", "3 Б", "3 В"],
  4: ["4 A", "4 Ә", "4 Б", "4 В"],
  5: ["5 A", "5 Ә", "5 Б", "5 В"],
  6: ["6 A", "6 Ә", "6 Б", "6 В"],
  7: ["7 A", "7 Ә", "7 Б", "7 В"],
  8: ["8 A", "8 Ә", "8 Б", "8 В"],
  9: ["9 A", "9 Ә", "9 Б", "9 В"],
  10: ["10 A", "10 Ә", "10 Б", "10 В"],
  11: ["11 A", "11 Ә", "11 Б", "11 В"],
  "1quarter": allGrades,
  "2quarter": allGrades,
};
export default MenuPage;
