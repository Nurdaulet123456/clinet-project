import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { getSchoolAdminThunk } from "@/store/thunks/schoolInfo.thunk";
import styled from "@emotion/styled";
import { useEffect } from "react";

const MektepFooter = () => {
  const dispatch = useAppDispatch();
  const admin = useTypedSelector((state) => state.schoolInfo.schooladmin);

  useEffect(() => {
    if (admin) {
      dispatch(getSchoolAdminThunk());
    }
  }, [dispatch]);

  console.log(admin);
  return (
    <>
      <div style={{ paddingBlock: "1.6rem" }}>
        {admin &&
          admin.map((item, index) => (
            <MektepFooterStyled key={item.id}>
              <div className="mektep_footer-info">
                <div className="mektep_footer-avatar">
                  <img
                    className="img"
                    src={item.administator_photo}
                    alt={item.administator_photo}
                  />
                </div>
                <div className="mektep_footer-title">
                  {item.administrator_name?.split(" ")[0]}
                </div>
              </div>
              <div className="mektep_footer-text">{item.position}</div>
              <div className="mektep_footer-phone">{item.phone_number}</div>
            </MektepFooterStyled>
          ))}
      </div>
    </>
  );
};

const MektepFooterStyled = styled.div`
  background-color: white;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  @media (max-width: 1024px) {
    border-radius: 20px;
  }

  .mektep_footer-title {
    font-size: 2.2rem;
  }

  padding: 0 2.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    display: block;
  }

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
    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
      border-radius: 50%;
    }
  }

  .mektep_footer-text,
  .mektep_footer-phone {
    font-size: 2.2rem;
    color: #a098ae;

    @media (max-width: 1024px) {
      font-size: 1.8rem;
    }
  }
  .mektep_footer-text {
    font-weight: 600;
    @media (max-width: 1024px) {
      margin-top: 1.8rem;
    }
  }

  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default MektepFooter;
