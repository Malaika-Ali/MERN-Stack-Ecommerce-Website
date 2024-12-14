import React from 'react'

const LandinPageHero = () => {
    return (
        //     <section className="px-3 py-5 bg-neutral-100 lg:py-10">
        //     <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        //         <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
        //             <p className="text-4xl font-bold md:text-7xl text-orange-600">25% OFF</p>
        //             <p className="text-4xl font-bold md:text-7xl">SUMMER SALE</p>
        //             <p className="mt-2 text-sm md:text-lg">For limited time only!</p>
        //             <button className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">Shop Now</button>
        //         </div>
        //         <div className="order-1 lg:order-2">
        //             <img className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]" src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt=""/>
        //         </div>
        //     </div>
        // </section>


       

        <section className=" py-14 md:py-24 text-white">
        <div className="container px-4 mx-auto">
            <div className="bg-[#303446] rounded-xl overflow-hidden max-w-8xl mx-auto">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-12 lg:col-span-7">
                        <div className="py-12 px-6 sm:px-12">
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
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-5 text-end">
                        <div className="flex justify-end">
                            <img
                                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                // src='../../../../assets/hero-img.avif'
                                alt=""
                                className=" w-full lg:w-auto"
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
