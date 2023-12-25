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

            <div className="mektep_info-content-t">
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
    color: #1B447A;
    margin-bottom: 1rem;
  }

  .mektept_info-content_subtitle {
    
  }
`;

export default MektepT1;
