import Tabs from "@/components/molecul/Tabs/Tabs";
import MektepFooter from "@/components/organ/MektepFooter";
import MektepHeader from "@/components/organ/MektepHeader";
import MektepT1 from "@/components/organ/MektepT/MektepT1";
import MektepT2 from "@/components/organ/MektepT/MektepT2";
import MektepT3 from "@/components/organ/MektepT/MektepT3";
import useScroll from "@/hooks/useScroll";
import MainLayouts from "@/layouts/MainLayouts";

import styled from "@emotion/styled";
import { useRouter } from "next/router";

const MektepPage = () => {
  const router = useRouter();

  const { containerRef, handleTouchEnd, handleTouchMove, handleTouchStart } =
    useScroll();

  return (
    <MainLayouts>
      <div className="menu_title">Мектеп туралы</div>

     <PaddingInline>
     <TabsFlex
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        ref={containerRef}
      >
        <Tabs link="mektep" tabs={tabs} />
      </TabsFlex>

      {router.asPath.split("/").at(-1) === "1" && (
        <MektopBlock>
          <MektepHeader />
          <MektepFooter />
        </MektopBlock>
      )}

      {router.asPath.split("/").at(-1) === "2" && (
        <MektopBlock>
          <MektepT1 />
        </MektopBlock>
      )}

      {router.asPath.split("/").at(-1) === "3" && <MektepT2 />}

      {router.asPath.split("/").at(-1) === "4" && <MektepT3 />}
     </PaddingInline>
    </MainLayouts>
  );
};

const MektopBlock = styled.div`
  width: 100%;
  background-color: white;

  border-radius: 20px;

  color: #303972;

  margin-top: 2.4rem;


`;

const PaddingInline = styled.div`
@media (max-width: 1024px) {
    padding-inline: 1.2rem;
  }
`;

const tabs = [
  {
    id: 1,
    type: "Мектеп әкімшілігі",
  },

  {
    id: 2,
    type: "Мектеп төлқұжаты",
  },

  {
    id: 3,
    type: "Фото-суреттер",
  },

  {
    id: 4,
    type: "Әлеуметтік желілер",
  },
];

const TabsFlex = styled.div`
  display: flex;
  gap: 1.7rem;
  alignItems: center;
  overflow-x: auto;
  width: auto;
`;

export default MektepPage;
