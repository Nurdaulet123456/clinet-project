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
          <Link href={`/teachers/1`}>{item}</Link>
        </TeacherItem>
      ))}
    </TeacherWrapper>
  );
};

const TeacherWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 0 30px;
  //align-items: center;
`;
const TeacherItem = styled.div`
  display: flex;
  width: 400px;
  //justify-content: center;
  //align-items: center;
  color: #1376FF;
  font-size: 18px;
`;
export default TeacherList;