import imLogo from "../../assets/logo.png";
import Gallery2 from "./Gallery2";
import Gallery3 from "./Gallery3";

const Gallery = () => {
  return (
    <div className=" pt-20 galleryBanner ">
      <Gallery2></Gallery2>
      <div className="w-[90%] mx-auto mb-20">
        <div className="md:w-[40rem] mx-auto py-5 pb-10">
          <p className="font-bold font-serif text-xl md:text-3xl text-[#E23139] text-center py-2">
            Photos of Recipe
          </p>
          <div className="flex justify-center  items-center gap-x-4">
            <div className="w-[10rem] h-[1px] bg-[#E23139]" />
            <img className="w-[3rem]" src={imLogo} alt="imLogo" />
            <div className="w-[10rem] h-[1px] bg-[#E23139]" />
          </div>
        </div>
        <div  className="md:grid md:grid-cols-4 md:grid-rows-3">
          <div data-aos="flip-right" className="md:col-span-2">
            <img className="md:w-[60rem] md:h-[20rem]" src="https://i.ibb.co/Xy13znY/Murgi.jpg" alt="Chicken" />
          </div>
          <div data-aos="flip-right">
            <img className="md:w-[30rem] md:h-[20rem]" src="https://i.ibb.co/DzZWNrM/Chainese.jpg" alt="Chainese" />
          </div>
          <div data-aos="flip-right" className="md:row-span-2">
            <img className="md:w-[30rem] md:h-[40rem]" src="https://i.ibb.co/zRDcpNV/brgr.jpg" alt="Barger" />
            
          </div>
          <div data-aos="flip-right" className="md:row-span-2">
            <img className="md:w-[30rem] md:h-[40rem]" src="https://i.ibb.co/5vFHh65/Ruti.jpg" alt="Ruti" />
          </div>
          <div data-aos="flip-right" className="md:col-span-2">
            <img className="md:w-[60rem] md:h-[20rem]"
              src="https://i.ibb.co/yWJhgKv/Traditional.jpg"
              alt="Traditional"
            />
          </div>
          <div data-aos="flip-right" className="md:col-span-2">
            <img className="md:w-[60rem] md:h-[20rem]" src="https://i.ibb.co/rZ8wdZV/Bangale.jpg" alt="Bangale" />
          </div>
          <div data-aos="flip-right">
            <img className="md:w-[30rem] md:h-[20rem]" src="https://i.ibb.co/L8PDHqG/Indian.jpg" alt="Indian" />
          </div>
        </div>
      </div>
      <Gallery3></Gallery3>
    </div>
  );
};

export default Gallery;
