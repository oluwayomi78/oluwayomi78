import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "Saarcle - Connect, Learn, Grow",
            description: "A social networking platform designed for students and professionals to connect, share knowledge, and grow their networks.",
            image: "/pics1.png",
            tags: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
            liveUrl: "https://saarcle-azure.vercel.app",
            githubUrl: "https://github.com/oluwayomi78/Saarcle",
        },
        {
            title: "LuxeMart",
            description: "A premium e-commerce shopping experience featuring product filtering, cart functionality, and secure checkout integration.",
            image: "/pics2.png",
            tags: ["React", "Firebase", "Node.js", "Express", "Tailwind CSS", "Redux"],
            liveUrl: "https://luxemart-eta.vercel.app",
            githubUrl: "https://github.com/oluwayomi78/luxemart",
        },
        {
            title: "FinTracker",
            description: "A comprehensive financial tracking application to monitor expenses, income, and savings goals with visual analytics.",
            image: "/pics3.png",
            tags: ["React", "Chart.js", "Firebase", "Material UI"],
            liveUrl: "https://fintracker-etuf.vercel.app/", 
            githubUrl: "https://github.com/oluwayomi78/FinTracker",
        },
        {
            title: "PreciousBank",
            description: "A modern banking interface simulation allowing users to view transactions, transfer funds, and manage accounts securely.",
            image: "/pics4.png",
            tags: ["JavaScript", "DOM Manipulation", "CSS3", "React", "Node.js"],
            liveUrl: "https://precious-bank.vercel.app",
            githubUrl: "https://github.com/oluwayomi78/my-app",
        },
        {
            title: "Quiz App",
            description: "An interactive quiz platform with timer logic, score tracking, and multiple question categories to test user knowledge.",
            image: "/pics5.png",
            tags: ["React", "Node.js", "Tailwind CSS"],
            liveUrl: "https://quiz-app-gamma-wine.vercel.app",
            githubUrl: "https://github.com/oluwayomi78/Quiz-App",
        },
        {
            title: "Recipe Finder",
            description: "A culinary application that helps users discover recipes based on ingredients they have at home using external food APIs.",
            image: "/pics6.png",
            tags: ["React", "Edamam API", "Styled Components"],
            liveUrl: "https://recipe-finder-nine-eta.vercel.app",
            githubUrl: "https://github.com/oluwayomi78/Recipe-Finder",
        },
        {
            title: "Genius Calculator",
            description: "A feature-rich calculator handling complex mathematical operations with a sleek, user-friendly design.",
            image: "/pics7.png",
            tags: ["JavaScript", "CSS Grid", "Math Logic"],
            liveUrl: "https://genius-calculator.vercel.app",
            githubUrl: "https://github.com/oluwayomi78/Genius-Calculator",
        },
        {
            title: "Precious Weather App",
            description: "Real-time weather forecasting tool providing temperature, humidity, and conditions for any city worldwide.",
            image: "/pics8.png",
            tags: ["React", "OpenWeatherMap", "Axios"],
            liveUrl: "https://frontend-five-dun-16.vercel.app",
            githubUrl: "https://github.com/oluwayomi78/frontend",
        },
        {
            title: "Precious Keep App",
            description: "A note-taking application inspired by Google Keep, allowing users to create, archive, and delete notes dynamically.",
            image: "/pics9.png",
            tags: ["Html", "JavaScript", "Firebase", "Local Storage", "CSS Modules"],
            liveUrl: "https://precious-keep.vercel.app",
            githubUrl: "https://github.com/oluwayomi78/precious-keep",
        },
        {
            title: "Chat Room App",
            description: "A real-time messaging application supporting multiple users in a shared chat room environment.",
            image: "/pics10.png",
            tags: ["Html", "JavaScript", "Firebase", "CSS Modules"],
            liveUrl: "https://chat-room-chi-rose.vercel.app/",
            githubUrl: "https://github.com/oluwayomi78/chat-room",
        },
    ];

    return (
        <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">
                    My Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col group"
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4 mt-auto">
                                    <Link
                                        href={project.liveUrl}
                                        target="_blank"
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                                    >
                                        Live Demo
                                        <ExternalLink size={16} />
                                    </Link>

                                    <Link
                                        href={project.githubUrl}
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                                    >
                                        GitHub
                                        <Github size={16} />
                                    </Link>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;