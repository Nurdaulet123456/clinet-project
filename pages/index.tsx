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

const MainPage = () => {
  return (
    <>
      <div className="container">
        <Sidebar />

        <div className="main">
          <div className="main_inner">
            <div className="main_inner-header">
              <div className="main_inner-block">17:30</div>
              <div className="main_inner-block" style={{ textAlign: "center" }}>
                Понедельник <br />
                20 ноября
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
              Средняя общеобразовательная школа №144 имени Сактапбергена
              Альжикова
            </div>

            <div className="main_inner-grid">
              <div>
                <RasIcons />
                Расписание
              </div>
              <div>
                <GordSchoolIcons />
                Гордость школы
              </div>
              <div>
                <MenuIcons />
                Меню
              </div>
              <div>
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
