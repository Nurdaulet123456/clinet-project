import styled from "@emotion/styled";
import React, { FC } from "react";
import StudentCalendar from "../../components/organ/StudentCalendar";
import TeacherCalendar from "../../components/organ/TeacherCalendar";
import MainLayouts from "../../layouts/MainLayouts";

interface CalendarProps {

}

const Calendar: FC<CalendarProps> = ({
  // component props
}) => {
  return (
    <MainLayouts>
      <div className="menu_title">Сабақ кестесі</div>

      <CardsContainer>
        <StudentCalendar />
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