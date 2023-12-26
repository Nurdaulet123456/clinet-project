import { BurgerIcons } from "@/components/atoms/Icons";
import SidebarMain from "@/components/organ/SidebarMain";
import { ReactNode, useState } from "react";

interface ILayouts {
  children: ReactNode;
}

const MainLayouts = ({ children }: ILayouts) => {
    
    const [open, setOpen] = useState<boolean>(false)
    
  return (
    <div className="container">
      <div className="burger" onClick={() => setOpen(true)}>
        <BurgerIcons />
      </div>
      <SidebarMain open={open} setOpen={setOpen}/>

      <div className="main-block">
        <div className="main_inner">{children}</div>
      </div>
    </div>
  );
};

export default MainLayouts;
