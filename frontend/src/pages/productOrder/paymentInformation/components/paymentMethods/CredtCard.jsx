import React from "react";
import { useFormContext } from "react-hook-form";
import OutlinedInput from "../../../../../components/inputs/text fields/OutlinedInput";

const CredtCard = () => {
  const { register } = useFormContext();

  return (
    <div className="space-y-4">
      <div>
        <OutlinedInput
          label="Card Number"
          type="text"
          placeholder="Enter Your Card Number"
          {...register("cardDetails.cardNumber", { required: true })}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <OutlinedInput
          label="Expiry Date"
          type="text"
          placeholder="MM/YY"
          {...register("cardDetails.expiryDate", { required: true })}
        />
        <OutlinedInput
          label="CVV"
          type="text"
          placeholder="XXX"
          {...register("cardDetails.cvv", { required: true })}
        />
      </div>

      <div className="pb-6">
        <OutlinedInput
          label="Card Holder's Name"
          type="text"
          placeholder="Enter Card Holder's Name"
          className="w-full"
          {...register("cardDetails.cardHolderName", { required: true })}
        />
      </div>
    </div>
  );
};

export default CredtCard;