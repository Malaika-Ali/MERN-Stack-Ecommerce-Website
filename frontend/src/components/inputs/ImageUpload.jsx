import React, { useState } from "react";

const ImageUpload = ({ register }) => {
    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) setPreview(URL.createObjectURL(file));
    };

    return (
        <div className="px-8 py-8 w-full h-80 rounded-lg border-2 border-dashed border-gray-300 flex justify-center items-center flex-col">
            <input
                type="file"
                accept="image/*"
                {...register("image")}
                onChange={handleImageChange}
                className="mb-4 border-none outline-none bg-transparent"
            />
            {preview && (
                <img src={preview} alt="Preview" className="rounded-lg object-cover" />
            )}
        </div>
    );
};

export default ImageUpload;
