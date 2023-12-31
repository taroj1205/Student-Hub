'use client'
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <button
            className={`w-fit p-1 mr-1 md:mr-0 rounded-md hover:scale-110 active:scale-100 duration-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50`}
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
            <span className="w-6 h-6">
                {resolvedTheme === 'dark' && mounted ? (
                    <FiMoon className="text-indigo-500 w-6 h-6" />
                ) : (
                    <FiSun className="text-yellow-500 w-6 h-6" />
                )}
            </span>
        </button>
    );
};