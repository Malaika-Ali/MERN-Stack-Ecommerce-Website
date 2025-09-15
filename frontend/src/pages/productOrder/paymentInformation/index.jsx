import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import OrderSummary from "../shippingInformation/components/OrderSummary"
import PaymentForm from "./components/PaymentForm"

// Loading publishable key from Stripe Dashboard (test mode first!)
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);


function PaymentInformation() {

  document.title="Payment Form"

  return (
    <div className="min-h-screen lg:pt-2">
      <div className="max-w-7xl mx-auto md:px-6 py-8">
        <div className="grid lg:grid-cols-[65%_35%] justify-center md:justify-center lg:justify-between">
          <Elements stripe={stripePromise}>
          <PaymentForm/>
          </Elements>
          <OrderSummary/>
        </div>
      </div>
    </div>
  )
}


export default PaymentInformation
