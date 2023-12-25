import Link from "next/link";
import React, { FC } from "react";

interface INewsCard {
  id?: number;
  img: string;
  date: string;
  title: string;
}

interface IProps {
  newsCards?: INewsCard[];
}

const NewsCards: FC<IProps> = ({ newsCards }) => {
  return (
    <>
      {newsCards?.map((item) => (
        <div className="news-card">
          <img
            className="news-card_img"
            src={item.img}
            alt={item.title}
          />
          <div className="news-card_content">
            <span className="news-card_date">
              {item.date}
            </span>
            <span className="news-card_title">
              {item.title}
            </span>
            <Link href="/news/1" className="news-card_button">
              Әрі қарай
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default NewsCards;
