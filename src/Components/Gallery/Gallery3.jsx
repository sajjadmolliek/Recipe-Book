import imLogo from "../../assets/logo.png";
import imLogo1 from "../../assets/icons/cardamom.png";
import imLogo2 from "../../assets/icons/cinnamon.png";
import imLogo3 from "../../assets/icons/ginger.png";
import imLogo4 from "../../assets/icons/cloves.png";
import imLogo5 from "../../assets/icons/Jira.jpg";

const Gallery3 = () => {
  return (
    <div>
      <div className="md:w-[40rem] mx-auto pb-16">
        <p className="font-serif font-bold text-xl md:text-3xl text-[#E23139] text-center py-2">
          Some Main Equipments
        </p>
        <div className="flex justify-center  items-center gap-x-4">
          <div className="w-[10rem] h-[1px] bg-[#E23139]" />
          <img className="w-[3rem]" src={imLogo} alt="imLogo" />
          <div className="w-[10rem] h-[1px] bg-[#E23139]" />
        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-center items-center w-[95%] mx-auto pb-20">
        <div className="w-[13rem] mx-auto h-[20rem] pb-10 ">
          <div className="flex justify-center">
            <img className="w-[4rem] h-[5rem] rounded-3xl" src={imLogo1} alt="image" />
          </div>
          <h1 className="font-bold text-[white] text-center my-3 text-3xl">
            Coffee leaf
          </h1>
          <p className="text-center text-[#f7d3beaf] text-lg">
            Coffee-leaf tea is a herbal tea prepared from the leaves of the
            coffee plant (either Coffea robusta or Coffea arabica)
          </p>
        </div>
        <div className="w-[13rem] mx-auto h-[20rem] pb-10 ">
          <div className="flex justify-center">
            <img className="w-[4rem] h-[5rem] rounded-3xl" src={imLogo2} alt="image" />
          </div>
          <h1 className="font-bold text-[white] text-center my-3 text-3xl">
            Coffee been
          </h1>
          <p className="text-center text-[#f7d3beaf] text-lg">
            A coffee bean is a fruit from the Coffea plant and the source for
            coffee. It is the pip inside the red or purple fruit.
          </p>
        </div>
        <div className="w-[13rem] mx-auto h-[20rem] pb-10 ">
          <div className="flex justify-center">
            <img className="w-[4rem] h-[5rem] rounded-3xl" src={imLogo3} alt="image" />
          </div>
          <h1 className="font-bold text-[white] text-center my-3 text-3xl">
            Prepprepared
          </h1>
          <p className="text-center text-[#f7d3beaf] text-lg">
            Coffee is a beverage prepared from roasted coffee beans. Darkly
            colored, bitter, and slightly acidic
          </p>
        </div>
        <div className="w-[13rem] mx-auto h-[20rem] pb-10 ">
          <div className="flex justify-center">
            <img className="w-[4rem] h-[5rem] rounded-3xl" src={imLogo4} alt="image" />
          </div>
          <h1 className="font-bold text-[white] text-center my-3 text-3xl">
            Traitional
          </h1>
          <p className="text-center text-[#f7d3beaf] text-lg">
            The history of coffee dates back to centuries of old oral tradition
            in modern-day Ethiopia and Yemen.
          </p>
        </div>
        <div className="w-[13rem] mx-auto h-[20rem] pb-10 ">
          <div className="flex justify-center">
            <img className="w-[4rem] h-[5rem] rounded-3xl" src={imLogo5} alt="image" />
          </div>
          <h1 className="font-bold text-[white] text-center my-3 text-3xl">
            Test
          </h1>
          <p className="text-center text-[#f7d3beaf] text-lg">
            Fun trivia questions to test your knowledge of coffee, and challenge
            your preconceived notions about the industry.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery3;
