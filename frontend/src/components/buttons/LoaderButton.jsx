import React from 'react'

const LoaderButton = ({ children, className = '', loading, Icon, iconSize, handleClick, ...props }) => {
    return (
        <button
            type="submit"
            disabled={loading}
            onClick={handleClick}
            className="bg-black-color text-white py-1 px-2 md:py-2 md:px-4 rounded-full hover:bg-stone-800 flex items-center justify-between gap-1"
            {...props}
        >
            {loading ? (
                <div className={`${className} border-2 border-white border-t-transparent rounded-full animate-spin`}></div>
            ) : (
                <>
                    {Icon && (
                        <Icon size={iconSize} />
                    )}
                    {children}


                </>
            )}
        </button>
    )
}

export default LoaderButton
