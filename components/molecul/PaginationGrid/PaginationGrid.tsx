import { IClass } from "@/types/assets.types";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface IPagination {
  text: string;
  value: string;
}

interface IProps {
  pagination?: IClass[];
}

const PaginationGrid: FC<IProps> = ({ pagination }) => {
  const router = useRouter();

  return (
    <PaginationWrapper>
      {pagination && pagination?.map((item) => (
        <Link href={`/schedule/${item.class_name}/calendar`} key={item.id}>
          <PaginationItem>{item.class_name}</PaginationItem>
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

  width: 100px;
  height: 100px;
  padding: 20px;

  color: #1b447a;
  font-size: 24px;
  font-weight: 400;

  background: #ffffff;

  border-radius: 4px;
`;

const PaginationWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin-bottom: 40px;
`;

export default PaginationGrid;
