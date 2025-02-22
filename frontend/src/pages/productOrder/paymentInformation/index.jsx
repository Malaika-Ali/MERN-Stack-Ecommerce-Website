import OrderSummary from "../shippingInformation/components/OrderSummary"
import PaymentForm from "./components/PaymentForm"

function PaymentInformation() {

  document.title="Payment Form"

  return (
    <div className="min-h-screen lg:pt-2">
      <div className="max-w-7xl mx-auto md:px-6 py-8">
        <div className="grid lg:grid-cols-[65%_35%] justify-center md:justify-center lg:justify-between">
          <PaymentForm/>
          <OrderSummary/>
        </div>
      </div>
    </div>
  )
}


export default PaymentInformation
