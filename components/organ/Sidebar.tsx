import Link from "next/link";
import { useRouter } from "next/router";
import { QRIcons } from "../atoms/Icons";

const Sidebar = () => {

  return (
    <div className="sidebar sidebar-main">
      <div className="sidebar_top">KESTESI.KZ</div>
      <div className="sidebar_subtitle">Новости</div>

      <nav className="sidebar_content">
        <div className="sidebar_img">
            <img className="img" src="/side.jpg" alt="" />
        </div>

        <div className="sidebar_button">
            <QRIcons />
            Открыть с устройства
        </div>
      </nav>
    </div>
  );
};
export default Sidebar;
