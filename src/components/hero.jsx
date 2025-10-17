export const Hero = () => {
  return (
    <section>
      <div className=" flex h-[87vh] w-full max-w-7xl">

     
        <img
          src="/images/pin11.jpg"
          alt=""
          className=" object-cover w-full flipped-right"
        />
 
 <div className="flex flex-col absolute inset-0 justify-center border border-amber-500 w-1/2 items-center">
        <h1 className="flex text-2xl">Map your dream destinations</h1>

         <p>Pin every place you want to visit,
        add notes, and watch your travel wishlist come alive on the map.</p>
      </div>

    <div className="absolute inset-0 h-[80vh] w-full bg-gradient-to-r from-black/70 via-black/30 to-transparent" />


      </div>
    </section>
  );
};
