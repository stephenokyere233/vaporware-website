import { useContext } from "react";
import { socialLinks } from "../../content";
import { AppContext } from "../../context";
import Image from "next/image";
import Link from "next/link";
import menu from "../../assets/svg/menu.svg";
import twitter from "../../assets/svg/twitter.svg";
import instagram from "../../assets/svg/instagram.svg";
import email from "../../assets/svg/email.svg";
import Button from "../Button";
import styles from "./styles";
import Logo from "../Logo";

const Header = () => {
  const { setShowDrawer } = useContext(AppContext);
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Logo />
        {/* <nav className={styles.nav}>
          <div className={styles.navLink}>
            <Link href="#">Home</Link>
          </div>
          <div className={styles.navLink}>
            <Link href="#">About</Link>
          </div>
          <div className={styles.navLink}>
            <Link href="#">Projects</Link>
          </div>
          <div className={styles.navLink}>
            <Link href="#">Careers</Link>
          </div>
          <div className={styles.navLink}>
            <Link href="#">Contact</Link>
          </div>
        </nav> */}
        <div className="lg:flex items-center justify-center hidden">
          <Link href={socialLinks.twitter} passHref>
            <a target="_blank" className="p-4" rel="noopener noreferrer">
              <div className={styles.socialIconLink}>
                <Image src={twitter} alt="twitter icon" />
              </div>
            </a>
          </Link>
          <Link href={socialLinks.instagram} passHref>
            <a target="_blank" className="p-4" rel="noopener noreferrer">
              <div className={styles.socialIconLink}>
                <Image src={instagram} alt="twitter icon" />
              </div>
            </a>
          </Link>
          <Link href={socialLinks.email} passHref>
            <a target="_blank" className="p-4" rel="noopener noreferrer">
              <div className={styles.socialIconLink}>
                <Image src={email} alt="twitter icon" />
              </div>
            </a>
          </Link>
          <div className="m-3" />
          <div className="-mt-2">
            <Button
              label="Let&apos;s work!"
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
