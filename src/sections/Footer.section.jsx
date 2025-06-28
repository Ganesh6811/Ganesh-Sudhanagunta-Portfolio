import { motion } from "motion/react";

const FooterSection = () => {
  return (
    <>
      {/* Footer section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="mt-[10vh] mx-[5vw] flex justify-center pb-6 md:pb-10">
          <p className="text-gray-400 text-base md:text-xl text-center">
            Design and build by Ganesh Sudhanagunta
          </p>
        </div>
      </motion.section>
    </>
  );
};

export default FooterSection;
