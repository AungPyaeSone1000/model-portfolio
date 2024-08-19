import polaroid from "../assets/image.jpg";
import { POLAROIDS } from "../constant";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const Polaroids = () => {
  return (
    <div className="container mx-auto" id="polaroids">
      <motion.h2 className="mb-12 mt-20 text-center text-4xl font-semibold" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}>
        Polaroids
      </motion.h2>
      <motion.div
        className="mx-2 flex flex-col lg:flex-row rounded-xl bg-gradient-to-b 
      from-zinc-900 to-zince-950 px-4 py-10 lg:px-20"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex items-center lg:basis-1/2"
          variants={itemVariants}
        >
          <img
            src={polaroid}
            alt="Nino's polaroid"
            className="lg:w-auto"
          />
        </motion.div>
        <div
          className="text-md flex flex-col justify-center items-center lg:basis-1/2 space-y-6 p-9"
          variants={itemVariants}
        >
          {Object.entries(POLAROIDS).map(([key, value], index) => (
            <motion.span
              key={index}
              className="py-1 border-b-2 border-yellow-200 font-semibold lg:text-xl"
              variants={itemVariants}
            >
              <strong>{key}:</strong> {value}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
export default Polaroids;
