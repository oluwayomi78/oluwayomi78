"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const footerLinks = {
        quickLinks: [
            { name: "Home", href: "/#home" },
            { name: "About", href: "/#about" },
            { name: "Skills", href: "/#skills" },
            { name: "Projects", href: "/#projects" },
        ],
        services: [
            { name: "Web Development", href: "#" },
            { name: "UI/UX Design", href: "#" },
            { name: "Mobile Apps", href: "#" },
            { name: "Consulting", href: "#" },
        ],
        connect: [
            { name: "GitHub", href: "https://github.com/oluwayomi78" },
            { name: "LinkedIn", href: "https://www.linkedin.com/in/precious-enoch-5b9a04377/" },
            { name: "X", href: "https://x.com/preciousEn53178" },
            { name: "Instagram", href: "https://www.instagram.com/coreweb_tech247?igsh=anBtem93enF3Zm5x " },
        ],
    };

    return (
        <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 py-12 relative transition-colors duration-300 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-blue-500 dark:text-blue-400">
                            DevWeb
                        </h2>
                        <p className="text-sm leading-relaxed">
                            Creating digital experiences that matter
                        </p>
                    </div>

                    <div>
                        <h3 className="text-slate-900 dark:text-white font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            {footerLinks.quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-slate-900 dark:text-white font-bold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-slate-900 dark:text-white font-bold mb-4">Connect</h3>
                        <ul className="space-y-2 text-sm">
                            {footerLinks.connect.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 relative">
                    <p className="text-sm">
                        © 2025 DevWeb. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="bg-blue-500 dark:bg-blue-400 text-white dark:text-slate-900 p-3 rounded-lg shadow-lg hover:bg-blue-600 dark:hover:bg-blue-300 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Back to Top"
                    >
                        <ArrowUp size={20} strokeWidth={2.5} />
                    </button>
                </div>

            </div>
        </footer>
    );
};

export default Footer;