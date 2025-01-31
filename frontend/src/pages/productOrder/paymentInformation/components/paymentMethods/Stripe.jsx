import React from 'react'
import OutlinedInput from '../../../../../components/inputs/text fields/OutlinedInput'
import RoundedButton from '../../../../../components/buttons/RoundedButton'

const Stripe = () => {
  return (
    <div className="space-y-4">
    <div >
      <OutlinedInput label="Card Number" type="text" placeholder="Enter Your Card Number" />
    </div>

    <div className="grid grid-cols-2 gap-4">
    <OutlinedInput label="Expiration Date" type="number" placeholder="MM/YY" />
    <OutlinedInput label="CVV" type="number" placeholder="XXX" />
    </div>

    <div className='pb-6'>
      <OutlinedInput label="Card Holder's Name" type="text" placeholder="Enter Card Holder's Name" className="w-full" />
    </div>

  <RoundedButton children="Continue" className="w-full mt-10"/>

  </div>
  )
}

export default Stripe
