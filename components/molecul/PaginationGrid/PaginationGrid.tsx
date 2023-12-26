import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface IPagination {
  text: string;
  value: string;
}

interface IProps {
  pagination?: any;
}

const PaginationGrid: FC<IProps> = ({ pagination }) => {
  const router = useRouter();

  return (
    <PaginationWrapper>
      {pagination[router?.asPath?.split("/")[2]]?.map((item: any) => (
        <Link
          href={`/schedule/calendar`}
          key={item}
        >
          <PaginationItem>
            {item}
          </PaginationItem>
        </Link>
      ))}
    </PaginationWrapper>
  );
};


const PaginationItem = styled.div<{
  itemNumber?: string | number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 80px;
  padding: 20px;

  color: #1B447A;
  font-size: 18px;
  font-weight: 400;

  background: #ffffff;

  border-radius: 4px;
`;

const PaginationWrapper = styled.div`
  //width: 50%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 3rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin-bottom: 40px;
`;

export default PaginationGrid;
