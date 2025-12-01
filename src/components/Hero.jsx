import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="bg-background transition-colors duration-300">
            <div className="container mx-auto px-6 py-16 md:py-24">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

                    <div className="flex-1 text-center md:text-left space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight">
                            Abiodun Precious Enoch
                        </h1>

                        <h2 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300">
                            Full-Stack Web Developer <span className="mx-2 text-slate-400">|</span> JavaScript Enthusiast
                        </h2>

                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                            Passionate about crafting elegant and efficient web solutions that bring ideas to life. I thrive on building delightful user experiences and solving complex challenges with clean, scalable code.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4">
                            <Link
                                href="/#projects"
                                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium w-full sm:w-auto justify-center"
                            >
                                View My Work
                            </Link>

                            <Link
                                href="/#contact"
                                className="flex items-center gap-2 px-6 py-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium w-full sm:w-auto justify-center"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-center md:justify-end">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-100 to-blue-50 dark:from-slate-800 dark:to-slate-900 transform scale-105 -z-10" />
                            <Image
                                src="/pre.png"
                                alt="Precious"
                                fill
                                className="rounded-full w-full h-full object-cover border-4 border-white dark:border-slate-800 shadow-xl"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;