import styled from "@emotion/styled";
import Link from "next/link";
import React, { FC } from "react";

interface IPagination {
  text: string;
  value: string;
}
interface IProps {
  pagination?: IPagination[];
}

const PaginationFlex: FC<IProps> = ({ pagination }) => {
  return (
    <PaginationWrapper>
      {pagination?.map((item) => (
        <Link
          href={`/schedule/${item.value}`}
          key={item.value}
        >
          <PaginationItem
            itemNumber={Number(item.value.length)}
            onClick={() => console.log(item)}
          >
            {item.text}
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

  min-width: 50px;
  height: 50px;
  padding: 20px;

  color: #1B447A;
  font-size: ${(props) => (props.itemNumber > 3 ? "16px" : "22px")};
  font-weight: 700;

  background: #ffffff;

  border-radius: 4px;
`;

const PaginationWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin-bottom: 40px;
`;

export default PaginationFlex;
