import styled from "@emotion/styled";

const MektepHeader = () => {
  return (
    <MektepHeaderStyled>
      <div className="mektep_avatar">
        <div></div>
      </div>

      <div className="meket_info">
        <div className="meket_info-title">Искакова Тлеукеш Талғарқызы</div>
        <div className="meket_info-subtitle">Мектеп директоры</div>

        <div className="mektep_address">
          <div>
            <img src="/phone.svg" alt="" />
            +7 777 777 77 77
          </div>
          <div>
            <img src="/mail.svg" alt="" />
            shkol_mamay@mail.com
          </div>
        </div>
      </div>
    </MektepHeaderStyled>
  );
};

const MektepHeaderStyled = styled.div`
    background: url(/icons/r1.svg) top 30px right 75px no-repeat, url(/icons/r2.svg) top 152px right 211px no-repeat;
    background-color: #5699F2;
    padding: 3.5rem 2.8rem;
    border-top-left-radius : 20px;
    border-top-right-radius : 20px;

    display: flex;
    align-items : center;
    gap: 5rem;

    @media (max-width: 1024px) {
        display: block;
    }

    .mektep_avatar {
        width: 200px;
        height: 200px;
        border: 8px solid #FFFFFF;
        border-radius: 50%;

        @media (max-width: 1024px) {
            margin-bottom: 1.2rem;
        }
    }
    
    .meket_info-title {
        font-size: 3.6rem;
        color: white;
        font-weight: 600;

        margin-bottom: 1rem;

        @media (max-width: 1024px) {
            font-size: 1.6rem;
        }
    }

    .meket_info-subtitle {
        color: white;
        font-size: 2.4rem;

        margin-bottom: 1.2rem;

        @media (max-width: 1024px) {
            margin-bottom: 2.4rem;
        }
    }
    
    .mektep_address {
        font-size: 1.8rem;
        div {
            display: flex;
            align-items: center;

            gap: 1.6rem;

            color: white;

            margin-bottom: 1.2rem;
        }
    }
`;

export default MektepHeader;
