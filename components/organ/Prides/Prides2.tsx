import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { getSchoolOnerThunk } from "@/store/thunks/pride.thunk";
import { FC, useEffect } from "react";

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

const PrideCards2: FC<IProps> = ({ prideCards }) => {
  const dispatch = useAppDispatch();
  const oner = useTypedSelector((state) => state.pride.oner);

  useEffect(() => {
    if (oner) {
      dispatch(getSchoolOnerThunk());
    }
  }, [dispatch]);

  return (
    <>
      {oner &&
        oner?.map((item) => (
          <div className="pride-card" key={item.id}>
            <img
              className="pride-card_img img"
              src={item.photo}
              alt={item.fullname}
            />
            <div className="pride-card_content">
              <span className="pride-card_name">{item.fullname}</span>
              <span className="pride-card_title">{item.student_success}</span>
              <div className="pride-card_breaker" />
              <span className="pride-card_grade">
                {item.classl ? item.classl : "7A"}
              </span>
            </div>
          </div>
        ))}
    </>
  );
};

export default PrideCards2;
