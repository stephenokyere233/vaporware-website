import Image from "next/image";
import Link from "next/link";
import { projects } from "../../content";
import styles from "./styles";

const Projects = () => {
  return (
    <>
      <section>
        <ul className="grid-wrapper lg:columns-3 sm:columns-2">
          <li className="h-[400px] flex justify-center flex-col p-[20px] lg:p-[30px] bg-[#f1f1f111]">
            <h2 className="lg:text-5xl mb-10 text-4xl font-bold afterline">
              Our Works
            </h2>
            {/* <p className="leading-[33px] opacity-70">
              Here are some of the works we&apos;ve done.
            </p> */}
          </li>
          <li>
            <div id="grid_1" className="grid-item"></div>
            <div className={styles.gridText}>sample #1</div>
          </li>
          <li>
            <div id="grid_2" className="grid-item"></div>
            <div className={styles.gridText}>sample #1</div>
          </li>
          <li>
            <div id="grid_3" className="grid-item"></div>
            <div className={styles.gridText}>sample #1</div>
          </li>
          <li>
            <div id="grid_4" className="grid-item"></div>
            <div className={styles.gridText}>sample #1</div>
          </li>
          <li>
            <div id="grid_5" className="grid-item"></div>
            <div className={styles.gridText}>sample #1</div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Projects;
