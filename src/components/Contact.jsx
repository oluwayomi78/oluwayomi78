"use client";

import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! (This is a demo)");
    };

    return (
        <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-6">

                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">
                    Get In Touch
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                                Contact Information
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-50 dark:bg-slate-700 rounded-lg text-blue-600 dark:text-blue-400">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</p>
                                        <p className="text-slate-900 dark:text-white font-medium">preciousenoch459@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-50 dark:bg-slate-700 rounded-lg text-blue-600 dark:text-blue-400">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Phone</p>
                                        <p className="text-slate-900 dark:text-white font-medium">+234 7068163346</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-50 dark:bg-slate-700 rounded-lg text-blue-600 dark:text-blue-400">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Location</p>
                                        <p className="text-slate-900 dark:text-white font-medium">Ogbomosho, Oyo State, Nigeria</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">Follow me</p>
                            <div className="flex gap-4">
                                <a href="https://github.com/oluwayomi78" className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/precious-enoch-5b9a04377/" className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors">
                                    <Linkedin size={20} />
                                </a>
                                <a href="https://x.com/preciousEn53178" className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors">
                                    <Twitter size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                            Send a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="your@example.com"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    placeholder="Project Inquiry"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="I'd love to collaborate on..."
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;