import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import usePrivateHook from "../../Hooks/usePrivateHook";

const Review = () => {
  const products = useLoaderData();
  const navigate = useNavigate();
  const {user} = usePrivateHook();
  const proId = (products._id)
  const name = (user.displayName);
  const email = (user.email)

  const submitForm = (e) => {
    e.preventDefault();
    const review = (e.target.review.value)
    axios.post(`https://server-coffee-alpha.vercel.app/reviews`,{proId,name,email,review})
    .then(res=>{
        if(res.data.acknowledged)
        {
            Swal.fire("Yeahh!", "Successfully Update product", "success");
            e.target.reset();
            navigate("/myCart")
        }
      })
  };

  return (
    <div>
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center font-serif text-[#CF8613] pt-10 ">
        {" "}
        Please Submit Review
      </h1>
      
        <form onSubmit={submitForm} className="flex flex-col justify-center gap-6 w-72 my-10 mx-auto">
          <textarea
          name="review"
            className="textarea textarea-bordered"
            placeholder="Give Review"
          ></textarea>
          <button
            className="btn bg-[#3B1E00] border-0 text-white font-bold btn-sm"
          >
            Submit
          </button>
        </form>
    
    </div>
  );
};

export default Review;
