import { PROJECTS } from "../constant";
import Card from "../components/Card";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, staggerChildren: 0.7 },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1 },
  },
};

const Project = () => {
  return (
    <div id="projects">
      <motion.h2
        className="mt-20 text-center text-4xl font-semibold"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="flex flex-wrap justify-center py-8"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {PROJECTS.map((project, index) => {
          return (
            <motion.div key={index} variants={itemVariants}>
              <Card
                image={project.image}
                title={project.title}
                subtitle={project.subtitle}
                link="#"
              ></Card>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
export default Project;
