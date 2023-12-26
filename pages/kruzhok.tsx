import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import MainLayouts from "@/layouts/MainLayouts";
import { getKruzhokInfoThunk } from "@/store/thunks/schoolInfo.thunk";
import { getWeekRussianDayString } from "@/utils/assets.utils";
import { useEffect } from "react";

const KruzhokPage = () => {
  const dispatch = useAppDispatch();
  const kruzhok = useTypedSelector((state) => state.schoolInfo.kruzhok);

  useEffect(() => {
    if (kruzhok) {
      dispatch(getKruzhokInfoThunk());
    }
  }, [dispatch]);

  console.log(kruzhok)

  return (
    <MainLayouts>
      <div className="menu_title">Үйірме</div>

      <div className="kruzhok_blocks">
        {kruzhok &&
          kruzhok.map((item, index) => (
            <div className="kruzhok_block">
              <div className="kruzhok_block-img">
                <img className="img" src={item.photo} alt={item.photo} />
              </div>

              <div className="kruzhok_block-content">
                <div className="kruzhok_title">{item.kruzhok_name}</div>
                <div className="kruzhok_subtitle">{item.teacher.full_name}</div>
                <div className="kruzhok_text">
                  Мақсаты: {item.purpose}
                </div>

                <div className="kruzhok_time">
                  {
                    item.lessons?.map((i, inx) => (
                        <p>{getWeekRussianDayString(i.week_day as string)}: {i?.start_end_time}</p>
                    ))
                  }
                </div>
              </div>
            </div>
          ))}
      </div>
    </MainLayouts>
  );
};

export default KruzhokPage;
