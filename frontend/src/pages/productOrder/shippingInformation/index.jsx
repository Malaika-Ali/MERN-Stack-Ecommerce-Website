import ShippingForm from "./components/ShippingForm"
import OrderSummary from "./components/OrderSummary"

function ShippingInformtaion() {
  return (
    <div className="min-h-screen lg:pt-16">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-16">
          <ShippingForm />
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}


export default ShippingInformtaion
