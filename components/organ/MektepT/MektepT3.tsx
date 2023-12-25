import styled from "@emotion/styled";

const MektepT3 = () => {
  return (
    <>
      <MektepT1Styled>
        <div className="flex">
          <div className="mektop-gal">
            <img src="/Qr.jpg" alt="" />

            <div>@shkola_mayak</div>
          </div>

          <div className="mektop-gal">
            <img src="/Qr.jpg" alt="" />

            <div>mayakovski_kalbatay.mektebi.kz</div>
          </div>

          <div className="mektop-gal">
            <img src="/Qr.jpg" alt="" />

            <div>mayak_1970</div>
          </div>

          <div className="mektop-gal">
            <img src="/Qr.jpg" alt="" />

            <div>Маяковский Ом Жарма ауданы</div>
          </div>
        </div>
        <div className="text">
          QR кодты сканерлеу арқылы мектептің ресми сайтына және әлеуметтік
          желілердегі парақшаларына өте аласыздар
        </div>
      </MektepT1Styled>
    </>
  );
};

const MektepT1Styled = styled.div`
  .flex {
    margin-top: 2rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2.6rem;

    .mektop-gal {
      width: 190px;
      height: 190px;

      border: 8px solid #ffffff;
      border-radius: 5px;

      img {
        width: 100%;
        height: 100%;
      }

      color: #ffffff;
      text-align: center;

      div {
        margin-top: 2rem;
      }
    }
  }

  .text {
    margin-top: 15rem;
    text-align: center;
    font-weight: 700;
    color: white;
    font-size: 3.2rem;
  }
`;

export default MektepT3;
