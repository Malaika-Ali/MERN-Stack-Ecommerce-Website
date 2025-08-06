import React, { useState } from "react";

const ImageUpload = ({ register }) => {
    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) setPreview(URL.createObjectURL(file));
    };

    return (
        <div>
            <input
                type="file"
                accept="image/*"
                {...register("image")}
                onChange={handleImageChange}
                className="mb-4"
            />
            {preview && (
                <img src={preview} alt="Preview" className="rounded-lg" />
            )}
        </div>
    );
};

export default ImageUpload;
