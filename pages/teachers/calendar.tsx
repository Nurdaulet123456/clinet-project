import styled from "@emotion/styled";
import React, { FC } from "react";
import TeacherCalendar from "../../components/organ/TeacherCalendar";
import MainLayouts from "../../layouts/MainLayouts";
import { BackStyled } from "@/components/atoms/Button/Back";
import { ArrowLeftIcons } from "@/components/atoms/Icons";
import { useRouter } from "next/router";

interface CalendarProps {}

const Calendar: FC<CalendarProps> = (
  {
    // component props
  }
) => {
  const router = useRouter();

  return (
    <MainLayouts>
      <div
        className="menu_title"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        Сабақ кестесі
        <BackStyled onClick={() => router.push("/teachers")}>
          <ArrowLeftIcons />
        </BackStyled>
      </div>

      <CardsContainer>
        <TeacherCalendar />
      </CardsContainer>
    </MainLayouts>
  );
};
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.7rem;

  padding: 10px;

  background: white;

  border-radius: 10px;
`;

export default Calendar;
