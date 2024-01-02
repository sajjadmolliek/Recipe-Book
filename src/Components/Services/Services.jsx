/* eslint-disable react/prop-types */
import "../../Layouts/banner.css";
import imLogo from "../../assets/logo.png"
import Cards from "./Cards";

const Services = ({ data }) => {
  return (
    <div className="serviceBanner pb-32">
      <div className="md:w-[40rem] mx-auto py-10 ">
        <p className="font-bold font-serif text-xl md:text-3xl text-[#E23139] text-center py-2">
        Our Recipe Category
        </p>
        <div className="flex justify-center  items-center gap-x-4"><div className="w-[10rem] h-[1px] bg-[#E23139]" />
        <img className="w-[3rem]" src={imLogo} alt="imLogo" />
        <div className="w-[10rem] h-[1px] bg-[#E23139]" /></div>
      </div>

      {/* card Sections */}
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-6">
          <Cards data={data}></Cards>
        </div>
      </div>
    </div>
  );
};

export default Services;
