import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { getSchoolSocialThunk } from "@/store/thunks/schoolInfo.thunk";
import styled from "@emotion/styled";
import Link from "next/link";
import { useEffect } from "react";

const MektepT3 = () => {
  const dispatch = useAppDispatch();
  const social = useTypedSelector((state) => state.schoolInfo.schoolsocial);

  useEffect(() => {
    if (social) {
      dispatch(getSchoolSocialThunk());
    }
  }, [dispatch]);

  return (
    <>
      <MektepT1Styled>
        <div className="text2">
          QR кодты сканерлеу арқылы мектептің ресми сайтына және әлеуметтік
          желілердегі парақшаларына өте аласыздар
        </div>
        <div className="flex">
          {social &&
            social.map((item, index) => (
              <div className="mektop-gal" key={item.id}>
                <div className="qr">
                  <img className="img" src="/Qr.jpg" alt="" />
                </div>

                <Link href={"/"} className="i">
                  {item.account_name}
                </Link>
              </div>
            ))}
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
  .text2 {
    display: none;

    @media (max-width: 1024px) {
      display: block;

      margin-block: 4rem;
      text-align: center;
      font-weight: 700;
      color: white;
      font-size: 1.8rem;
  
    }
  }

  .flex {
    margin-top: 2rem;

    display: flex;
    flex-wrap: wrap;

    row-gap: 3rem;

    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
    }

    .mektop-gal {
      width: 33.33333%;

      display: flex;
      flex-direction: column;
      align-items: center;

      .qr {
        width: 190px;
        height: 190px;

        border: 8px solid #ffffff;
        border-radius: 5px;

        margin-bottom: 1.6rem;

        img {
          width: 100%;
          height: 100%;
        }
      }

      color: #ffffff;
      text-align: center;
    }
  }

  .text {
    margin-top: 6rem;
    text-align: center;
    font-weight: 700;
    color: white;
    font-size: 3.2rem;

    @media (max-width: 1024px) {
        display: none;
      }
  }
`;

export default MektepT3;
