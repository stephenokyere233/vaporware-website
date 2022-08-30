import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import twitter from "../assets/svg/twitter.svg";
import instagram from "../assets/svg/instagram.svg";
import email from "../assets/svg/email.svg";
import { socialLinks } from "../content";
import Drawer from "../components/Drawer";
import Button from "../components/Button";
import MetaHead from "../components/Meta";

const Contact = () => {
  return (
    <>
      <MetaHead title="Vapourware Studios —— Contact" />
      <Header />
      <Drawer />
      <main className="flex items-center justify-center flex-col h-[70vh]">
        <h2 className="font-bold mb-10 text-3xl">Let&apos;s get in touch</h2>
        <Button
          label="Send us a proposal"
          link="https://forms.gle/heFhEnhmQkuULVXr8"
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
        <div className="pointer" />
      </main>
    </>
  );
};

const styles = {
  link: `text-2xl font-meduim mb-6 font-medium hover:text-brand transition`,
  socialIconLink: `cursor-pointer transition hover:opacity-80`,
};

export default Contact;
