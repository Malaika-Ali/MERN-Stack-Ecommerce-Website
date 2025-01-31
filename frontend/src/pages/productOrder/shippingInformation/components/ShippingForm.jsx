import RoundedButton from "../../../../components/buttons/RoundedButton";
import OutlinedDropDown from "../../../../components/inputs/drop downs/OutlinedDropDown";
import OutlinedInput from "../../../../components/inputs/text fields/OutlinedInput";

export default function ShippingForm() {

    return (
      <div className="w-full max-w-xl">
        <h2 className="text-2xl font-[500] mb-6">Shipping Information</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <OutlinedInput label="First Name" type="text" placeholder="Enter Your First Name" />
            <OutlinedInput label="Last Name" type="text" placeholder="Enter Your Last Name" />
          </div>
  
          <div className="grid grid-cols-2 gap-4">
          <OutlinedInput label="Email" type="email" placeholder="Enter Your Email" />
          <OutlinedInput label="Phone Number" type="tel" placeholder="Enter Your Phone Number" />
          </div>
  
          <div>
            <OutlinedInput label="Detail Address" type="text" placeholder="Enter your detail address" className="w-full h-20 rounded-xl" />

          </div>
  

  
          <div className="grid grid-cols-2 gap-4">
          <OutlinedDropDown label="City" options={["Karachi", "Hyderabad", "Lahore", "Islamabad"]}/>
         
       <OutlinedInput label="Postal Code" placeholder="Postal Code"/>
           
          </div>
        <RoundedButton children="Continue" className="w-full mt-10"/>

        </div>
      </div>

    )
  }
  
  