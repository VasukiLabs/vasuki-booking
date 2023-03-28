import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutForm2";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { updateClientSecret } from "../../features/booking/bookingSlice";

function Payment({ setSelectedMenu }) {
  const [stripePromise, setStripePromise] = useState(null);
  // const [clientSecret, setClientSecret] = useState(null);
  const { clientSecret } = useSelector(state => state.booking);
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch("/config").then(async (r) => {
    //   const { publishableKey } = await r.json();
    // });
    setStripePromise(loadStripe("pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"));
  }, []);

  useEffect(() => {
    async function createPaymentIntent() {
      const clientSecret = await fetch('http://localhost:8080/generate-payment-intent', { method:'post', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ clientId: 'test', name: 'demo', address: {country: 'California, United states'}, amount: '20', desc: 'services charges', payment_method: 'pm_card_visa', currency: 'usd' }) });
      const result = await clientSecret.json();
      console.log('client secret: ', String(result.clientSecret))
      dispatch(updateClientSecret(String(result.clientSecret)))
      // setClientSecret(String(result.clientSecret));
    }
    // fetch("/create-payment-intent", {
    //   method: "POST",
    //   body: JSON.stringify({}),
    // }).then(async (result) => {
    //   var { clientSecret } = await result.json();
    // });
    createPaymentIntent()
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