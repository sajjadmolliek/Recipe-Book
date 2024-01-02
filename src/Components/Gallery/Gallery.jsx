import imLogo from "../../assets/icons/01.png"
import gallery from "../../assets/gallery/gallary.png"
import Gallery2 from "./Gallery2";
import Gallery3 from "./Gallery3";

const Gallery = () => {
  return (
    <div className=" pt-20 galleryBanner ">
      <Gallery2></Gallery2>
      <div className="w-[90%] mx-auto pb-10">
      {/* <div className="md:w-[40rem] mx-auto py-5 pb-10">
        <p className="font-bold font-serif text-xl md:text-3xl text-[#CF8613] text-center py-2">
        Photos of Coffee Palace
        </p>
        <div className="flex justify-center  items-center gap-x-4"><div className="w-[10rem] h-[1px] bg-[#CF8613]" />
        <img className="w-[3rem]" src={imLogo} alt="imLogo" />
        <div className="w-[10rem] h-[1px] bg-[#CF8613]" /></div>
      </div> */}
        {/* <img className="w-[100%] mx-auto" src={gallery} alt="gallery" /> */}
      </div>
      <Gallery3></Gallery3>
    </div>
  );
};

export default Gallery;
