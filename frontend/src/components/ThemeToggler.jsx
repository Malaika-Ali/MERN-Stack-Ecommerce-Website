import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../redux/features/theme/themeSlice";

export function ThemeToggler() {
    // const [isDark, setIsDark] = useState(false);
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const dispatch = useDispatch()

    const toggleTheme = () => {
        dispatch(toggleMode());
        // document.documentElement.classList.toggle("dark", isDarkMode);
    };

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);


    return (
        <button
            onClick={toggleTheme}
            // bg-gray-200 dark:bg-gray-800
            className="w-8 h-8 rounded-full  flex items-center justify-center relative group transition duration-300 overflow-hidden"
        >
            {/* Ripple click effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 scale-0 group-active:opacity-20 group-active:scale-100 transition-all duration-300 rounded-full" />

            {/* Icon transition (Sun ↔ Moon) */}
            <Sun
                className={`absolute h-6 w-6 text-yellow-500 transition-all duration-300 transform ${!isDarkMode
                    ? "scale-0 rotate-90 opacity-0"
                    : "scale-100 rotate-0 opacity-100"
                    }`}
            />
            <Moon
                className={`absolute h-6 w-6 text-purple-500 transition-all duration-300 transform ${!isDarkMode
                    ? "scale-100 rotate-0 opacity-100"
                    : "scale-0 -rotate-90 opacity-0"
                    }`}
            />
        </button>
    );
}
