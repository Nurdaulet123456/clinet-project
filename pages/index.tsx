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
import { useEffect, useState } from "react";

const MainPage = () => {
  const router = useRouter();

  const [current, setCurrent] = useState<number>(0);

  const dispatch = useAppDispatch();
  const school = useTypedSelector((state) => state.schoolInfo.school);
  const [lang, setLang] = useState<string>("kz");

  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();
  const currentDayOfMonth = currentDate.getDate();
  var currentMonth = currentDate.getMonth();

  useEffect(() => {
    if (school) {
      dispatch(getSchoolThunk());
    }
  }, [dispatch]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent((prevCurrent) => {
        if (prevCurrent === 12) {
          return 0;
        } else {
          return prevCurrent + 1;
        }
      });
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <Sidebar lang={lang} />
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
              {lang === "ru" && daysOfWeek[dayOfWeek]}
              {lang === "kz" && daysOfWeekKZ[dayOfWeek]} {(lang === "kz" || lang === "ru") && <br />}
              {lang === "eng" && daysOfWeekEng[dayOfWeek]}{lang === "eng" && <br />} 
              {currentDayOfMonth} {lang === "ru" && months[currentMonth]}
              {lang === "kz" && monthsKZ[currentMonth]}
              {lang === "eng" && monthsEng[currentMonth]}
            </div>
            <div
              className="main_inner-block"
              style={{ display: "flex", alignItems: "center", gap: "2rem" }}
            >
              25 С <GradusIcons />
            </div>
            <div className="main_inner-block lang">
              <div
                className={`${lang === "kz" ? "active" : ""}`}
                onClick={() => setLang("kz")}
              >
                KZ
              </div>
              <div
                className={`${lang === "ru" ? "active" : ""}`}
                onClick={() => setLang("ru")}
              >
                RU
              </div>
              <div
                className={`${lang === "eng" ? "active" : ""}`}
                onClick={() => setLang("eng")}
              >
                EN
              </div>
            </div>
          </div>

          <div className="main_inner-school">
            {lang === "kz" && "Маяковский атындағы орта мектебі"}
            {lang === "ru" && "Средняя школа имени Маяковского"}
            {lang === "eng" && "Mayakovsky Secondary School"}
          </div>

          <div className="main_inner-grid">
            <div
              onClick={() => router.push("/schedule/1")}
              style={{
                backgroundColor: current === 2 ? "#5D6FC5" : "white",
                color: current === 2 ? "white" : "#5D6FC5",
                transition: "all .2s linear",
              }}
            >
              <RasIcons />
              {lang === "kz" && "Сабақ кестесі"}
              {lang === "ru" && "Расписание"}
              {lang === "eng" && "Schedule"}
            </div>
            <div
              onClick={() => router.push("/prides/1")}
              style={{
                backgroundColor: current === 4 ? "#5D6FC5" : "white",
                color: current === 4 ? "white" : "#5D6FC5",
                transition: "all .2s linear",
              }}
            >
              <GordSchoolIcons />
              {lang === "kz" && "Мектеп мақтаныштары"}
              {lang === "ru" && "Гордость школы"}
              {lang === "eng" && "Pride of the school"}
            </div>
            <div
              onClick={() => router.push("/menu")}
              style={{
                backgroundColor: current === 6 ? "#5D6FC5" : "white",
                color: current === 6 ? "white" : "#5D6FC5",
                transition: "all .2s linear",
              }}
            >
              <MenuIcons />
              {lang === "kz" && "Ас мәзірі"}
              {lang === "ru" && "Меню столовой"}
              {lang === "eng" && "Dining room menu"}
            </div>
            <div
              onClick={() => router.push("/mektep/1")}
              style={{
                backgroundColor: current === 8 ? "#5D6FC5" : "white",
                color: current === 8 ? "white" : "#5D6FC5",
                transition: "all .2s linear",
              }}
            >
              <SchoolIcons />
              {lang === "kz" && "Мектеп туралы"}
              {lang === "ru" && "О школе"}
              {lang === "eng" && "About the school"}
            </div>
            <div
              style={{
                backgroundColor: current === 10 ? "#5D6FC5" : "white",
                color: current === 10 ? "white" : "#5D6FC5",
                transition: "all .2s linear",
              }}
              onClick={() => router.push("/teachers")}
            >
              <PrepoIcons />
              {lang === "kz" && "Мұғалімдер"}
              {lang === "ru" && "Преподаватели"}
              {lang === "eng" && "Teachers"}
            </div>
            <div
              style={{
                backgroundColor: current === 12 ? "#5D6FC5" : "white",
                color: current === 12 ? "white" : "#5D6FC5",
                transition: "all .2s linear",
              }}
            >
              <MapIcons />
              {lang === "kz" && "Мектеп картасы"}
              {lang === "ru" && "Карта школы"}
              {lang === "eng" && "School Map"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const daysOfWeek = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

const daysOfWeekKZ = [
  "Жексенбі",
  "Дүйсенбі",
  "Сәрсенбі",
  "Сейсенбі",
  "Бейсенбі",
  "Жұма",
  "Сенбі",
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

var monthsKZ = [
  "Қаңтар",
  "Ақпан",
  "Наурыз",
  "Сәуір",
  "Мамыр",
  "Маусым",
  "Шілде",
  "Тамыз",
  "Қыркүйек",
  "Қазан",
  "Қараша",
  "Желтоқсан",
];

var monthsEng = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const daysOfWeekEng = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default MainPage;
