import Image from "next/image";
import Link from "next/link";
import arrowRight from "../../assets/svg/arrowRight.svg";
import styles from "./styles";

const StartLink = () => {
  return (
    <>
      <div className="lg:text-2xl my-10 mb-0 w-max">
        <div className={styles.link}>
          <Link href="/">Let&apos;s talk</Link>
          <div className="m-1" />
          <Image src={arrowRight} alt="arrow right icon" />
        </div>
      </div>
    </>
  );
};

export default StartLink;
