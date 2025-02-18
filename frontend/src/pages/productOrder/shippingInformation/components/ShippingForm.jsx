import { useNavigate } from "react-router-dom";
import RoundedButton from "../../../../components/buttons/RoundedButton";
import OutlinedDropDown from "../../../../components/inputs/drop downs/OutlinedDropDown";
import OutlinedInput from "../../../../components/inputs/text fields/OutlinedInput";
import { useForm } from "react-hook-form";

export default function ShippingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleForm = (data) => {
    navigate("/payment-information", { state: { data } });
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <div className="w-full max-w-xl px-4 md:px-0">
        <h2 className="text-2xl font-[500] mb-6">Shipping Information</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <OutlinedInput
                label="Name"
                type="text"
                placeholder="Enter Your Name"
                className={`border ${errors.name ? "border-red-500" : "border-black-color"}`}
                {...register("name", {
                  required: "Name is required",
                  pattern: {
                    value: /^[A-Za-z\s]+$/, // Only alphabets and spaces allowed
                    message: "Only alphabets are allowed",
                  },
                })}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div>
              <OutlinedInput
                label="State"
                type="text"
                placeholder="Enter Your State"
                className={`border ${errors.state ? "border-red-500" : "border-black-color"}`}
                {...register("state", {
                  required: "State is required",
                  pattern: {
                    value: /^[A-Za-z\s]+$/, // Only alphabets and spaces allowed
                    message: "Only alphabets are allowed",
                  },
                })}
              />
              {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <OutlinedInput
                label="Email"
                type="email"
                placeholder="Enter Your Email"
                className={`border ${errors.email ? "border-red-500" : "border-black-color"}`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Standard email format validation
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <OutlinedInput
                label="Phone Number"
                type="tel"
                placeholder="Enter Your Phone Number"
                className={`border ${errors.phoneNumber ? "border-red-500" : "border-black-color"}`}
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9-]{11}$/, // Allows only numbers and "-" with exactly 11 characters
                    message: "Phone number must be exactly 11 characters and contain only digits and '-'",
                  },
                  validate: (value) =>
                    value.replace(/-/g, "").length === 11 || "Phone number must have 11 digits",
                })}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
              )}
            </div>
          </div>

          <div>
            <OutlinedInput
              label="Detail Address"
              type="text"
              placeholder="Enter your detail address"
              className={`w-full h-20 rounded-xl text-start align-top border ${
                errors.address ? "border-red-500" : "border-black-color"
              }`}
              {...register("address", { required: "Address is required" })}
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <OutlinedDropDown
                label="City"
                options={["Karachi", "Hyderabad", "Lahore", "Islamabad"]}
                className={`border border-gray-300 ${errors.city ? "border-red-500" : "border-black-color"}`}
                {...register("city", { required: "City is required" })}
              />
              {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
            </div>

            <div>
              <OutlinedInput
                label="Postal Code"
                placeholder="Postal Code"
                className={`border ${errors.postalCode ? "border-red-500" : "border-black-color"}`}
                {...register("postalCode", {
                  required: "Postal code is required",
                  pattern: {
                    value: /^\d{5}$/, // Ensures exactly 4 digits
                    message: "Postal code must be a 4-digit number",
                  },
                })}
              />
              {errors.postalCode && (
                <p className="text-red-500 text-sm">{errors.postalCode.message}</p>
              )}
            </div>
          </div>

          <RoundedButton type="submit" className="w-full mt-10">
            Continue
          </RoundedButton>
        </div>
      </div>
    </form>
  );
}
