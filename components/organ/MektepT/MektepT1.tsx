import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { getSchoolPassportThunk } from "@/store/thunks/schoolInfo.thunk";
import styled from "@emotion/styled";
import { useEffect } from "react";

const MektepT1 = () => {
  const dispatch = useAppDispatch();
  const passport = useTypedSelector((state) => state.schoolInfo.schoolpassport);
  const sp = passport?.find((item) => item.school === 1);

  useEffect(() => {
    if (passport) {
      dispatch(getSchoolPassportThunk());
    }
  }, [dispatch]);

  return (
    <>
      <MektepT1Styled>
        <div className="mektept_info">
          <div>
            <img className="mektep-photo img" src={sp?.photo} alt="" />
            <div className="established">{sp?.established} жылы құрылды</div>
          </div>

          <div className="mektept_info-content">
            <div className="mektept_info-content_title">
              Маяковский атындағы орта мектебі
            </div>
            <div className="mektept_info-content_subtitle">
              Мекен-жай: {sp?.school_address}
            </div>

            <div className="mektept_info-content_title">
              Мектептің әлеуметтік төлқұжаты
            </div>

            <div className="mektep_info-content_flex">
              <div className="mektep_info-content-t1">
                <div>Жалпы бала саны</div>
                <div>
                  <img src="/icons/mt.svg" alt="" />
                  {sp?.number_of_students}
                </div>
              </div>
              <div className="mektep_info-content-t1">
                <div>Ұлдың саны</div>
                <div>
                  <img src="/icons/mt.svg" alt="" />
                  {sp?.ul_sany}
                </div>
              </div>
              <div className="mektep_info-content-t1">
                <div>Қыздың саны</div>
                <div>
                  <img src="/icons/mt.svg" alt="" />
                  {sp?.kiz_sany}
                </div>
              </div>
              <div className="mektep_info-content-t1">
                <div>Отбасы саны</div>
                <div>
                  <img src="/icons/mt.svg" alt="" />
                  {sp?.amount_of_family}
                </div>
              </div>
              <div className="mektep_info-content-t1">
                <div>Ата-ана саны</div>
                <div>
                  <img src="/icons/mt.svg" alt="" />
                  {sp?.amount_of_parents}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mektep_p">
          <div>
            <div className="mektept_info-content_title">Мектеп төлқұжаты</div>
            <ul>
              <li>Оқыту тілі - {sp?.school_lang}</li>
              <li>Статусы - {sp?.status}</li>
              <li>Сыйымдылығы - {sp?.vmestimost}</li>
              <li>Нақты оқитыны - {sp?.amount_of_children}</li>
            </ul>
          </div>
          <div>
            <div className="mektept_info-content_title">
              Жалпы сынып-комплект {sp?.number_of_classes}
            </div>

            <ul className="zhs">
              <li>
                даярлық сынып: <br />
                {sp?.dayarlyk_class_number} сынып, {sp?.dayarlyk_student_number}{" "}
                бала
              </li>
              <li>
                1-4 сынып-комплекті: <br />
                {sp?.number_of_1_4_classes} сынып, {sp?.number_of_1_4_students}{" "}
                бала
              </li>
              <li>
                5-9 сынып-комплекті: <br />
                {sp?.number_of_5_9_classes} сынып, {sp?.number_of_5_9_students}{" "}
                бала
              </li>
              <li>
                10-11 сынып-комплекті: <br />
                {sp?.number_of_10_11_classes} сынып,{" "}
                {sp?.number_of_10_11_students} бала
              </li>
            </ul>
          </div>
          <div>
            <div className="mektept_info-content_title">
              Педагогтардың жалпы саны - {sp?.all_pedagog_number}
            </div>

            <ul>
              <li>педагог шебер - {sp?.pedagog_sheber}</li>
              <li>педагог-зерттеуші - {sp?.pedagog_zertteushy}</li>
              <li>педагог-сарапшы - {sp?.pedagog_sarapshy}</li>
              <li>педагог-модератор - {sp?.pedagog_moderator}</li>
              <li>педагог-тағылымдамашы - {sp?.pedagog_stazher}</li>
              <li>Жоғары - {sp?.pedagog_zhogary}</li>
              <li>I санатты - {sp?.pedagog_1sanat}</li>
              <li>II санатты - {sp?.pedagog_2sanat}</li>
            </ul>
          </div>
        </div>

        <div className="mektep_h">
          <div className="mektept_info-content_title">Мектеп тарихы</div>
          <p>{sp?.school_history}</p>
        </div>
      </MektepT1Styled>
    </>
  );
};

const MektepT1Styled = styled.div`
  padding: 3.5rem 3.2rem;

  .mektept_info {
    display: flex;

    gap: 1.6rem;

    @media (max-width: 1024px) {
      display: block;
    }
  }

  .mektep_h {
    p{
    font-size: 2.4rem;
    color: #A098AE;
    font-weight: 400;
    }
  }

  .mektept_info-content_title {
    font-size: 2.4rem;
    font-weight: 700;
    color: #1b447a;
    margin-bottom: 1rem;

    @media (max-width: 1024px) {
      margin-top: 2rem;
    }
  }

  .mektep-photo {
    width: 620px;
    margin-right: 4.5rem;
  }

  .mektept_info-content_subtitle {
    color: #a098ae;
    font-size: 2rem;

    margin-bottom: 2.4rem;
  }

  .mektep_info-content_flex {
    display: flex;
    flex-wrap: wrap;

    column-gap: 7.5rem;
    row-gap: 2rem;
  }

  .mektep_info-content-t1 {
    width: 100%;
    max-width: 179px;
    div {
      &:nth-child(1) {
        color: #a098ae;
        font-size: 2rem;
        margin-bottom: 2rem;
      }

      &:nth-child(2) {
        display: flex;
        align-items: center;
        font-size: 2.4rem;
        gap: 1rem;
        color: #303972;
        font-weight: 700;
      }
    }
  }

  .mektep_p {
    display: flex;
    align-items: flex-start;

    justify-content: space-between;

    margin-top: 3.2rem;

    margin-bottom: 2rem;

    @media (max-width: 1024px) {
      display: block;
    }

    ul {
      width: 100%;
      max-width: 370px;
      li {
        display: flex;
        align-items: flex-start;
        gap: 1.6rem;
        margin-bottom: 0.8rem;
        font-size: 2.4rem;
        color: #a098ae;
        &::before {
          content: "";
          display: block;
          padding: 0.4rem;
          background-color: #a098ae;
          border-radius: 50%;
          margin-top: 1.2rem;
        }
      }
    }
  }

  .established {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;

    color: #a098ae;
    margin-top: 1.8rem;
  }
`;

export default MektepT1;
