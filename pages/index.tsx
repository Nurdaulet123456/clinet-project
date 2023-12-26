import {
  GordSchoolIcons,
  GradusIcons,
  MapIcons,
  MenuIcons,
  PrepoIcons,
  RasIcons,
  SchoolIcons,
} from "@/components/atoms/Icons";
import Sidebar from "@/components/organ/Sidebar";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { getSchoolThunk } from "@/store/thunks/schoolInfo.thunk";
import { useRouter } from "next/router";
import { useEffect } from "react";

const MainPage = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const school = useTypedSelector((state) => state.schoolInfo.school);

  const daysOfWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  var months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();
  const currentDayOfMonth = currentDate.getDate();
  var currentMonth = currentDate.getMonth();

  useEffect(() => {
    if (school) {
      dispatch(getSchoolThunk());
    }
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="main-kes">KESTESI.KZ</div>
        <div className="main">
          <div className="main_inner">
            <div className="main_inner-header" style={{ height: "auto" }}>
              <div className="main_inner-block">
                {new Date().getHours() < 10
                  ? `0${new Date().getHours()}`
                  : new Date().getHours()}
                :
                {new Date().getMinutes() < 10
                  ? `0${new Date().getMinutes()}`
                  : new Date().getMinutes()}
              </div>
              <div className="main_inner-block" style={{ textAlign: "center" }}>
                {daysOfWeek[dayOfWeek]} <br />
                {currentDayOfMonth} {months[currentMonth]}
              </div>
              <div
                className="main_inner-block"
                style={{ display: "flex", alignItems: "center", gap: "2rem" }}
              >
                25 С <GradusIcons />
              </div>
              <div className="main_inner-block lang">
                <div>KZ</div>
                <div>RU</div>
                <div>EN</div>
              </div>
            </div>

            <div className="main_inner-school">
              {
                school?.find((item) => item.url === "my.kestesi.kz/155")
                  ?.school_kz_name
              }
            </div>

            <div className="main_inner-grid">
              <div>
                <RasIcons />
                Расписание
              </div>
              <div onClick={() => router.push("/prides/1")}>
                <GordSchoolIcons />
                Гордость школы
              </div>
              <div onClick={() => router.push("/menu")}>
                <MenuIcons />
                Меню
              </div>
              <div onClick={() => router.push("/mektep/1")}>
                <SchoolIcons />О школе
              </div>
              <div>
                <PrepoIcons />
                Преподаватели
              </div>
              <div>
                <MapIcons />
                Карта школы
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
