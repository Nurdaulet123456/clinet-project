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
    background-color: #5699F2;
    padding: 3.5rem 2.8rem;
    border-top-left-radius : 20px;
    border-top-right-radius : 20px;

    display: flex;
    align-items : center;
    gap: 5rem;

    .mektep_avatar {
        width: 200px;
        height: 200px;
        border: 8px solid #FFFFFF;
        border-radius: 50%;
    }
    
    .meket_info-title {
        font-size: 2.4rem;
        color: white;
        font-weight: 700;

        margin-bottom: 1rem;
    }

    .meket_info-subtitle {
        color: white;
        font-size: 1.8rem;

        margin-bottom: 1.2rem;
    }
    
    .mektep_address {
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
