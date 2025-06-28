import { Tilt } from "react-tilt";
import { motion } from "motion/react";
import { skills } from "../Contant Data/data.jsx";

const SkillSection = () => {
  return (
    <>
      {/* Skills section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        id="Skills"
      >
        <div className="flex flex-col gap-20 mt-[25vh] mx-[5vw]">
          <div className="px-[3vw]">
            <h1 className="text-4xl md:text-6xl font-bold text-[#03e6ff]">Skills</h1>
          </div>

          <div className="flex gap-10 flex-wrap mx-[5vw]">
            {skills.map((skill) => (
              <Tilt
                options={{ max: 45, scale: 1, speed: 450 }}
                key={skill.name}
              >
                <div className="group relative bg-[#1a1a2b] w-28 h-28 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-md hover:shadow-blue-500/30 transition duration-500">
                  
                  {/* Skill Name */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 z-20">
                    <p className="bg-[#1c1c31] text-white px-2 py-0.5 rounded-md text-xs md:text-sm shadow-lg">
                      {skill.name}
                    </p>
                  </div>

                  {/* Hover Circle Effect */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md group-hover:scale-150 group-hover:bg-white/20 transition-all duration-500 ease-in-out" />
                  </div>

                  {/* Skill Icon */}
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="relative z-10 w-3/5 h-3/5 object-contain mx-auto mt-6 md:mt-8 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default SkillSection;
