import React, { useCallback } from 'react'
import hero from './hero.png'
import h1 from '../../assets/bg2.png'
import './hero.css'
import RoundedButton from '../buttons/RoundedButton'

const LandinPageHero = () => {

    // const handleCTAClick= useCallback( ()=>{
    //     console.log("CTA Clicked")}
    // ,[])


    const handleCTAClick=()=>{
        console.log("CTA clicked")
    }
    return (
        <section className="py-14 md:pt-16 text-black-color h-auto">
        <div className="container px-4 mx-auto">
            <div className="gradient rounded-xl overflow-hidden max-w-8xl mx-auto">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-12 lg:col-span-7">
                        <div className="pt-2 px-6 sm:px-12">
                            <h2 className="text-2xl md:text-[40px] leading-none font-bold mb-6">
                                Join with us for more information
                            </h2>

                            <div className="grid grid-cols-12">
                                <div className="col-span-12 sm:col-span-8">
                                    <p className="text-lg opacity-75 mb-12">
                                        It’s easier to reach your savings goals when you have the
                                        right savings account.
                                    </p>
                                </div>

                              
                               
                            </div>
                            <div>
                                    <RoundedButton type='button' handleClick={handleCTAClick} children="Shop Now" className='px-6 py-3'/>
                                </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-5 text-end">
                        <div className="flex justify-center md:justify-end relative aspect-square">
                            <img
                                src={h1}
                                alt="Fashion Model"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default LandinPageHero











