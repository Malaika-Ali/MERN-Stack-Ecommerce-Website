import React from 'react'
import Marquee from "react-fast-marquee";


const Marque = () => {
    return (
        <div className='hidden md:block'>
        <Marquee
            speed={20}
            gradient={true}
            gradientWidth={20}
            gradientColor='grey'
            autoFill={true}
            pauseOnHover={true}
            className='bg-black h-8 md:h-10'>

            <div className='w-2 h-2 bg-white rounded-full mx-5 lg:mx-8'></div>

            <div className='text-gray-400 text-sm font-semibold'>&nbsp; Free shipping on orders above<span className='text-white'> &nbsp;Rs.5000 &nbsp;</span></div>

            <div className='w-2 h-2 bg-white rounded-full mx-5 lg:mx-8'></div>

            <div className='text-gray-400 text-sm font-semibold'> &nbsp; Sign up and get<span className='text-white'> &nbsp;10% Off&nbsp;</span> on your first order</div>
        </Marquee>
        </div>
    )
}

export default Marque
