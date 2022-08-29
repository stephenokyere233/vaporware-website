import Image from "next/image";
import Link from "next/link";
import menu from "../../assets/svg/menu.svg";
import twitter from "../../assets/svg/twitter.svg";
import instagram from "../../assets/svg/instagram.svg";
import { socialLinks } from "../../content";
import Button from "../Button";
import styles from "./styles";
import { useContext } from "react";
import { AppContext } from "../../context";

const Header = () => {
  const { showDrawer, setShowDrawer } = useContext(AppContext);
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
        </nav>
        <div className="lg:flex items-center justify-center hidden">
          <Link href={socialLinks.twitter} passHref>
            <a target="_blank" rel="noopener noreferrer">
              <div className={styles.socialIconLink}>
                <Image src={twitter} alt="twitter icon" />
              </div>
            </a>
          </Link>
          <div className="m-3" />
          <Link href={socialLinks.instagram} passHref>
            <a target="_blank" rel="noopener noreferrer">
              <div className={styles.socialIconLink}>
                <Image src={instagram} alt="twitter icon" />
              </div>
            </a>
          </Link>
          <div className="m-3" />
          <div className="-mt-2">
            <Button
              label="Get started"
              link="https://forms.gle/heFhEnhmQkuULVXr8"
            />
          </div>
        </div>
        <div className={styles.menuIcon} onClick={() => setShowDrawer(true)}>
          <Image src={menu} alt="menu" width={50} height={50} />
        </div>
      </div>
    </header>
  );
};

export default Header;
