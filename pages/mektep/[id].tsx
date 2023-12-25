import Tabs from "@/components/molecul/Tabs/Tabs";
import MektepFooter from "@/components/organ/MektepFooter";
import MektepHeader from "@/components/organ/MektepHeader";
import MektepT1 from "@/components/organ/MektepT/MektepT1";
import MainLayouts from "@/layouts/MainLayouts";

import styled from "@emotion/styled";

const MektepPage = () => {
  return (
    <MainLayouts>
      <div className="menu_title">Мектеп туралы</div>

      <TabsFlex>
        <Tabs link="mektep" tabs={tabs} />
      </TabsFlex>

      {/* <MektopBlock>
        <MektepHeader />
        <MektepFooter />
      </MektopBlock> */}

      <MektopBlock>
        <MektepT1 />
      </MektopBlock>
    </MainLayouts>
  );
};

const MektopBlock = styled.div`
    width: 100%;
    background-color: white;


    border-radius: 20px;

    color: #303972;

    margin-top: 2.4rem;
`

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
`;

export default MektepPage;
