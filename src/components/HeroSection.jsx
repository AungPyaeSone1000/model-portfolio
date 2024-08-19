import { PROFILE } from "../constant";
import profilePic from "../assets/SwanHtarNinoProfile.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <>
      <div
        className="relative flex min-h-screen items-end justify-center"
        id="hero"
      >
        <motion.img
          src={profilePic}
          alt={PROFILE.name}
          className="absolute inset-0 z-10 h-full w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
        />
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-b 
        from-transparent from-60% to-black lg:from-70%"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
        ></motion.div>
        <motion.div
          className="z-20 mx-4 max-w-3xl pb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <h1 className="text-4xl font-semibold uppercase tracking-wide md:text-6xl">
            {PROFILE.name}
          </h1>
          <motion.p
            className="pt-2 font-semibold text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          >
            {PROFILE.info}
          </motion.p>
        </motion.div>
      </div>
    </>
  );
};
export default HeroSection;
