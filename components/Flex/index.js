import { useParallax } from "react-scroll-parallax";
import Image from "next/image";
import img1 from "../../assets/1.png";
import StartLink from "../StartLink";
import styles from "./styles";

const Flex = (props) => {
  const { reverse, img, title, content, subtitle, imgAlt } = props;
  const { ref } = useParallax({ speed: 30 });

  if (!reverse)
    return (
      <>
        <section>
          <div className="lg:flex items-center justify-between">
            <div className="flex-1">
              <div className="lg:p-20 p-6 py-20" ref={ref}>
                <small className={styles.subtitle}>{subtitle}</small>
                <p className="lg:text-7xl text-4xl font-bold afterline">
                  {title}
                </p>
                <p className="mt-5 text-xl font-medium leading-8">{content}</p>
                <StartLink />
              </div>
            </div>
            <div className="flex-1">
              <Image src={img1} alt={imgAlt} />
            </div>
          </div>
        </section>
      </>
    );

  return (
    <>
      <section>
        <div className="flex lg:flex-row flex-col-reverse items-center justify-between">
          <div className="flex-1">
            <Image src={img1} alt={imgAlt} />
          </div>
          <div className="flex-1">
            <div className="lg:p-20 p-6 py-20" ref={ref}>
              <small className={styles.subtitle}>{subtitle}</small>
              <p className="lg:text-7xl text-4xl font-bold afterline">
                {title}
              </p>
              <p className="mt-5 text-xl font-medium leading-8">{content}</p>
              <StartLink />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Flex;
