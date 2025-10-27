import { Button } from "./button";

export const Hero = () => {
  return (
    <section className="relative h-[88.5vh] w-full overflow-hidden">
      {/* Hero Image */}
      <img
        src="/images/pin11.jpg"
        alt="Travel"
        className="h-full w-full object-cover flipped-right"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-10 text-white max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Map your dream destinations.
        </h1>

        <p className="text-lg text-gray-200 mb-6">
          Pin every place you want to visit, add notes, and watch your travel wishlist come alive on the map.
        </p>

        <div className=" w-1/2 lg:w-1/4">
        <Button/>
        </div>
      </div>
    </section>
  );
};
