import styled from "@emotion/styled";

const MektepT2 = () => {
  return (
    <>
      <MektepT1Styled>
        <div className="mektop-gal">
          <img src="/gal.jpg" alt="" />
        </div>

        <div className="mektop-gal">
          <img src="/gal.jpg" alt="" />
        </div>

        <div className="mektop-gal">
          <img src="/gal.jpg" alt="" />
        </div>

        <div className="mektop-gal">
          <img src="/gal.jpg" alt="" />
        </div>

        <div className="mektop-gal">
          <img src="/gal.jpg" alt="" />
        </div>

        <div className="mektop-gal">
          <img src="/gal.jpg" alt="" />
        </div>

        <div className="mektop-gal">
          <img src="/gal.jpg" alt="" />
        </div>

        <div className="mektop-gal">
          <img src="/gal.jpg" alt="" />
        </div>

        <div className="mektop-gal">
          <img src="/gal.jpg" alt="" />
        </div>

        <div className="mektop-gal">
          <img src="/gal.jpg" alt="" />
        </div>

        <div className="mektop-gal">
          <img src="/gal.jpg" alt="" />
        </div>
      </MektepT1Styled>
    </>
  );
};

const MektepT1Styled = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-wrap: wrap;
  gap: 2.6rem;

  .mektop-gal {
    width: 150px;
    height: 150px;

    border: 8px solid #ffffff;
    border-radius: 5px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default MektepT2;
