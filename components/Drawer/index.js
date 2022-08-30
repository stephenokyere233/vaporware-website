import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../../context";
import twitter from "../../assets/svg/twitter.svg";
import instagram from "../../assets/svg/instagram.svg";
import Button from "../Button";
import styles from "./styles";
import { socialLinks } from "../../content";

const Drawer = () => {
  const { showDrawer, setShowDrawer } = useContext(AppContext);

  if (!showDrawer) return;

  return (
    <>
      <section className={styles.drawerWrapper}>
        <div className={styles.drawer}>
          <span className={styles.close} onClick={() => setShowDrawer(false)}>
            &times;
          </span>
          <div className={styles.link}>
            <Link passHref href="/">
              HOME
            </Link>
          </div>
          <div className={styles.link}>
            <Link passHref href="/">
              ABOUT
            </Link>
          </div>
          <div className={styles.link}>
            <Link passHref href="/">
              PROJECTS
            </Link>
          </div>
          <div className={styles.link}>
            <Link passHref href="/">
              CAREERS
            </Link>
          </div>
          <div className={styles.link}>
            <Link passHref href="/">
              CONTACT
            </Link>
          </div>
          <Button
            label="Get started"
            link="https://forms.gle/heFhEnhmQkuULVXr8"
          />
          <div className="flex items-center justify-center scale-125 mt-10">
            <Link href={socialLinks.twitter} passHref>
              <div className={styles.socialIconLink}>
                <Image src={twitter} alt="twitter icon" />
              </div>
            </Link>
            <div className="m-3" />
            <Link href={socialLinks.instagram} passHref>
              <div className={styles.socialIconLink}>
                <Image src={instagram} alt="twitter icon" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Drawer;
