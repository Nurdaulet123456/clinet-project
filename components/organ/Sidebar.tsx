import Link from "next/link";
import { useRouter } from "next/router";
import { QRIcons } from "../atoms/Icons";
import { FC, useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
interface IProps {
  lang?: string;
}

const Sidebar: FC<IProps> = ({ lang }) => {
  const swiper = useSwiper();

  return (
    <div className="sidebar sidebar-main">
      <div className="sidebar_top">KESTESI.KZ</div>
      <div className="sidebar_subtitle">
        {lang === "ru" && "Новости"} {lang === "kz" && "Жаңалықтар"}
      </div>

      <nav className="sidebar_content">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 15000,
            disableOnInteraction: false,
          }}
          style={{ width: "530px" }}
          breakpoints={{
            700: {
              slidesPerView: 1,
            },

            400: {
              slidesPerView: 1,
            },

            200: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <div className="sidebar_img" style={{ width: "480px" }}>
              <img className="img" src="/side.jpg" alt="" />

              <div className="sidebar_img-text">
                Каждый человек должен с самого детства заботиться о....
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="sidebar_img" style={{ width: "480px" }}>
              <img className="img" src="/side2.jpg" alt="" />
              <div className="sidebar_img-text">
                25 желтоқсан күні мектебімізде Ата-аналарды педагогикалық қолдау
                орталығының....
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="sidebar_img" style={{ width: "480px" }}>
              <img className="img" src="/side3.jpg" alt="" />
              <div className="sidebar_img-text">
                25 желтоқсан күні мектебімізде Ата-аналарды педагогикалық қолдау
                орталығының....
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="sidebar_img" style={{ width: "480px" }}>
              <img className="img" src="/side4.jpg" alt="" />
              <div className="sidebar_img-text">
                25 желтоқсан күні мектебімізде Ата-аналарды педагогикалық қолдау
                орталығының....
              </div>
            </div>
          </SwiperSlide>
          <ArrowButtonPrev />
          <ArrowButtonNext />
        </Swiper>

        <Link href={"/mektep/4"}>
          <div className="sidebar_button">
            <QRIcons />
            {lang === "ru" && "Открыть с устройства"}{" "}
            {lang === "kz" && "Телефоннан ашу мүмкіндігі"}
          </div>
        </Link>
      </nav>
    </div>
  );
};

const ArrowButtonNext = () => {
  const swiper = useSwiper();

  return (
    <button className="custom custom-next" onClick={() => swiper.slideNext()}>
      <img src="/icons/right_line.svg" alt="" />
    </button>
  );
};

const ArrowButtonPrev = () => {
  const swiper = useSwiper();

  return (
    <button className="custom custom-prev" onClick={() => swiper.slidePrev()}>
      <img src="/icons/left_line.svg" alt="" />
    </button>
  );
};

export default Sidebar;
