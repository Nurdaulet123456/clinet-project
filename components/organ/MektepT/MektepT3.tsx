import {
  FaceBookIcons,
  InstaIcons,
  WebSiteIcons,
  YoutubeIcons,
} from "@/components/atoms/Icons";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { getSchoolSocialThunk } from "@/store/thunks/schoolInfo.thunk";
import styled from "@emotion/styled";
import Link from "next/link";
import QRCode from "qrcode.react";
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
                  <QRCode value={item.account_name as string} />
                </div>

                <Link href={"/"} className="i">
                  <div>
                    {item.type === "instagram" ? (
                      <div className="flex-web">
                        <InstaIcons />
                        <div>{"@" + item?.account_name?.split("/").pop()}</div>
                      </div>
                    ) : item.type === "facebook" ? (
                      <div className="flex-web">
                        <FaceBookIcons />
                        <div>{item.type}</div>
                      </div>
                    ) : item.type === "youtube" ? (
                      <div className="flex-web">
                        <YoutubeIcons />
                        <div>{item.type}</div>
                      </div>
                    ) : item.type === "website" ? (
                      <div className="flex-web">
                        <WebSiteIcons />
                        <div>{item?.account_name?.replace("https://", "")}</div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Link>
              </div>
            ))}
        </div>
        <div className="text">
          QR кодты сканерлеу арқылы мектептің ресми сайтына және <br />
          әлеуметтік желілердегі парақшаларына өте аласыздар
        </div>
      </MektepT1Styled>
    </>
  );
};

const MektepT1Styled = styled.div`
  margin-top: 4.7rem;

  .flex-web {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1.5rem;
    font-size: 2rem;

    svg {
      width: 50px;
      height: 50px;
    }
  }

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

    column-gap: 5rem;

    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
    }

    .mektop-gal {
      display: flex;
      flex-direction: column;

      width: 100%;
      max-width: 300px;

      .qr {
        width: 300px;
        height: 300px;

        border: 8px solid #ffffff;
        border-radius: 5px;

        margin-bottom: 1.6rem;

        img {
          width: 100%;
          height: 100%;
        }

        canvas {
          width: 100% !important;
          height: 100% !important;
        }
      }

      color: #ffffff;
      text-align: center;
    }
  }

  .text {
    margin-top: 16rem;
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
