import styled from "@emotion/styled";

const MektepFooter = () => {
  return (
    <>
      <MektepFooterStyled>
        <div className="mektep_footer-info">
          <div className="mektep_footer-avatar"></div>
          <div className="mektep_footer-title">Искакова Тлеукеш Талғарқызы</div>
        </div>
        <div className="mektep_footer-text">
          Заместитель директора по учебной работе
        </div>
        <div className="mektep_footer-phone">+7 777 777 77 77</div>
      </MektepFooterStyled>
    </>
  );
};

const MektepFooterStyled = styled.div`
  background-color: white;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  padding: 3.5rem 2.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .mektep_footer-info {
    display: flex;
    align-items: center;
    gap: 2rem;

    font-size: 1.6rem;
    color: #303972;
    font-weight: 700;
  }

  .mektep_footer-avatar {
    width: 80px;
    height: 80px;

    border-radius: 50%;
    background-color: #5699f2;
  }

  .mektep_footer-text,
  .mektep_footer-phone {
    font-size: 1.6rem;
    color: #a098ae;
  }

  margin-bottom: 3rem;
`;

export default MektepFooter;
