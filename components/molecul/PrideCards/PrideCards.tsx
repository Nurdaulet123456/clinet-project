import { FC } from "react";

interface IPrideCard {
  id?: number;
  img: string;
  fullName: string;
  title: string;
  grade: string;
}

interface IProps {
  prideCards?: IPrideCard[];
}

const PrideCards: FC<IProps> = ({ prideCards }) => {
  return (
    <>
      {prideCards?.map((item) => (
        <div className="pride-card">
          <img
            className="pride-card_img"
            src={item.img}
            alt={item.fullName}
          />
          <div className="pride-card_content">
            <span className="pride-card_name">
              {item.fullName}
            </span>
            <span className="pride-card_title">
              {item.title}
            </span>
            <div className="pride-card_breaker" />
            <span className="pride-card_grade">
              {item.grade}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default PrideCards;
