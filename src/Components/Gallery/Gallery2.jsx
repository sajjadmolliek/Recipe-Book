import imLogo from "../../assets/logo.png";

import gallery1 from "../../assets/gallery/glrysb1.jpg";
import gallery2 from "../../assets/gallery/glrysb2.jpg";

const Gallery2 = () => {
  return (
    <div className="w-[88%] mx-auto pb-10">
      <div className="md:w-[40rem] mx-auto pb-20">
        <p className="font-bold font-serif text-xl md:text-3xl text-[#E23139] text-center py-2">
          Unique Recipe Category
        </p>
        <div className="flex justify-center  items-center gap-x-4">
          <div className="w-[10rem] h-[1px] bg-[#E23139]" />
          <img className="w-[3rem]" src={imLogo} alt="imLogo" />
          <div className="w-[10rem] h-[1px] bg-[#E23139]" />
        </div>
      </div>
      <div className="flex flex-col lg:w-[80rem] mx-auto justify-center items-center lg:flex-row">
        <div className="flex-1 lg:mt-[4rem] relative w-[23rem] md:w-[40rem] lg:w-[70rem] h-80 md:h-[25rem] pb-4 border-2 lg:border-0 ">
          <div className=" ml-[4rem] absolute z-10 ">
            <img
              src={gallery2}
              alt="gallery"
              className=" md:w-[22rem] w-[12rem]  mt-[1rem]"
            />
            <img
              src={gallery1}
              alt="gallery"
              className=" md:w-[25rem]  md:h-[15rem] h-[9rem] md:-mt-[10rem] -mt-[4rem] md:ml-[10rem] ml-[4rem] w-[14rem] "
            />
          </div>

          <div className="mt-[4rem] z-20 opacity-40">
            <img
              src={gallery2}
              alt="gallery"
              className=" md:w-[22rem] w-[12rem] ml-[1rem] "
            />
            <img
              src={gallery1}
              alt="gallery"
              className=" md:w-[25rem]  md:h-[15rem] h-[9rem] md:-mt-[10rem] -mt-[4rem] md:ml-[10rem] ml-[5rem] w-[14rem] "
            />
          </div>
        </div>
        <div className=" flex flex-col w-[20rem] mt-[4rem] lg:mt-0 md:w-[40rem] lg:w-[50rem] items-end">
          <p className="text-2xl text-[white]  font-semibold md:text-5xl text-end md:w-[35rem] lg:w-[45rem] -mt-[4rem] mb-[3rem]">
            We believe this is the most helpful site for best cook. Try it for yourself
          </p>
          <p className=" md:text-3xl text-justify lg:ml-[12rem] text-white">
            Our roasts feature multiple underlying notes. We believe the
            unexpected can happen when good design and great recipe come
            together.
        
          </p>
          <p className="md:text-3xl text-[#E23139] text-justify lg:ml-[12rem] italic mt-6"> We also believe there is an outside in all of us to be
            found.</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery2;
