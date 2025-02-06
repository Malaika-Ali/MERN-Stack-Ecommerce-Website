import { motion } from "framer-motion"
import { ArrowRight, ShoppingBag, Truck } from "lucide-react"
import RoundedButton from "../../components/buttons/RoundedButton"
import heroImage from '../../assets/bg-opt.PNG'
// import heroImage from '../../assets/bg2.PNG'
import { FaArrowRightLong } from "react-icons/fa6";

export default function LandingPageHero() {
    return (
        <div className="h-screen flex items-center"> 
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-8"> 
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6" 
                    >
                        <div className="inline-flex items-center gap-2 bg-stone-100 px-4 py-2 rounded-full">
                            <span className="px-2 py-1 bg-stone-900 text-white text-xs rounded-full">New</span>
                            <span className="text-sm text-stone-600">Spring Collection 2024</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight">
                            Where Style Meets <br />
                            <span className="text-stone-500">Sophistication</span>
                        </h1>

                        <p className="text-stone-600 text-lg max-w-md">
                            Discover our latest collection of premium fashion pieces, crafted for those who appreciate refined
                            elegance.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <RoundedButton size="lg" className="bg-stone-900 text-white hover:bg-stone-800">
                                Shop Now
                                <FaArrowRightLong className="ml-2 h-4 w-4" />
                            </RoundedButton>
                        </div>

                        <div className="grid grid-cols-2 gap-6 pt-8">
                            <div className="flex items-start gap-3">
                                <div>
                                    <h3 className="font-medium text-stone-900">Free Shipping</h3>
                                    <p className="text-sm text-stone-500">On orders over $200</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div>
                                    <h3 className="font-medium text-stone-900">Easy Returns</h3>
                                    <p className="text-sm text-stone-500">30-day return policy</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-square">
                        <img
                            src={heroImage}
                            alt="Hero"
                            className="w-full h-auto max-h-[100%] rounded-2xl object-cover" 
                        />

                        </div>
                     
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                            <div className="flex items-center gap-4">
                                <div className="text-center px-4 border-r border-stone-200">
                                    <div className="text-2xl font-bold text-stone-900">50+</div>
                                    <div className="text-sm text-stone-600">New Arrivals</div>
                                </div>
                                <div className="text-center px-4">
                                    <div className="text-2xl font-bold text-stone-900">4.9</div>
                                    <div className="text-sm text-stone-600">Customer Rating</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}