import { isMobile } from "react-device-detect";
import { useParallax } from "react-scroll-parallax";
import Image from "next/image";
import img1 from "../../assets/1.png";
import StartLink from "../StartLink";
import styles from "./styles";

const Flex = (props) => {
  const { reverse, img, title, content, subtitle, imgAlt } = props;
  const { ref } = useParallax({ speed: 30 });
  // const { hRef } = useParallax({ speed: 40, translateX: ["-100px", "30px"] });

  if (!reverse)
    return (
      <>
        <section>
          <div className="lg:flex items-center justify-between">
            <div className="flex-1">
              {/* <Parallax translateX={["-100px", "30px"]}> */}
              <div className="lg:p-20 p-6 py-20">
                <small className={styles.subtitle}>{subtitle}</small>
                <p className="lg:text-7xl text-4xl font-bold afterline">
                  {title}
                </p>
                <p className="mt-5 text-xl font-medium leading-8">{content}</p>
                <StartLink />
              </div>
              {/* </Parallax> */}
            </div>
            <div className="flex-1" ref={ref}>
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
          <div className="flex-1" ref={ref}>
            <Image src={img1} alt={imgAlt} />
          </div>
          <div className="flex-1">
            <div className="lg:p-20 p-6 py-20">
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
