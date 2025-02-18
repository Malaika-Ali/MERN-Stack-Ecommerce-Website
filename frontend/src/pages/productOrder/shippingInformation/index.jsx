import ShippingForm from "./components/ShippingForm"
import OrderSummary from "./components/OrderSummary"

function ShippingInformtaion() {
  return (
    <div className="min-h-screen lg:pt-2">
      <div className="max-w-7xl mx-auto md:px-6 py-8">
        <div className="grid lg:grid-cols-[65%_35%] justify-center md:justify-center lg:justify-between lg:items-center">
          <ShippingForm />
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}


export default ShippingInformtaion
