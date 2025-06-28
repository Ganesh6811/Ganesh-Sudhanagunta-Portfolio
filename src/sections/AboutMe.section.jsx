import { motion } from "motion/react";
import { Tilt } from "react-tilt";
import { SlCloudDownload } from "react-icons/sl";

const AboutMeSection = () => {
    return (<>
        {/* About Me Section */}
        <motion.section
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            id='AboutMe'
        >
            <div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='flex flex-col md:flex-row justify-between gap-10 md:gap-30 mt-[20vh] md:mt-[25vh] mx-[5vw]'
            >
                {/* Left side Data */}
                <div className='flex flex-col gap-10 w-full md:w-[50%] px-[3vw]'>
                    <h1 className='text-4xl md:text-6xl font-bold text-[#03e6ff] '>About Me</h1>
                    <p className='text-base md:text-xl'>
                        Hi, I'm a full-stack developer specializing in building dynamic and scalable web applications from front to back. With a strong focus on clean, maintainable code and seamless user experiences,
                        I develop responsive interfaces and robust backend systems that perform across all devices and platforms.
                    </p>

                    <a
                        href="https://drive.google.com/file/d/1tuIiYBxF9cb9rgDJlO4YPW2G-8oWwbq3/view"
                        className='w-[55px] px-4 py-3 hover:cursor-pointer overflow-hidden bg-linear-to-r from-[#71cbff] to-[#8000ff] rounded-3xl transition-all hover:w-[170px] duration-300 ease-linear'
                    >
                        <div className='flex items-center gap-5'>
                            <span className='align-center'>
                                <SlCloudDownload className='w-6 h-6' />
                            </span>
                            <p className='font-semibold'>RESUME</p>
                        </div>
                    </a>
                </div>

                {/* Right Side Data */}
                <div className='flex justify-center md:justify-end mt-6 md:mt-0'>
                    <Tilt className='p-3 rounded-xl bg-[#1a1a2b] mr-0 md:mr-30' options={{ max: 45, scale: 1, speed: 450 }}>
                        <img
                            src='/portfolio_pic.JPG'
                            className='rounded-xl object-top w-[200px] h-[200px] md:w-100 md:h-100'
                        />
                    </Tilt>
                </div>
            </div>
        </motion.section>
    </>)
}

export default AboutMeSection;
