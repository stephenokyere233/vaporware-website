import Image from "next/image";
import menu from "../../assets/svg/menu.svg";
import styles from "./styles";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <h2 className="text-2xl">Vapourware</h2>
        <Image src={menu} alt="menu" width={50} height={50} />
      </div>
    </header>
  );
};

export default Header;
