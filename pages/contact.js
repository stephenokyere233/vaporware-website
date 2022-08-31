// import Image from "next/image";
// import Link from "next/link";
// import Header from "../components/Header";
// import { socialLinks } from "../content";
// import Drawer from "../components/Drawer";
// import Button from "../components/Button";
// import MetaHead from "../components/Meta";

// const Contact = () => {
//   return (
//     <>
//       <MetaHead title="Vapourware Studios —— Contact" />
//       <Header />
//       <Drawer />
//       <main className="flex items-center justify-center flex-col h-[70vh]">
//
// <Button
//   label="Send us a proposal"
//   link="https://forms.gle/heFhEnhmQkuULVXr8"
// />
//         <div className="flex items-center justify-center scale-125 mt-10">
// <Link href={socialLinks.twitter} passHref>
//   <a target="_blank" className="p-4" rel="noopener noreferrer">
//     <div className={styles.socialIconLink}>
//       <Image src={twitter} alt="twitter icon" />
//     </div>
//   </a>
// </Link>
// <Link href={socialLinks.instagram} passHref>
//   <a target="_blank" className="p-4" rel="noopener noreferrer">
//     <div className={styles.socialIconLink}>
//       <Image src={instagram} alt="twitter icon" />
//     </div>
//   </a>
// </Link>
// <Link href={socialLinks.email} passHref>
//   <a target="_blank" className="p-4" rel="noopener noreferrer">
//     <div className={styles.socialIconLink}>
//       <Image src={email} alt="twitter icon" />
//     </div>
//   </a>
// </Link>
//         </div>
//         <div className="pointer" />
//       </main>
//     </>
//   );
// };

// const styles = {
//   link: `text-2xl font-meduim mb-6 font-medium hover:text-brand transition`,
//   socialIconLink: `cursor-pointer transition hover:opacity-80`,
// };

// export default Contact;

import MetaHead from "../components/Meta";
import Header from "../components/Header";
import Drawer from "../components/Drawer";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import twitter from "../assets/svg/twitter.svg";
import instagram from "../assets/svg/instagram.svg";
import email from "../assets/svg/email.svg";
import { proposalFormLink, socialLinks } from "../content";
import Button from "../components/Button";

const SocialIcons = () => {
  return (
    <>
      <div className="flex items-center flex-wrap">
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
    </>
  );
};

const Contact = () => {
  return (
    <>
      <MetaHead title="Vapourware Studios —— Contact" />
      <Header />
      <Drawer />
      <div className="pointer" />
      <main className="p-5 lg:p-0 sm:-mt-[100px] h-[80vh] flex flex-col items-center justify-center">
        <div className="flex flex-col sm:flex-row">
          <div className="flex-1 mb-10 sm:m-0">
            <h2 className="font-bold text-3xl underline_">Contact Us.</h2>
            <div className="-ml-5">
              <SocialIcons />
            </div>
          </div>
          <div className="flex-1">
            <p className={styles.p}>
              Interested in working with us on your next project? We&apos;d love
              to hear from you
            </p>
            <br />
            <Button label="Send us a proposal" link={proposalFormLink} />
            <p className="opacity-40 mt-20">
              &copy;{Date().substr(11, 4)} Vapourware Studios
            </p>
          </div>
        </div>

        {/* <div className="my-10">
          
        </div>
       */}

        {/* <div className="page-banner-img" />
        <div className={styles.contentWrapper}>
          <div className="lg:flex-1 mb-10">
            <h1 className={styles.title}>Who Are We?</h1>
          </div>
          <div className="lg:flex-1">
            <p className={styles.p}>
              We are a talented team of developers and designers specialized in
              creating elegant websites, mobile apps, and designs that promote
              your business, increase conversions and drive awareness.
            </p>
            <br />
            <p className={styles.p}>
              We build meaningful products and believe that great digital
              experiences come from a combination of technical skill and empathy
              for the people who will use them.
            </p>
          </div>
        </div> */}
        {/* <Footer /> */}
      </main>
    </>
  );
};

const styles = {
  p: `text-xl leading-8 font-medium`,
  title: `underline_ lg:text-6xl text-5xl font-bold`,
  contentWrapper: `max-w-7xl m-auto p-10 py-20 lg:px-0 font-medium lg:flex justify-evenly`,
};

export default Contact;
