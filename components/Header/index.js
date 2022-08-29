import Image from "next/image";
import Link from "next/link";
import menu from "../../assets/svg/menu.svg";
import Button from "../Button";
import styles from "./styles";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <h2 className="text-2xl">Vapourware</h2>
        <nav className={styles.nav}>
          <p className={styles.navLink}>
            <Link href="#">Home</Link>
          </p>
          <p className={styles.navLink}>
            <Link href="#">About</Link>
          </p>
          <p className={styles.navLink}>
            <Link href="#">Projects</Link>
          </p>
          <p className={styles.navLink}>
            <Link href="#">Careers</Link>
          </p>
          <p className={styles.navLink}>
            <Link href="#">Contact</Link>
          </p>
          <div className="m-3" />
          <Button label="Get started" link="/" />
        </nav>
        <div className={styles.menuIcon}>
          <Image src={menu} alt="menu" width={50} height={50} />
        </div>
      </div>
    </header>
  );
};

export default Header;
