import { useParallax } from "react-scroll-parallax";
import styles from "./styles";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import scroll from "../../assets/svg/scroll.svg";
import Link from "next/link";

const Hero = () => {
  const { ref } = useParallax({ speed: 20 });
  return (
    <>
      <section className={styles.container}>
        <h1
          ref={ref}
          className="lg:text-9xl text-7xl max-w-5xl font-bold mb-8 text-center h-3/6"
        >
          Bring Your
          <div className="h-[140px] mt-3">
            <Typewriter
              options={{
                strings: ["Ideas", "Dreams", "Vision"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          To Life
        </h1>
        <Link href="#what-we-do">
          <div className="scroll-icon">
            <Image src={scroll} alt="scroll icon" />
          </div>
        </Link>
      </section>
    </>
  );
};

export default Hero;
