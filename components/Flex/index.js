import Image from "next/image";
import Link from "next/link";
import img1 from "../../assets/1.png";
import styles from "./styles";

const Flex = (props) => {
  const { reverse, img, title, content, subtitle } = props;
  if (!reverse)
    return (
      <>
        <section>
          <div className="lg:flex items-center justify-between">
            <div className="flex-1">
              <div className="lg:p-20 p-10 py-20">
                <small className={styles.subtitle}>{subtitle}</small>
                <p className="lg:text-7xl text-5xl font-bold afterline">{title}</p>
                <p className="mt-5 text-xl font-medium leading-8">{content}</p>
                <div className="border-b lg:text-2xl my-10 mb-0 w-max">
                  <p className={styles.link}>
                    <Link href="/">Let&apos;s talk</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <Image src={img1} alt="..." />
            </div>
          </div>
        </section>
      </>
    );

  return (
    <>
      <section>
        <div className="lg:flex items-center justify-between">
          <div className="flex-1">
            <Image src={img1} alt="..." />
          </div>
          <div className="flex-1">
            <div className="lg:p-20 p-10 py-20">
              <small className={styles.subtitle}>{subtitle}</small>
              <p className="lg:text-7xl text-5xl font-bold afterline">{title}</p>
              <p className="mt-5 text-xl font-medium leading-8">{content}</p>
              <div className="border-b lg:text-2xl my-10 mb-0 w-max">
                <p className={styles.link}>
                  <Link href="/">Let&apos;s talk</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Flex;
