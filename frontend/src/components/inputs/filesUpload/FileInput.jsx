import React from 'react'
import { RxUpload } from "react-icons/rx";

const FileInput = ({ onFileSelect, inputRef, files, disabled, register }) => {
    console.log(disabled)
    return (
        <>
            <label
                htmlFor="file-upload"
                className={`flex justify-between items-center gap-2 rounded-full border px-3 py-2 transition-all duration-300
                ${disabled
                    ? "cursor-not-allowed opacity-50 pointer-events-none"
                    : "cursor-pointer hover:bg-black hover:text-white"
                }`}>
                <RxUpload />
                {!files.length ? "Add Image" : "Add Another Image"}
            </label>
            <input type="file"
            {...register("images")}
                disabled={disabled}
                placeholder='Upload Image'
                className="hidden"
                id='file-upload'
                ref={inputRef}
                multiple
                onChange={onFileSelect}
                
            />
        </>
    )
}

export default FileInput
