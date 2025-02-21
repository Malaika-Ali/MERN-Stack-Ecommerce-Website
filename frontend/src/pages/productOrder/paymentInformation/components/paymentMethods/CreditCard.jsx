import React from "react";
import { useFormContext } from "react-hook-form";
import OutlinedInput from "../../../../../components/inputs/text fields/OutlinedInput";

const CreditCard = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4">
      <div>
        <OutlinedInput
          label="Card Number"
          type="text"
          placeholder="Enter Your Card Number"
          className={`border ${errors.cardDetails?.cardNumber ? "border-red-500" : "border-gray-300"}`}
          {...register("cardDetails.cardNumber", {
            required: "Card number is required",
            pattern: {
              value: /^[0-9]{16,19}$/,
              message: "Card number must be 16-19 digits",
            },
          })}
        />
        {errors.cardDetails?.cardNumber && (
          <p className="text-red-500 text-sm">{errors.cardDetails.cardNumber.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <OutlinedInput
            label="Expiry Date"
            type="text"
            placeholder="MM/YY"
            className={`border ${errors.cardDetails?.expiryDate ? "border-red-500" : "border-gray-300"}`}
            {...register("cardDetails.expiryDate", {
              required: "Expiry date is required",
              pattern: {
                value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                message: "Invalid format (MM/YY)",
              },
            })}
          />
          {errors.cardDetails?.expiryDate && (
            <p className="text-red-500 text-sm">{errors.cardDetails.expiryDate.message}</p>
          )}
        </div>

        <div>
          <OutlinedInput
            label="CVV"
            type="text"
            placeholder="XXX"
            className={`border ${errors.cardDetails?.cvv ? "border-red-500" : "border-gray-300"}`}
            {...register("cardDetails.cvv", {
              required: "CVV is required",
              pattern: {
                value: /^[0-9]{3}$/,
                message: "CVV must be 3 digits",
              },
            })}
          />
          {errors.cardDetails?.cvv && (
            <p className="text-red-500 text-sm">{errors.cardDetails.cvv.message}</p>
          )}
        </div>
      </div>

      <div className="pb-6">
        <OutlinedInput
          label="Card Holder's Name"
          type="text"
          placeholder="Enter Card Holder's Name"
          className={`border w-full ${errors.cardDetails?.cardHolderName ? "border-red-500" : "border-gray-300"}`}
          {...register("cardDetails.cardHolderName", {
            required: "Card holder's name is required",
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Only alphabets are allowed",
            },
          })}
        />
        {errors.cardDetails?.cardHolderName && (
          <p className="text-red-500 text-sm">{errors.cardDetails.cardHolderName.message}</p>
        )}
      </div>
    </div>
  );
};

export default CreditCard;













// import React from "react";
// import { useFormContext } from "react-hook-form";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// const CreditCard = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const { setValue, formState: { errors } } = useFormContext();

//   const handleCardChange = (event) => {
//     if (event.error) {
//       console.error(event.error.message);
//     }
//   };

//   const handleCardSubmit = async () => {
//     if (!stripe || !elements) {
//       return;
//     }

//     const cardElement = elements.getElement(CardElement);

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: cardElement,
//     });

//     if (error) {
//       console.error(error.message);
//       return;
//     }

//     setValue("cardDetails.paymentMethodId", paymentMethod.id, { shouldValidate: true });
//   };

//   return (
//     <div className="space-y-4">
//       <div>
//         <label className="block text-sm mb-1.5 px-2">Card Details</label>
//         <div 
//           className={`w-full px-4 py-2.5 border ${
//             errors.cardDetails?.paymentMethodId ? "border-red-500" : "border-gray-300"
//           } rounded-full text-sm placeholder:text-gray-400 transition-all duration-400 ease-linear`}
//         >
//           <CardElement
//             options={{
//               style: {
//                 base: {
//                   fontSize: "16px",
//                   color: "#424770",
//                   fontFamily: "'Inter', sans-serif",
//                   "::placeholder": {
//                     color: "#aab7c4",
//                   },
//                 },
//                 invalid: {
//                   color: "#9e2146",
//                 },
//               },
//             }}
//             onChange={handleCardChange}
//           />
//         </div>
//         {errors.cardDetails?.paymentMethodId && (
//           <p className="text-red-500 text-sm mt-1 px-2">Payment method is required</p>
//         )}
//       </div>

//       <button
//         type="button"
//         onClick={handleCardSubmit}
//         className="bg-blue-600 text-white px-4 py-2 rounded-full transition-all duration-300 hover:bg-blue-700"
//       >
//         Save Card Details
//       </button>
//     </div>
//   );
// };

// export default CreditCard;

