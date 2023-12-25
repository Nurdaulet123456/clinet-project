import styled from "@emotion/styled";

const MektepT1 = () => {
  return (
    <>
      <MektepT1Styled>
        <div className="mektept_info">
          <div>
            <img className="img" src="/mt.jpg" alt="" />
          </div>

          <div className="mektept_info-content">
            <div className="mektept_info-content_title">
              Маяковский атындағы орта мектебі
            </div>
            <div className="mektept_info-content_subtitle">
              Мекен-жай: Абай облысы, Жарма ауданы, Қалбатау ауылы, Ақтамберді
              жырау көшесі, 29 үй{" "}
            </div>

            <div className="mektept_info-content_title">
              Мектептің әлеуметтік төлқұжаты
            </div>

            <div className="mektep_info-content_flex">
              <div className="mektep_info-content-t1">
                <div>Жалпы бала саны</div>
                <div>
                  <img src="/icons/mt.svg" alt="" />
                  812
                </div>
              </div>
              <div className="mektep_info-content-t1">
                <div>Жалпы бала саны</div>
                <div>
                  <img src="/icons/mt.svg" alt="" />
                  812
                </div>
              </div>
              <div className="mektep_info-content-t1">
                <div>Жалпы бала саны</div>
                <div>
                  <img src="/icons/mt.svg" alt="" />
                  812
                </div>
              </div>
              <div className="mektep_info-content-t1">
                <div>Жалпы бала саны</div>
                <div>
                  <img src="/icons/mt.svg" alt="" />
                  812
                </div>
              </div>
              <div className="mektep_info-content-t1">
                <div>Жалпы бала саны</div>
                <div>
                  <img src="/icons/mt.svg" alt="" />
                  812
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mektep_p">
          <div>
            <div className="mektept_info-content_title">Мектеп төлқұжаты</div>
            <ul>
              <li>Оқыту тілі - қазақ, орыс</li>
              <li>Статусы - тірек мектеп</li>
              <li>Сыйымдылығы - 314</li>
              <li>Нақты оқитыны - 812</li>
            </ul>
          </div>
          <div>
            <div className="mektept_info-content_title">
              Жалпы сынып-комплект 41
            </div>

            <ul>
              <li>Оқыту тілі - қазақ, орыс</li>
              <li>Статусы - тірек мектеп</li>
              <li>Сыйымдылығы - 314</li>
              <li>Нақты оқитыны - 812</li>
            </ul>
          </div>
          <div>
            <div className="mektept_info-content_title">
              Педагогтардың жалпы саны - 92
            </div>

            <ul>
              <li>Оқыту тілі - қазақ, орыс</li>
              <li>Статусы - тірек мектеп</li>
              <li>Сыйымдылығы - 314</li>
              <li>Нақты оқитыны - 812</li>
            </ul>
          </div>
        </div>

        <div className="mektep_h">
          <div className="mektept_info-content_title">Мектеп тарихы</div>
          <p>
            Қазіргі таңдағы білім ғылымның қарыштап дамуы көз ілестірмей келе
            жатқан аса ауқымды процесс. Білім дамуының өзгерістері болашақ
            ұрпақтың жеке тұлға болып қалыптасуына бағытталған. Өзге елдермен
            иық тіресе алатын, бәсекеге қабілетті бола алатын мемлекет болу үшін
            білімнің іргесін берік қалау керек. Бұл ретте өскелең ұрпаққа сапалы
            білім, саналы тәрбие беруде өзіндік қолтаңбасын қалдырып келе жатқан
            киелі мекеннің төрінен орын алған қасиетті қара шаңырақ №20
            З.Шүкіров атындағы Бөген орта мектебі екенін айта кету керек. Тарихы
            әріден бастау алатын білім ұясы – халықтың сан ғасырлар бойы жинаған
            мәдениетін келешек ұрпаққа жеткізетін ұлттық тәлім - тәрбие
            ошағы.Аталмыш мектеп 1919 жылы Бөгенде бастауыш мектеп болып ашылды.
            Мектепті татар байы Темірхан Ярлыгаев өз қаржысымен ашты. Мектепке
            және алғашқы оқушыларға да керек құрал- жабдықтарды Темірхан әкеліп
            берді. Оның оқыған, сауатты баласы Атағұла (Атауолла) алғашқы оқу
            жылындағы жалғыз мұғалім болды.
          </p>
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
  }

  .mektept_info-content_title {
    font-size: 1.8rem;
    font-weight: 700;
    color: #1b447a;
    margin-bottom: 1rem;
  }

  .mektept_info-content_subtitle {
    color: #a098ae;

    margin-bottom: 2.4rem;
  }

  .mektep_info-content_flex {
    display: flex;
    flex-wrap: wrap;

    gap: 2rem;
  }

  .mektep_info-content-t1 {
    div {
      &:nth-child(1) {
        color: #a098ae;

        margin-bottom: 2rem;
      }

      &:nth-child(2) {
        display: flex;
        align-items: center;

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

    ul {
      li {
        display: flex;
        align-items: center;
        gap: 1.6rem;
        margin-bottom: 0.8rem;
        &::before {
          content: "";
          display: block;
          width: 8px;
          height: 8px;
          background-color: #a098ae;
          border-radius: 50%;
        }
      }
    }
  }
`;

export default MektepT1;
