import imLogo from "../assets/logo.png"

const Banner = () => {
  return (
    <div className="banner flex justify-start items-center h-[40rem] -mt-20">
      <div className="text-center  p-[1rem] md:p-[3.5rem] mt-[7rem]">
        <p className="font-serif font-bold lg:text-8xl md:text-5xl text-4xl">Recipe Book</p>
        <div className="flex justify-center  items-center gap-x-4"><div className="w-[2rem] md:w-[10rem] h-[1px] bg-[#E23139]" />
        <img className="w-[2rem] md:w-[3rem]" src={imLogo} alt="imLogo" />
        <div className="w-[2rem] md:w-[10rem] h-[1px] bg-[#E23139]" /></div>
        <p className=" md:w-[38rem] mt-8 mb-4 italic text-xl text-justify">
        Embark on a culinary journey with our recipe book, where every page tells a flavorful story, and each recipe is a masterpiece waiting to be crafted in your kitchen.
        </p>
      
      <p className="text-start text-xl italic text-[white]">There’s a little love in every Recipe.....</p>
      </div>
    </div>
  );
};


export default Banner;
