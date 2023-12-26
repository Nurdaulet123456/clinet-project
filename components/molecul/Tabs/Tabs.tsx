import styled from "@emotion/styled";
import Link from "next/link";

import { useRouter } from "next/router";
import { FC } from "react";

interface ITabs {
  id?: number;
  type?: string;
}

interface IProps {
  tabs?: ITabs[];
  link?: string;
}

const Tabs: FC<IProps> = ({ tabs, link }) => {
  const router = useRouter();

  return (
    <>
      {tabs?.map((item) => (
        <Link href={link ? `/${link}/${item.id}` : ""} key={item.id}>
          <IdBlock
            background={
              router?.asPath?.split("/")[2] === String(item.id) ? "white" : ""
            }
            color={
              router?.asPath?.split("/")[2] === String(item.id) ? "#5699F2" : ""
            }
            border={
              router?.asPath?.split("/")[2] === String(item.id) ? "white" : ""
            }
          >
            {item.type}
          </IdBlock>
        </Link>
      ))}
    </>
  );
};

const IdBlock = styled.div<{
  background?: string;
  color?: string;
  border?: string;
}>`
  padding: 1rem 3rem;

  border: 1px solid #092c4c;
  border-radius: 66px;

  font-size: 1.6rem;
  font-weight: 500;
  color: #092c4c;

  cursor: pointer;

  transition: background-color 0.2s linear, color 0.2s linear,
    border-color 0.2s linear;

  background-color: ${(props) =>
    props.background ? props.background : "transparent"};
  color: ${(props) => (props.color ? props.color : "#FFFFFF")};
  border-color: ${(props) => (props.border ? props.border : "#FFFFFF")};

  width: auto;

  &:hover {
    background-color: white;
    color: #5699F2;
    border-color: white;
  }

  @media (max-width: 1024px) {
    width: 100%;
    min-width: 225px;

    text-align: center;
}
`;

export default Tabs;
