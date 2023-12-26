import styled from "@emotion/styled";
import Link from "next/link";
import React, { FC } from "react";

interface TeacherListProps {
  teachersList?: string[];
}

const TeacherList: FC<TeacherListProps> = ({
  // component props
  teachersList,
}) => {
  return (
    <TeacherWrapper>
      {teachersList?.map((item) => (
        <TeacherItem>
          {/*{item === "Косаев Улан Ерланович" ? <Link href={`/teacher/1`}>{item}</Link> : item}*/}
          {item}
        </TeacherItem>
      ))}
    </TeacherWrapper>
  );
};

const TeacherWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  justify-content: space-between;
  padding: 0 30px;
  //align-items: center;
`;
const TeacherItem = styled.div`
  display: flex;
  //justify-content: center;
  //align-items: center;
  color: #1376FF;
  font-size: 24px;
`;
export default TeacherList;