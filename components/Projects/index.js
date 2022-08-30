import Image from "next/image";
import Link from "next/link";
import img1 from "../../assets/1.png";
import { projects } from "../../content";

const Projects = () => {
  return (
    <>
      <section>
        <ul className="grid grid-cols-1 lg:grid-cols-3 -mt-[7px]">
          <div className="flex justify-center flex-col lg:p-20 p-10 py-20-">
            <h2 className="lg:text-8xl text-4xl font-bold afterline">
              Our Works
            </h2>
          </div>
          {projects.map((project, i) => {
            return (
              <li
                key={i}
                className="project-grid-item -mb-2 relative overflow-hidden lg:border-r-[12px] lg:border-r-black"
              >
                <Link passHref href={project.link}>
                  <a target="_blank" rel="noopener noreferrer">
                    <Image src={project.img} alt="..." />
                    <div className="project-grid-title w-full h-full absolute bottom-0 left-0 flex items-center justify-center">
                      <h2 className="font-bold text-2xl">{project.title}</h2>
                    </div>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Projects;
