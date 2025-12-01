"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = () => {
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false); 
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const navLinks = [
        { name: "Home", href: "/", active: true },
        { name: "About", href: "/#about", active: false },
        { name: "Skills", href: "/#skills", active: false },
        { name: "Projects", href: "/#projects", active: false },
        { name: "Contact", href: "/#contact", active: false },
    ];

    if (!mounted) return null;

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white dark:bg-slate-900 dark:border-slate-800 transition-colors duration-300">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">

                <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
                    <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                        DevWeb
                    </span>
                </Link>

                <div className="flex items-center gap-4 md:gap-8">
                    
                    <nav className="hidden md:flex gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors duration-200 
                                ${link.active
                                        ? "text-blue-600 dark:text-blue-400"
                                        : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <button
                        className="md:hidden p-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden border-t border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all duration-300 ease-in-out">
                    <nav className="flex flex-col p-4 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)} 
                                className={`text-base font-medium transition-colors duration-200 block px-2 py-1 rounded-md
                                ${link.active
                                        ? "text-blue-600 bg-blue-50 dark:bg-slate-800 dark:text-blue-400"
                                        : "text-gray-600 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-slate-800"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;