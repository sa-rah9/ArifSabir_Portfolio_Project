"use client";

import Image from "next/image";

const instrumenticons = [
  {
    image: "/assets/guitar.png",
  },
  {
    image: "/assets/piano.png",
  },
  {
    image: "/assets/tabla2.png",
  },
  {
    image: "/assets/flute.png",
  },
];

const Instruments = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-5">
      <div className="container mx-auto">
        <div className="flex justify-evenly">
          {instrumenticons.map((item, index) => (
            <div key={index}>
              <Image
                src={item.image}
                alt={`Instrument ${index}`}
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};  

export default Instruments;
