'use client';

export default function About() {
    return (
        <section id="about" className="min-h-screen flex items-center py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
                    About <span className="gradient-text">Me</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <div className="space-y-6">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I'm a passionate full-stack developer with a keen eye for design and a love for creating
                            exceptional digital experiences. With expertise in modern web technologies, I bring ideas
                            to life through clean code and intuitive interfaces.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            My journey in web development started with a curiosity about how things work on the internet.
                            Today, I specialize in building scalable applications using React, Next.js, Node.js, and
                            various other cutting-edge technologies.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            When I'm not coding, you can find me exploring new technologies, contributing to open-source
                            projects, or sharing my knowledge through blog posts and tutorials.
                        </p>

                        <div className="grid grid-cols-3 gap-4 pt-8">
                            <div className="card text-center">
                                <div className="text-3xl font-bold gradient-text">50+</div>
                                <div className="text-sm text-gray-400 mt-2">Projects</div>
                            </div>
                            <div className="card text-center">
                                <div className="text-3xl font-bold gradient-text">5+</div>
                                <div className="text-sm text-gray-400 mt-2">Years Exp</div>
                            </div>
                            <div className="card text-center">
                                <div className="text-3xl font-bold gradient-text">100+</div>
                                <div className="text-sm text-gray-400 mt-2">Happy Clients</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="glass p-8 rounded-3xl">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">Clean Code</h3>
                                        <p className="text-gray-400">Writing maintainable and scalable code</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">UI/UX Design</h3>
                                        <p className="text-gray-400">Creating beautiful user experiences</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">Performance</h3>
                                        <p className="text-gray-400">Optimizing for speed and efficiency</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">Collaboration</h3>
                                        <p className="text-gray-400">Working effectively in teams</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
