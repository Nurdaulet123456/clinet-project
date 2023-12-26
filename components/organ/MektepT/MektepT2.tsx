import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { getSchoolPhotosThunk } from "@/store/thunks/schoolInfo.thunk";
import styled from "@emotion/styled";
import { useEffect } from "react";

const MektepT2 = () => {
  const dispatch = useAppDispatch();
  const photos = useTypedSelector((state) => state.schoolInfo.schoolphotos);

  useEffect(() => {
    if (photos) {
      dispatch(getSchoolPhotosThunk());
    }
  }, [dispatch]);

  return (
    <>
      <MektepT1Styled>
        {photos &&
          photos.map((item, index) => (
            <div className="mektop-gal" key={item.id}>
              <img src={item.slider_photo} alt={item.slider_photo} />
            </div>
          ))}
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

      object-fit: cover;
    }
  }
`;

export default MektepT2;
