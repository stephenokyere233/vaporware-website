import Image from "next/image";
import Link from "next/link";
import twitter from "../../assets/svg/twitter.svg";
import instagram from "../../assets/svg/instagram.svg";
import email from "../../assets/svg/email.svg";
import { socialLinks } from "../../content";
import styles from "./styles";

const Footer = () => {
  return (
    <>
      <footer className="lg:p-20 py-20 p-10">
        <div className="flex items-center flex-wrap justify-between max-w-7xl m-auto">
          <p className="opacity-40">
            &copy;{Date().substr(11, 4)} Vapourware Studios
          </p>
          <div className="flex items-center -ml-3 lg:m-0">
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
      </footer>
    </>
  );
};

export default Footer;
