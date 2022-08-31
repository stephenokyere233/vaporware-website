import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../../context";
import twitter from "../../assets/svg/twitter.svg";
import instagram from "../../assets/svg/instagram.svg";
import email from "../../assets/svg/email.svg";
import Button from "../Button";
import styles from "./styles";
import { proposalFormLink, socialLinks } from "../../content";

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
          {/* <div className={styles.link}>
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
          </div> */}
          <Button
            label="Let's work!"
            link={proposalFormLink}
          />
          <div className="flex items-center justify-center scale-125 mt-10">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Drawer;
