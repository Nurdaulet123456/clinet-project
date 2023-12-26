import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import MainLayouts from "@/layouts/MainLayouts";
import { getMenuThunk } from "@/store/thunks/schoolInfo.thunk";
import { getWeekRussianDayString } from "@/utils/assets.utils";
import { useEffect } from "react";

const MenuPage = () => {
  const dispatch = useAppDispatch();
  const menu = useTypedSelector((state) => state.schoolInfo.menu);

  useEffect(() => {
    if (menu) {
      dispatch(getMenuThunk());
    }
  }, [dispatch]);

  return (
    <MainLayouts>
      <div className="menu_title">Ас мәзірі</div>

      <div className="menu_blocks">
        {menu &&
          menu.map((item, index) => (
            <div className="menu_block">
              <div className="menu_block-title">
                {getWeekRussianDayString(item?.week_day as string)}
              </div>
              <div className="menu_content">
                <div className="one">{item.food_name}</div>
                <div className="two">{item.food_sostav}</div>
                <div className="three">
                  Выход: {item.vihod_1} гр / {item.vihod_2} гр / {item.vihod_3}{" "}
                  гр
                </div>
              </div>
            </div>
          ))}
      </div>
    </MainLayouts>
  );
};

export default MenuPage;
