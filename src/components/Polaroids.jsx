import polaroid from "../assets/image.jpg";
import { POLAROIDS } from "../constant";
const Polaroids = () => {
  return (
    <div className="container mx-auto" id="polaroids">
      <h2 className="mb-12 mt-20 text-center text-4xl font-semibold">
        Polaroids
      </h2>
      <div className="mx-2 flex flex-col lg:flex-row rounded-xl bg-gradient-to-b from-zinc-900 to-zince-950 px-4 py-10 lg:px-20">
        <div className="flex items-center lg:basis-1/2">
          <img src={polaroid} alt="Nino's polaroid" className="w-50% lg:w-auto" />
        </div>
        <div className="text-md flex flex-col justify-center items-center lg:basis-1/2 space-y-6 p-9 ">
        {Object.entries(POLAROIDS).map(([key, value], index) => (
          <span key={index} className="py-1 border-b-2 border-yellow-200 font-semibold lg:text-xl">
            <strong>{key}:</strong> {value}
          </span>
        ))}
        </div>
      </div>
    </div>
  );
};
export default Polaroids;
