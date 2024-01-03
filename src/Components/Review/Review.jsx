import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import usePrivateHook from "../../Hooks/usePrivateHook";
import useAxios from "../../Hooks/useAxios";

const Review = () => {
  const products = useLoaderData();
  const navigate = useNavigate();
  const axiosPublic = useAxios();
  const { user } = usePrivateHook();
  const proId = products._id;
  const name = user.displayName;
  const email = user.email;

  const submitForm = (e) => {
    e.preventDefault();
    const review = e.target.review.value;
    const rating = e.target.rating.value;
    axiosPublic.patch(`/addRecipeRating/${proId}?rating=${rating}`);
    axiosPublic.post(`/reviews`, { proId, name, email, review }).then((res) => {
      if (res.data.acknowledged) {
        Swal.fire("Yeahh!", "Successfully Update product", "success");
        e.target.reset();
        navigate(`/details/${proId}`);
      }
    });
  };

  return (
    <div>
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center font-serif text-[#e23139] pt-10 ">
        {" "}
        Please Submit Review
      </h1>

      <form
        onSubmit={submitForm}
        className="flex flex-col justify-center gap-6 w-72 my-10 mx-auto"
      >
        <label className="input-group md:w-full mx-auto lg:input-group-md">
          <span className="w-[10rem] bg-[#E23139] text-white font-bold">
            Rating
          </span>
          <input
            name="rating"
            type="number"
            placeholder="Know us your Rating"
            required
            className="input input-bordered w-full"
          />
        </label>
        <textarea
          name="review"
          required
          className="textarea textarea-bordered"
          placeholder="Share Your Comment"
        ></textarea>
        <button className="btn bg-[#e23139] border-0 text-white font-bold btn-sm">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Review;
