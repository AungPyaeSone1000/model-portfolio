import { PROFILE } from "../constant";
import profilePic from "../assets/SwanHtarNinoProfile.jpg";
const HeroSection = () => {
  return (
    <>
      <div
        className="relative flex min-h-screen items-end justify-center"
        id="hero"
      >
        <img
          src={profilePic}
          alt={PROFILE.name}
          className="absolute inset-0 z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-70%"></div>
        <div className="z-20 mx-4 max-w-3xl pb-20">
          <h1 className="text-4xl font-semibold uppercase tracking-wide md:text-6xl">
            {PROFILE.name}
          </h1>
          <p className="pt-2 font-semibold text-xl">{PROFILE.info}</p>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
