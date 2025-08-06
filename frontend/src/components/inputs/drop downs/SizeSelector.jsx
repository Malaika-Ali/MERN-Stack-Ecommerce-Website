import React from "react";

const SizeSelector = ({ register }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label className="block mb-1 font-medium text-sm">Size</label>
                <div className="flex gap-2 flex-wrap">
                    {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                        <label key={size} className="px-3 py-1 bg-gray-100 rounded cursor-pointer">
                            <input
                                type="checkbox"
                                value={size}
                                {...register("sizes")}
                                className="hidden"
                            />
                            {size}
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <label className="block mb-1 font-medium text-sm">Gender</label>
                <div className="flex gap-4">
                    {["Men", "Woman", "Unisex"].map((gender) => (
                        <label key={gender} className="flex items-center gap-1 text-sm">
                            <input
                                type="radio"
                                value={gender}
                                {...register("gender")}
                            />
                            {gender}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SizeSelector;
