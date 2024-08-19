import { ABOUT } from "../constant";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container mx-auto" id="about">
      <motion.h2
        className="mt-40 text-center text-4xl font-semibold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        About
      </motion.h2>
      <motion.h3
        className="p-4 text-6xl uppercase lg:text-9xl"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        {ABOUT.text1}
      </motion.h3>
      <motion.p
        className="mr-24 pl-4 text-lg leading-lose"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        {ABOUT.text2}
      </motion.p>
    </div>
  );
};
export default About;
