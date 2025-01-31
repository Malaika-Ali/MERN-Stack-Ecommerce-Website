import OrderSummary from "../shippingInformation/components/OrderSummary"
import PaymentForm from "./components/PaymentForm"

function PaymentInformation() {
  return (
    <div className="min-h-screen lg:pt-16">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-16">
          <PaymentForm/>
          <OrderSummary/>
        </div>
      </div>
    </div>
  )
}


export default PaymentInformation
