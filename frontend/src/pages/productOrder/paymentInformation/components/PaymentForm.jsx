import { useForm, FormProvider } from "react-hook-form";
import RoundedButton from "../../../../components/buttons/RoundedButton";
import COD from "./paymentMethods/COD";
import CreditCard from "./paymentMethods/CreditCard";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useCreateOrderMutation } from "../../../../redux/features/order/orderApi";
import ImageModal from "../../../../components/modals/ImageModal";
import { applyTaxForCOD, removeTax } from "../../../../redux/features/cart/cartSlice";
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export default function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState("credit-debit");
  const location = useLocation();
  const { data: shippingInfo } = location.state;
  const products = useSelector((state) => state.cart.products);
  const grandTotal = useSelector((state) => state.cart.grandTotal);
  const [openModal, setOpenModal] = useState(false);
  const [createOrder, { isLoading, isSuccess, isError, error }] = useCreateOrderMutation();
  const dispatch = useDispatch(); // Add dispatch
  const methods = useForm();
  const { handleSubmit, watch, reset } = methods;

  // Watch the value of the radio button group
  const selectedPaymentMethod = watch("paymentMethod");
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    if (method === "COD") {
      dispatch(applyTaxForCOD());
    } else {
      dispatch(removeTax());
    }
  };

  const handleForm = async (data) => {
    let paymentInfo = {};
    const stripe = await loadStripe(`${import.meta.env.VITE_STRIPE_KEY}`)
    if (paymentMethod === "COD") {
      paymentInfo = {
        paymentMethod,
      };
    }
    // else if (paymentMethod === "credit-debit") {
    //   paymentInfo = {
    //     paymentMethod,
    //     cardNumber: data.cardDetails.cardNumber,
    //     expiryDate: data.cardDetails.expiryDate,
    //     cvv: data.cardDetails.cvv,
    //     cardHolderName: data.cardDetails.cardHolderName,
    //   };
    // }
    else if (paymentMethod === "credit-debit") {
      const { paymentMethodId } = data.cardDetails;

      if (!paymentMethodId) {
        console.error("Payment method ID is missing");
        return;
      }

      // Confirm the payment on the server
      const { error, paymentIntent } = await fetch("/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: grandTotal * 100, // Convert to cents
          currency: "usd",
          paymentMethodId,
        }),
      }).then((res) => res.json());

      if (error) {
        console.error(error);
        return;
      }

      paymentInfo = {
        paymentMethod: "credit-debit",
        paymentMethodId,
        paymentIntentId: paymentIntent.id,
      };
    }



    const newProducts = [];
    const optimizeProducts = () => {
      products.forEach((item) => {
        const newProduct = {
          product: item.id || "",
          quantity: item.quantity,
          price: item.price,
        };

        // Add size only if the product belongs to specific categories
        if (item.category === "clothes" || item.category === "bags" || item.category === "footwear") {
          newProduct.size = item.size;
        }

        newProducts.push(newProduct);
      });
    };
    optimizeProducts();
    const orderData = {
      products: newProducts,
      shippingInfo,
      paymentInfo,
      totalAmount: grandTotal,
    };

    try {
      const order = await createOrder(orderData).unwrap();
      console.log(order);
      reset();
      setOpenModal(true);
    } catch (error) {
      console.log("Error while placing the order:", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleForm)}>
        <div className="w-full max-w-xl">
          <h2 className="text-2xl font-[500] mb-6">Payment Information</h2>
          <div className="mb-6 w-full flex flex-col items-start md:flex-row justify-between md:items-center">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="credit-debit"
                {...methods.register("paymentMethod", { required: true })}
                checked={paymentMethod === "credit-debit"}
                onChange={() => handlePaymentMethodChange("credit-debit")}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="text-gray-900 font-medium">Pay With Card</span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="COD"
                {...methods.register("paymentMethod", { required: true })}
                checked={paymentMethod === "COD"}
                onChange={() => handlePaymentMethodChange("COD")}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="text-gray-900 font-medium">Cash on Delivery</span>
            </label>
          </div>

          <div className="mt-6">
            {/* {paymentMethod === "credit-debit" && <CredtCard />} */}
            {paymentMethod === "credit-debit" && (
              <Elements stripe={stripePromise}>
                <CreditCard />
              </Elements>
            )}
            {paymentMethod === "COD" && <COD />}
          </div>

          <RoundedButton type="submit" className="mt-6 w-full">
            Confirm Order
          </RoundedButton>
        </div>
      </form>

      {openModal && (
        <ImageModal isOpen={openModal} onClose={() => setOpenModal(false)} />
      )}
    </FormProvider>
  );
}