import styled from "@emotion/styled";
import React, { useState } from "react";
import SearchInput from "../../molecul/SearchInput/SearchInput";
import TeacherList from "../../molecul/TeacherList/TeacherList";
import Keyboard from "./Keyboard";

const MenuPage = () => {
  const [value, setValue] = useState("");

  const [teachers, setTeachers] = useState([
    "Косаев Улан Ерланович",
    "Данаев Алишер Алишерович",
    "Болатбаев Амир Рамазанович",
    "Абдуллаева Айгерим Абдуллаевна",
    "Султанов Омар Абдуллаевич",
    "Шакарим Айдана Габитовна",
    "Хамзаева Айгерим Абдуллаевна",
    "Шакарим Айдана Габитовна",
    "Хамзаева Айгерим Абдуллаевна",
    "Шакарим Айдана Габитовна",
  ]);

  return (
    <>
      <div>
        <SearchInput value={value} />
        <div className="pride-card_breaker" />
        <TeacherList teachersList={teachers} />
      </div>

      <Keyboard setInputText={setValue} inputText={value} />
    </>
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

export default MenuPage;
