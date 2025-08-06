import React from "react";
import { useForm } from "react-hook-form";
import SizeSelector from "../../../components/inputs/drop downs/SizeSelector";
import ImageUpload from "../../../components/inputs/ImageUpload";

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

    return (
        <div className="w-full px-6 pb-8">
            <h2 className="text-xl font-semibold mb-6">Add New Product</h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
                {/* LEFT COLUMN */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="font-semibold mb-4 text-gray-800">General Information</h3>
                        <div className="space-y-4">
                            <input
                                {...register("name", { required: true })}
                                placeholder="Name Product"
                                className="w-full p-3 border rounded-md"
                            />
                            <textarea
                                {...register("description")}
                                placeholder="Description Product"
                                rows={4}
                                className="w-full p-3 border rounded-md"
                            />
                            <SizeSelector register={register} />
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="font-semibold mb-4 text-gray-800">Pricing And Stock</h3>
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

                {/* RIGHT COLUMN */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="font-semibold mb-4 text-gray-800">Upload Img</h3>
                        <ImageUpload register={register} />
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="font-semibold mb-4 text-gray-800">Category</h3>
                        <input
                            {...register("category")}
                            placeholder="Product Category"
                            className="w-full p-3 border rounded-md"
                        />
                        <button
                            type="button"
                            className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
                        >
                            Add Category
                        </button>
                    </div>

                    <div className="flex justify-between gap-4 pt-4">
                        <button
                            type="button"
                            className="w-1/2 border border-gray-300 text-gray-800 py-2 rounded"
                        >
                            Save Draft
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-1/2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded"
                        >
                            {isSubmitting ? "Submitting..." : "Add Product"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
