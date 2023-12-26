import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { getNewsThunk } from "@/store/thunks/pride.thunk";
import Link from "next/link";
import React, { FC, useEffect } from "react";

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
  const dispatch = useAppDispatch();
  const news = useTypedSelector((state) => state.pride.news);

  useEffect(() => {
    if (news) {
      dispatch(getNewsThunk());
    }
  }, [dispatch]);

  return (
    <>
      {news
        ?.filter((newsItem) => newsItem?.photos!.length > 0)
        ?.map((item) => (
          <>
            <div className="pik"></div>
            <div className="news-card">
              <img
                className="news-card_img img"
                src={item?.photos![0]}
                alt={item?.photos![0]}
              />
              <div className="news-card_content">
                <span className="news-card_date">{item.date}</span>
                <span className="news-card_title">{item.text}</span>
                <Link href={`/news/${item.date}`} className="news-card_button">
                  Әрі қарай
                </Link>
              </div>
            </div>
          </>
        ))}
    </>
  );
};

export default NewsCards;
