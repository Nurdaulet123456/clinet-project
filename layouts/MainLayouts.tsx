import SidebarMain from "@/components/organ/SidebarMain";
import { ReactNode } from "react";

interface ILayouts {
  children: ReactNode;
}

const MainLayouts = ({ children }: ILayouts) => {
  return (
    <div className="container">
      <SidebarMain />

      <div className="main-block">
        <div className="main_inner">{children}</div>
      </div>
    </div>
  );
};

export default MainLayouts;
