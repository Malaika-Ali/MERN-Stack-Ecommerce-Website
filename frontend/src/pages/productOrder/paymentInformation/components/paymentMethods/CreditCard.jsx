// import React from "react";
// import { useFormContext } from "react-hook-form";
// import OutlinedInput from "../../../../../components/inputs/text fields/OutlinedInput";

// const CreditCard = () => {
//   const {
//     register,
//     formState: { errors },
//   } = useFormContext();

//   return (
//     <div className="space-y-4">
//       <div>
//         <OutlinedInput
//           label="Card Number"
//           type="text"
//           placeholder="Enter Your Card Number"
//           className={`border ${errors.cardDetails?.cardNumber ? "border-red-500" : "border-gray-300"}`}
//           {...register("cardDetails.cardNumber", {
//             required: "Card number is required",
//             pattern: {
//               value: /^[0-9]{16,19}$/,
//               message: "Card number must be 16-19 digits",
//             },
//           })}
//         />
//         {errors.cardDetails?.cardNumber && (
//           <p className="text-red-500 text-sm">{errors.cardDetails.cardNumber.message}</p>
//         )}
//       </div>

//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <OutlinedInput
//             label="Expiry Date"
//             type="text"
//             placeholder="MM/YY"
//             className={`border ${errors.cardDetails?.expiryDate ? "border-red-500" : "border-gray-300"}`}
//             {...register("cardDetails.expiryDate", {
//               required: "Expiry date is required",
//               pattern: {
//                 value: /^(0[1-9]|1[0-2])\/\d{2}$/,
//                 message: "Invalid format (MM/YY)",
//               },
//             })}
//           />
//           {errors.cardDetails?.expiryDate && (
//             <p className="text-red-500 text-sm">{errors.cardDetails.expiryDate.message}</p>
//           )}
//         </div>

//         <div>
//           <OutlinedInput
//             label="CVV"
//             type="text"
//             placeholder="XXX"
//             className={`border ${errors.cardDetails?.cvv ? "border-red-500" : "border-gray-300"}`}
//             {...register("cardDetails.cvv", {
//               required: "CVV is required",
//               pattern: {
//                 value: /^[0-9]{3}$/,
//                 message: "CVV must be 3 digits",
//               },
//             })}
//           />
//           {errors.cardDetails?.cvv && (
//             <p className="text-red-500 text-sm">{errors.cardDetails.cvv.message}</p>
//           )}
//         </div>
//       </div>

//       <div className="pb-6">
//         <OutlinedInput
//           label="Card Holder's Name"
//           type="text"
//           placeholder="Enter Card Holder's Name"
//           className={`border w-full ${errors.cardDetails?.cardHolderName ? "border-red-500" : "border-gray-300"}`}
//           {...register("cardDetails.cardHolderName", {
//             required: "Card holder's name is required",
//             pattern: {
//               value: /^[A-Za-z\s]+$/,
//               message: "Only alphabets are allowed",
//             },
//           })}
//         />
//         {errors.cardDetails?.cardHolderName && (
//           <p className="text-red-500 text-sm">{errors.cardDetails.cardHolderName.message}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CreditCard;


import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CreditCard = () => {
  return (
    <div className="space-y-4 border p-4 rounded">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Card Details
      </label>
      <div className="p-2 border rounded bg-white">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": { color: "#aab7c4" },
              },
              invalid: { color: "#9e2146" },
            },
          }}
        />
      </div>
    </div>
  );
};

export default CreditCard;











