import React, { forwardRef, useState, useEffect } from "react";
import { FaRegEye } from "react-icons/fa";
import { ImEyeBlocked } from "react-icons/im";

const TextInput = forwardRef(
  (
    {
      label,
      error,
      type: initialType,
      showPassword,
      value="",
      onTogglePassword,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [type, setType] = useState(initialType);
    const [hasValue, setHasValue] = useState(false);

    // Update hasValue when defaultValue or value changes
    useEffect(() => {
      if (value) {
        setHasValue(true);
      } else {
        setHasValue(false);
      }
    }, [value]);

    const handleFocus = () => setIsFocused(true);

    const handleBlur = (e) => {
      if (e.target.value === "") {
        setIsFocused(false);
      }
    };

    const handleChange = (e) => {
      setHasValue(e.target.value !== "");
      if (props.onChange) {
        props.onChange(e);
      }
    };

    const togglePasswordVisibility = () => {
      setType((prevType) => (prevType === "password" ? "text" : "password"));
      if (onTogglePassword) {
        onTogglePassword();
      }
    };

    return (
      <div className="relative w-full pt-2 mb-2">
        <input
          ref={ref}
          type={type}
          className={`w-full h-8 px-3 text-base placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-black-color ${
            error ? "border-red-500" : ""
          }`}
          placeholder={label}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange} 
          value={value}
          {...props}
        />
        <label
          className={`absolute left-0 top-1 text-black-color text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-black-color ${
            isFocused || hasValue ? "-top-3.5 text-sm text-black-color" : ""
          }`}
        >
          {label}
        </label>
        {initialType === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-0 top-2 text-gray-500"
          >
            {type === "password" ? (
              <FaRegEye className="h-5 w-5" />
            ) : (
              <ImEyeBlocked className="h-5 w-5" />
            )}
          </button>
        )}
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

export default TextInput;