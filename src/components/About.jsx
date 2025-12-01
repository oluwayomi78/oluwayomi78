import Image from "next/image";
import { Code, Briefcase, Lightbulb } from "lucide-react";

const About = () => {
    const stats = [
        {
            icon: <Code size={32} />,
            value: "25+",
            label: "Projects Completed",
        },
        {
            icon: <Briefcase size={32} />,
            value: "1+",
            label: "Years Experience",
        },
        {
            icon: <Lightbulb size={32} />,
            value: "10+",
            label: "Technologies Mastered",
        },
    ];

    return (
        <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                            About Me
                        </h2>

                        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                            As a dedicated full-stack web developer, I possess a strong foundation in both front-end and back-end technologies. My journey began with a curiosity for how websites work, evolving into a passion for creating seamless, responsive, and intuitive digital experiences.
                        </p>

                        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                            I believe in writing clean, modular, and maintainable code, always keeping performance and user experience at the forefront. My expertise spans modern JavaScript frameworks, robust back-end systems, and efficient database management. I am constantly exploring new technologies and refining my skills to deliver innovative solutions. Let us build something amazing together!
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-8">
                        <div className="relative w-32 h-32 md:w-40 md:h-40">
                            <div className="absolute inset-0 rounded-full bg-blue-100 dark:bg-slate-800 transform rotate-6 scale-110 -z-10" />
                            <Image
                                src="/pre.png" 
                                alt="Profile"
                                fill
                                className="rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-md"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center group"
                                >
                                    <div className="text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-110 transition-transform">
                                        {stat.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                                        {stat.value}
                                    </h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;