import Image from "next/image";
import Link from "next/link";
import { projects } from "../../content";

const Projects = () => {
  return (
    <>
      <section>
        <ul className="grid grid-cols-1 lg:grid-cols-3">
          <div className="flex justify-center flex-col lg:p-20 p-10 py-20-">
            <h2 className="lg:text-8xl text-4xl font-bold afterline">
              Our Works
            </h2>
          </div>
          {projects.map((project, i) => {
            return (
              <Link key={i} passHref href={project.link}>
                <a target="_blank" rel="noopener noreferrer">
                  <li className="project-grid-item -mb-2 relative overflow-hidden ">
                    <div className="-mb-2">
                      <Image src={project.img} alt="..." />
                    </div>
                    <div className="project-grid-title w-full h-full absolute bottom-0 left-0 flex items-center justify-center">
                      <h2 className="font-bold text-2xl">{project.title}</h2>
                    </div>
                  </li>
                </a>
              </Link>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Projects;
