import { useNavigate } from "react-router-dom";
import RoundedButton from "../../../../components/buttons/RoundedButton";
import OutlinedDropDown from "../../../../components/inputs/drop downs/OutlinedDropDown";
import OutlinedInput from "../../../../components/inputs/text fields/OutlinedInput";

import {useForm} from 'react-hook-form'

export default function ShippingForm() {

  const {register, handleSubmit}=useForm()
  const navigate=useNavigate()

  const handleForm=(data)=>{
    navigate("/payment-information", { state: { data } });
  }

    return (
      <form onSubmit={handleSubmit(handleForm)}>
      <div className="w-full max-w-xl">
        <h2 className="text-2xl font-[500] mb-6">Shipping Information</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <OutlinedInput label="Name" type="text" placeholder="Enter Your Name" {...register("name",{
              required:  true
            })}/>
            <OutlinedInput label="State" type="text" placeholder="Enter Your State" 
             {...register("state",{
              required:  true
            })}/>
          </div>
  
          <div className="grid grid-cols-2 gap-4">
          <OutlinedInput label="Email" type="email" placeholder="Enter Your Email" 
           {...register("email",{
            required:  true
          })}/>
          <OutlinedInput label="Phone Number" type="tel" placeholder="Enter Your Phone Number" 
           {...register("phoneNumber",{
            required:  true
          })}/>
          </div>
  
          <div>
            <OutlinedInput label="Detail Address" type="text" placeholder="Enter your detail address" className="w-full h-20 rounded-xl" 
             {...register("address",{
              required:  true
            })}/>

          </div>
  
          <div className="grid grid-cols-2 gap-4">
          <OutlinedDropDown label="City" options={["Karachi", "Hyderabad", "Lahore", "Islamabad"]}
          {...register("city",{
            required:  true
          })}/>
         
       <OutlinedInput label="Postal Code" placeholder="Postal Code"
        {...register("postalCode",{
          required:  true
        })}/>          
          </div>
        <RoundedButton type='submit' children="Continue" className="w-full mt-10"/>

        </div>
      </div>
      </form>

    )
  }
  
  