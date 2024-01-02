import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./Checkout";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payments = () => {
  return (
    <div className="mt-20">
      
      <div className="w-[20rem] md:w-[30rem] mx-auto my-20 border ">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payments;