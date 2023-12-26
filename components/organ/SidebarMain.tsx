import Link from "next/link";
import { useRouter } from "next/router";

const SidebarMain = () => {
  const router = useRouter();

  return (
    <div className="sidebar-block">
      <Link href={"/"}>
        <div className="sidebar_t">KESTESI.KZ</div>
      </Link>

      <nav className="sidebar_links">
        {sidebar.map((item) => (
          <Link
            href={`/${item.link}`}
            key={item.id}
            className={`${
              router.asPath.split("/")[1] === item.link?.split("/")[0]
                ? "active"
                : ""
            }`}
          >
            <div>
              <img src={item.src + ".svg"} alt="" />
            </div>
            <div>{item.type}</div>
          </Link>
        ))}
      </nav>
    </div>
  );
};

interface IType {
  id?: number;
  type?: string;
  link?: string;
  src?: string;
}

const sidebar: IType[] = [
  {
    id: 1,
    type: "Сабақ кестесі",
    link: "schedule/1",
    src: "/icons/s1",
  },

  {
    id: 2,
    type: "Мұғалімдер",
    link: "teachers",
    src: "/icons/s2",
  },

  {
    id: 3,
    type: "Ас мәзірі",
    link: "menu",
    src: "/icons/s3",
  },

  {
    id: 4,
    type: "Үйірме",
    link: "kruzhok",
    src: "/icons/s4",
  },

  {
    id: 5,
    type: "Мектеп туралы",
    link: "mektep/1",
    src: "/icons/s5",
  },

  {
    id: 6,
    type: "Мектеп мақтаныштары",
    link: "prides/1",
    src: "/icons/s6",
  },

  {
    id: 7,
    type: "Жаңалықтар",
    link: "news",
    src: "/icons/s7",
  },

  {
    id: 8,
    type: "Мектеп картасы",
    link: "map",
    src: "/icons/s8",
  },
];

export default SidebarMain;
