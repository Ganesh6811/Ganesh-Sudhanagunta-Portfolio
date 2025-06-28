import { motion } from "motion/react";
import { Tilt } from "react-tilt";
import { projects } from "../Contant Data/data";
import { MdArrowOutward } from "react-icons/md";

const ProjectSection = () => {
  return (
    <>
      {/* Projects section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        id="Projects"
      >
        <div className="mt-[25vh] mx-[5vw] flex flex-col gap-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#03e6ff]">My Projects</h1>
          </div>

          {/* Displaying projects */}
          <div className="flex gap-10 md:gap-20 flex-wrap justify-center">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Tilt
                  className="w-full max-w-[90vw] md:w-[350px] md:h-[415px] rounded-xl bg-[#1a1a2b]"
                  options={{ max: 45, scale: 1, speed: 450 }}
                >
                  <div className="flex flex-col gap-4 p-4 bg-[#1a1a2b] rounded-xl text-white h-full">
                    {/* Image */}
                    <div className="h-[180px] md:h-[200px]">
                      <img
                        src={project.imageUrl}
                        alt="Project"
                        className="rounded-xl w-full h-full object-cover"
                      />
                    </div>

                    {/* Text and button */}
                    <div className="flex flex-col gap-3">
                      <h2 className="text-xl md:text-2xl font-semibold">{project.title}</h2>
                      <p className="text-xs md:text-sm text-gray-300">{project.description}</p>

                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 text-white rounded-2xl bg-gradient-to-r from-[#71cbff] to-[#8000ff] text-xs md:text-sm font-medium w-fit"
                      >
                        Check Live
                        <MdArrowOutward className="text-white text-base md:text-lg" />
                      </a>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default ProjectSection;
