import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SizeSelector from "../../../components/inputs/drop downs/SizeSelector";
import ImageUpload from "../../../components/inputs/ImageUpload";
import OutlinedInput from "../../../components/inputs/text fields/OutlinedInput";
import LoaderButton from "../../../components/buttons/LoaderButton";
import { FaCheck } from "react-icons/fa6";
import RoundedButton from "../../../components/buttons/RoundedButton";
import OutlinedDropDown from "../../../components/inputs/drop downs/OutlinedDropDown";

const AddProduct = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isSubmitting }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // call your API here
    };

    const [loading, setloading] = useState(false)

    return (
        <div className="flex flex-col w-full px-6 pb-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className=" text-md text-xl font-[500] dark:text-white">Add New Product</h2>

                <LoaderButton children="save Product" loading={loading} Icon={FaCheck} handleClick={() => setloading(true)} className="w-5 h-5" />

            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 lg:grid-cols-12 gap-4"
            >
                {/* LEFT COLUMN */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm dark:bg-dark-gray">
                        <h3 className="font-semibold mb-4 text-black-color dark:text-white">General Information</h3>
                        <div className="space-y-4">
                            <OutlinedInput
                                {...register("name", { required: true })}
                                placeholder="Product Name"
                                className="w-full p-3"
                                label="Products's Name"
                            />
                            <label htmlFor="description" className="block text-sm mb-0.5 px-2 text-gray-600 dark:text-gray-500">Product's Description</label>
                            <textarea
                                {...register("description")}
                                placeholder="Description Product"
                                rows={4}
                                className="w-full p-3 border border-gray-300 rounded-xl dark:bg-transparent"
                            />
                            <SizeSelector register={register} />
                        </div>
                    </div>


                    <div className="bg-white px-2 py-6 xl:p-6 rounded-xl shadow-sm dark:bg-dark-gray
                    ">
                        <h3 className="font-[500] mb-4 text-gray-800 dark:text-white">Upload Image</h3>
                        <ImageUpload register={register} />
                    </div>


                </div>

                {/* RIGHT COLUMN */}
                <div className="space-y-6 lg:col-span-4  w-full">

                    <div className="bg-white p-6 rounded-xl shadow-sm dark:bg-dark-gray">
                        {/* <h3 className="font-[500] mb-4 text-black-color dark:text-white">Category</h3> */}
                        {/* <input
                            {...register("category")}
                            placeholder="Product Category"
                            className="w-full p-3 border rounded-md"
                        /> */}
                        <OutlinedDropDown label="Product's Category" options={["Clothes", "Jewellery", "Accessories", "Footwear"]} value="Category" />
                    </div>


                    <div className="bg-white p-6 rounded-xl shadow-sm dark:bg-dark-gray">
                        <h3 className="font-[500] mb-4 text-black-color dark:text-white">Pricing And Stock</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                {...register("price")}
                                placeholder="Base Pricing"
                                type="number"
                                className="w-full p-3 border rounded-md"
                            />
                            <input
                                {...register("stock")}
                                placeholder="Stock"
                                type="number"
                                className="w-full p-3 border rounded-md"
                            />
                            <input
                                {...register("discount")}
                                placeholder="Discount"
                                className="w-full p-3 border rounded-md"
                            />
                            <input
                                {...register("discountType")}
                                placeholder="Discount Type"
                                className="w-full p-3 border rounded-md"
                            />
                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default AddProduct;
