import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutForm2";
import { loadStripe } from "@stripe/stripe-js";

function Payment({ setSelectedMenu }) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    // fetch("/config").then(async (r) => {
    //   const { publishableKey } = await r.json();
    // });
    setStripePromise(loadStripe("pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"));
  }, []);

  useEffect(() => {
    // fetch("/create-payment-intent", {
    //   method: "POST",
    //   body: JSON.stringify({}),
    // }).then(async (result) => {
    //   var { clientSecret } = await result.json();
    // });
    setClientSecret("pi_1MpzEVJAJfZb9HEB0CF6D4AK_secret_O7dJ36JsLgKwqm4ioa9i0XT2I");
  }, []);

  return (
    <>
      <div class="vasuki-section-name">
        <i class="fa-solid fa-left-long back" style={{"color": "#ffffff"}} onClick={() => setSelectedMenu(2)}></i>
        <span>Payments</span>
      </div>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;