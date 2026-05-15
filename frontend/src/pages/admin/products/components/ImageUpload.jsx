import { useState, useRef } from "react";

function ImageUpload({setImage}) {
    const [preview, setPreview] = useState(null);
    const [drag, setDrag] = useState(false);
    const inputRef = useRef();

    const handleFile = (file) => {
        setImage(file)
        if (!file || !file.type.startsWith("image/")) return;
        setPreview(URL.createObjectURL(file));
    };

    const remove = (e) => {
        e.stopPropagation();
        setPreview(null);
        if (inputRef.current) inputRef.current.value = "";
    };

    return (
        <div
            className={`relative border border-dashed ${drag ? "border-blue-400 bg-blue-50 dark:bg-blue-900/10" : "border-gray-500 dark:border-white"} w-28 rounded-xl flex flex-col items-center justify-center cursor-pointer overflow-hidden transition-colors`}
            onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
            onDragLeave={() => setDrag(false)}
            onDrop={(e) => { e.preventDefault(); setDrag(false); handleFile(e.dataTransfer.files[0]); }}
        >
            {preview ? (
                <>
                    <img src={preview} alt="Preview" className="w-full h-full object-cover rounded-xl" />
                    <button
                        onClick={remove}
                        className="absolute top-1 right-1 w-5 h-5 bg-black/50 hover:bg-red-600/80 text-white text-xs rounded-full flex items-center justify-center transition-colors"
                    >
                        ✕
                    </button>
                </>
            ) : (
                <>
                    <svg className="text-gray-400 mb-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                    <span className="text-[10px] text-gray-400 text-center px-1.5 leading-tight">Upload image</span>
                </>
            )}
            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                onChange={(e) => handleFile(e.target.files[0])}
            />
        </div>
    );
}

export default ImageUpload