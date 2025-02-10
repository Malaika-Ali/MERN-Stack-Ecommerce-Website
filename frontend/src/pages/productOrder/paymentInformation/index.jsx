import OrderSummary from "../shippingInformation/components/OrderSummary"
import PaymentForm from "./components/PaymentForm"

function PaymentInformation() {
  return (
    <div className="min-h-screen lg:pt-8">
      <div className="max-w-7xl mx-auto md:px-6 py-8">
        <div className="grid md:grid-cols-[65%_35%] justify-center md:justify-between md:items-center">
          <PaymentForm/>
          <OrderSummary/>
        </div>
      </div>
    </div>
  )
}


export default PaymentInformation
