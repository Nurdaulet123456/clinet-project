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

  const groupByWeekDay = (data: any) => {
    const groupedData: any = {};

    data.forEach((item: any) => {
      const weekDay = item.week_day.toString();

      if (!groupedData[weekDay]) {
        groupedData[weekDay] = [];
      }

      groupedData[weekDay].push({
        food_name: item.food_name,
        food_reti: item.food_reti,
        food_sostav: item.food_sostav,
        vihod_1: item.vihod_1,
        vihod_2: item.vihod_2,
        vihod_3: item.vihod_3,
      });
    });

    return groupedData;
  };

  const groupMenu = groupByWeekDay(menu);

  return (
    <MainLayouts>
      <div className="menu_title">Ас мәзірі</div>

      <div className="menu_blocks">
        {Object.keys(groupMenu).map((item, index) => (
          <div className="menu_block" key={index + 1}>
            <div className="menu_block-title">
              {getWeekRussianDayString(item as string)}
            </div>
            {groupMenu[item].map((i: any, index: any) => (
              <div className="menu_content" key={i.id}>
                <div className="one">{i.food_name}</div>
                <div className="two">{i.food_sostav}</div>
                <div className="three">
                  Выход: {i.vihod_1} гр / {i.vihod_2} гр / {i.vihod_3} гр
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </MainLayouts>
  );
};

export default MenuPage;
