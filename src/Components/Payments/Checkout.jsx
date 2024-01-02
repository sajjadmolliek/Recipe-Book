import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import usePrivateHook from "../../Hooks/usePrivateHook";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { user } = usePrivateHook();
  const price = 50;
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    axios
      .post("https://server-coffee-alpha.vercel.app/create-payment-intent", { price })
      .then((res) => {
        setClientSecret(res?.data?.clientSecret);
      })
      .catch((error) => {
        console.error("Error fetching payment intent:", error);
        // Handle the error, e.g., set an error state or show a message to the user.
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      Swal.fire("Opps!", error.code, "error");
    }

    const { paymentIntent, error: cardError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Anonymous",
            email: user?.email || "anonymous@example.com",
          },
        },
      }
    );

    if (paymentIntent) {
      if (paymentIntent.status === "succeeded") {
        Swal.fire({
          title: "Congratulation!",
          text: "Successfully payment",
          icon: "success",
        });
        navigate("/")
      }
    } else {
      Swal.fire("Opps!", cardError.code, "error");
    }
  };

  return (
    <form className="border-2  p-20 border-blue-600" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div>
        <button
          className="btn w-full bg-blue-700 text-white mt-20"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay Salary
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
