import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";

import RoundedButton from "../../../../components/buttons/RoundedButton";
import COD from "./paymentMethods/COD";
import CreditCard from "./paymentMethods/CreditCard";

import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import ImageModal from "../../../../components/modals/ImageModal";
import { applyTaxForCOD, removeTax } from "../../../../redux/features/cart/cartSlice";
import { useCreateOrderMutation } from '../../../../redux/features/order/orderApi'

export default function PaymentForm() {

  const [paymentMethod, setPaymentMethod] = useState("card");
  const location = useLocation();
  const { data: shippingInfo } = location.state;
  const products = useSelector((state) => state.cart.products);
  const grandTotal = useSelector((state) => state.cart.grandTotal);
  const [openModal, setOpenModal] = useState(false);
  const [createOrder, { isLoading, isSuccess, isError, error }] = useCreateOrderMutation();
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const methods = useForm();
  const { handleSubmit, watch, reset } = methods;

  // Watch the value of the radio button group
  const selectedPaymentMethod = watch("paymentMethod");

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    if (method === "COD") {
      dispatch(applyTaxForCOD());
    } else {
      dispatch(removeTax());
    }
  };

  // const handleForm = async (data) => {

  //   let paymentInfo = {};
  //   if (paymentMethod == "COD") {
  //     await createOrder({
  //       products,
  //       shippingInfo,
  //       paymentInfo: { paymentMethod },
  //       totalAmount: grandTotal,
  //     });
  //     return;

  //   } else if (paymentMethod == "card") {
  //     // paymentInfo = {
  //     //   paymentMethod,
  //     //   cardNumber: data.cardDetails.cardNumber,
  //     //   expiryDate: data.cardDetails.expiryDate,
  //     //   cvv: data.cardDetails.cvv,
  //     //   cardHolderName: data.cardDetails.cardHolderName,
  //     // };
  //     try {
  //       // 1. Ask backend to create a PaymentIntent
  //       const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/payment/payment-intent`, {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ amount: grandTotal }),
  //       });
  //       const { clientSecret } = await res.json();


  //       // 2. Confirm card payment with Stripe.js
  //       const cardElement = elements.getElement(CardElement);
  //       const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
  //         payment_method: { card: cardElement },
  //       });

  //       if (error) {
  //         console.error("Payment error:", error);
  //         return;
  //       }

  //       if (paymentIntent.status === "succeeded") {
  //         // 3. Save order in DB
  //         //       await createOrder({
  //         //         products,
  //         //         shippingInfo,
  //         //         paymentInfo: {
  //         //           paymentMethod: "card",
  //         //           stripePaymentId: paymentIntent.id,
  //         //         },
  //         //         totalAmount: grandTotal,
  //         //       });
  //         //     }
  //         //   } catch (err) {
  //         //     console.error("Error in payment flow:", err);
  //         //   }

  //         const newProducts = [];
  //         const optimizeProducts = () => {
  //           let newProduct = {};
  //           products.forEach((item) => {
  //             newProduct = {
  //               product: item.id || "",
  //               quantity: item.quantity,
  //               price: item.price,
  //             };
  //             newProducts.push(newProduct);
  //           });
  //         };
  //         optimizeProducts();


  //         console.log(paymentMethod)

  //         optimizeProducts();
  //         const orderData = {
  //           products: newProducts,
  //           shippingInfo,
  //           paymentInfo,
  //           totalAmount: grandTotal,
  //         };

  //         try {
  //           const order = await createOrder(orderData).unwrap();
  //           console.log(order);
  //           reset();
  //           setOpenModal(true);
  //         } catch (error) {
  //           console.log("Error while placing the order:", error);
  //         }
  //       }
  //     }
  //   }
  // }




  const handleForm = async (data) => {
    let paymentInfo = {};

    if (paymentMethod === "COD") {
      await createOrder({
        products,
        shippingInfo,
        paymentInfo: { paymentMethod },
        totalAmount: grandTotal,
      });
      return;
    }
    else if (paymentMethod === "card") {
      try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/payment/payment-intent`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: grandTotal }),
        });
        const { clientSecret } = await res.json();

        const cardElement = elements.getElement(CardElement);
        const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
          payment_method: { card: cardElement },
        });

        if (error) {
          console.error("Payment error:", error);
          return;
        }

        if (paymentIntent.status === "succeeded") {
          const newProducts = products.map((item) => ({
            product: item.id || "",
            quantity: item.quantity,
            price: item.price,
          }));

          const orderData = {
            products: newProducts,
            shippingInfo,
            paymentInfo: {
              paymentMethod: "card",
              stripePaymentId: paymentIntent.id,
            },
            totalAmount: grandTotal,
          };


          const order = await createOrder(orderData).unwrap();
          console.log(order);
          reset();
          setOpenModal(true);

        }
      } catch (err) {
        console.error("Error in payment flow:", err);
      }
    }
  };





  // const newProducts = [];
  // const optimizeProducts = () => {
  //   let newProduct = {};
  //   products.forEach((item) => {
  //     newProduct = {
  //       product: item.id || "",
  //       quantity: item.quantity,
  //       price: item.price,
  //     };
  //     newProducts.push(newProduct);
  //   });
  // };
  // optimizeProducts();


  // console.log(paymentMethod)

  // optimizeProducts();
  // const orderData = {
  //   products: newProducts,
  //   shippingInfo,
  //   paymentInfo,
  //   totalAmount: grandTotal,
  // };

  // try {
  //   const order = await createOrder(orderData).unwrap();
  //   console.log(order);
  //   reset();
  //   setOpenModal(true);
  // } catch (error) {
  //   console.log("Error while placing the order:", error.message);
  // }
  // };

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
                value="card"
                {...methods.register("paymentMethod", { required: true })}
                checked={paymentMethod === "card"}
                onChange={() => handlePaymentMethodChange("card")}
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
            {paymentMethod === "card" && <CreditCard />}
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