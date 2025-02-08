import COD from "./paymentMethods/COD"
import CredtCard from "./paymentMethods/CredtCard"
import Stripe from "./paymentMethods/Stripe"
import { useState } from "react"
import { useLocation } from "react-router-dom"

export default function PaymentForm() {

    const [paymentMethod, setPaymentMethod] = useState("credit-debit")
    const location=useLocation()
    const {data : shippingInfo}=location.state
    console.log(shippingInfo)

    const handlePaymentMethodChange = (method) => {
      setPaymentMethod(method)
    }

    return (
      <div className="w-full max-w-xl">
        <h2 className="text-2xl font-[500] mb-6">Payment Information</h2>
        <div className="mb-6 w-full flex flex-col items-start md:flex-row justify-between md:items-center">
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="radio"
            name="paymentMethod"
            value="credit-debit"
            checked={paymentMethod === "credit-debit"}
            onChange={() => handlePaymentMethodChange("credit-debit")}
            className="form-radio h-5 w-5 text-blue-600"
          />
          <span className="text-gray-900 font-medium">Credit / Debit Card</span>
        </label>
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="radio"
            name="paymentMethod"
            value="stripe"
            checked={paymentMethod === "stripe"}
            onChange={() => handlePaymentMethodChange("stripe")}
            className="form-radio h-5 w-5 text-blue-600"
          />
          <span className="text-gray-900 font-medium">Stripe</span>
        </label>
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="radio"
            name="paymentMethod"
            value="cash-on-delivery"
            checked={paymentMethod === "cash-on-delivery"}
            onChange={() => handlePaymentMethodChange("cash-on-delivery")}
            className="form-radio h-5 w-5 text-blue-600"
          />
          <span className="text-gray-900 font-medium">Cash on Delivery</span>
        </label>
      </div>
      <div className="mt-6">
        {paymentMethod === "credit-debit" && <CredtCard />}
        {paymentMethod === "stripe" && <Stripe />}
        {paymentMethod === "cash-on-delivery" && <COD />}
      </div>
      </div>
    )
  }
  
  