import { useEffect, useRef, useState } from 'react';

export function AboutMe() {
    const [visibleItems, setVisibleItems] = useState(new Set());
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleItems((prev) => new Set([...prev, entry.target.dataset.index]));
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
        );

        const elements = document.querySelectorAll('.timeline-item');
        elements.forEach((el) => observerRef.current.observe(el));

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <div id="about-me" className="max-w-6xl mx-auto px-6 py-10">
            <h1 className="text-4xl font-extrabold text-white mb-4">About Me</h1>

            <p className="text-xl text-gray-300 mb-10">
                Hello! I'm <span className="text-white font-semibold">Keith</span>, currently a final year <span className="text-indigo-400">Computer Science</span> student studying at <span className="text-white font-semibold">Nanyang Technological University</span> in Singapore. I am passionate about many areas of tech, including <span className="text-indigo-400">Full Stack Web Development</span>, <span className="text-indigo-400">Cloud Computing</span>, and <span className="text-indigo-400">AI/Machine Learning</span>. I also spent a semester at <span className="text-white font-semibold">KTH Royal Institute of Technology</span> in Stockholm, Sweden, where I deepened my knowledge in Computer Security and Advanced Software Engineering.
            </p>

            {/* Hobbies Section */}
            <section className="py-4 mb-6">
                <h2 className="text-2xl font-semibold text-white mb-4">Hobbies & Interests</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 sm:p-4">
                        <h3 className="text-base sm:text-lg font-semibold text-indigo-400 mb-2">🎱 Snooker</h3>
                        <p className="text-sm sm:text-base text-gray-300">Former Snooker Captain at NTU Pioneer Hall. Mentored 8 members and led the team to Top 8 in the NTU Inter-Hall Games.</p>
                    </div>
                    <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 sm:p-4">
                        <h3 className="text-base sm:text-lg font-semibold text-indigo-400 mb-2">🇯🇵 Japanese Language</h3>
                        <p className="text-sm sm:text-base text-gray-300">JLPT N3 certified. Enjoy learning Japanese language and culture in my free time.</p>
                    </div>
                    <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 sm:p-4">
                        <h3 className="text-base sm:text-lg font-semibold text-indigo-400 mb-2">✈️ Travel</h3>
                        <p className="text-sm sm:text-base text-gray-300">Love exploring new places and cultures around the world, from the Arctic Circle in Svalbard to the streets of Stockholm.</p>
                    </div>
                    <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 sm:p-4">
                        <h3 className="text-base sm:text-lg font-semibold text-indigo-400 mb-2">💻 Tech Projects</h3>
                        <p className="text-sm sm:text-base text-gray-300">Constantly building side projects to explore new technologies and solve real-world problems.</p>
                    </div>
                </div>
            </section>

            <section className="py-4">
                <h2 className="text-2xl font-semibold text-white mb-6">Work Experience</h2>
                
                {/* Actxa Entry */}
                <div 
                    className={`flex gap-4 sm:gap-6 mb-8 timeline-item transition-all duration-700 ${
                        visibleItems.has('0') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    data-index="0"
                >
                    <div className="flex flex-col items-center">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-indigo-400 rounded-full"></div>
                        <div className="w-0.5 h-full bg-gray-600 mt-2"></div>
                    </div>
                    <div className="flex-1 pb-8">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">Actxa, Singapore <span className="text-xs sm:text-sm text-gray-400">(Dec 2025 - Present)</span></h3>
                        <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-2">
                            <span className="font-semibold text-indigo-300">Software Engineer Intern</span>
                        </p>
                        <ul className="list-disc pl-4 sm:pl-5 mt-2 text-sm sm:text-base md:text-lg text-gray-300 space-y-1">
                            <li>Developed production backend Gen-AI features using Retrieval-Augmented Generation (RAG) to generate personalized health insights across sleep, activity, and recovery domains.</li>
                            <li>Integrated LLM APIs into Python services using LangChain, with data pipelines utilizing PostgreSQL and MongoDB databases.</li>
                        </ul>
                        <p className="mt-2 text-gray-300">
                            <span className="font-semibold">Technologies:</span> Python, CI/CD, OpenAI, Langchain, PostgreSQL, MongoDB, Typescript, Docker, Atlassian Suite Services
                        </p>
                    </div>
                </div>

                {/* DSTA Entry */}
                <div 
                    className={`flex gap-6 mb-8 timeline-item transition-all duration-700 ${
                        visibleItems.has('1') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    data-index="1"
                >
                    <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-indigo-400 rounded-full"></div>
                        <div className="w-0.5 h-full bg-gray-600 mt-2"></div>
                    </div>
                    <div className="flex-1 pb-8">
                        <h3 className="text-xl font-semibold text-white">Defence Science and Technology Agency (DSTA), Singapore <span className="text-sm text-gray-400">(May 2024 - Dec 2024)</span></h3>
                        <p className="text-lg text-gray-300 mt-2">
                            <span className="font-semibold text-indigo-300">Cloud and Virtual Reality Software Development Intern</span>
                        </p>
                        <ul className="list-disc pl-5 mt-2 text-lg text-gray-300">
                            <li>Conducted in-depth data collection and performance benchmarking for XR cloud gaming applications deployed on AWS, contributing to optimization decisions and latency reduction strategies.</li>
                            <li>Utilized Python for analysis of large-scale experimental data collected across multiple testing environments. Narrowed down configuration of instance to achieve more than 50% increase in gaming performance.</li>
                        </ul>
                        <p className="mt-2 text-gray-300">
                            <span className="font-semibold">Technologies:</span> AWS EC2 & CloudWatch, Python, Swift, Xcode, Unity, C#
                        </p>
                    </div>
                </div>

                {/* Carro Entry */}
                <div 
                    className={`flex gap-6 mb-8 timeline-item transition-all duration-700 ${
                        visibleItems.has('2') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    data-index="2"
                >
                    <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-indigo-400 rounded-full"></div>
                        <div className="w-0.5 h-full bg-gray-600 mt-2"></div>
                    </div>
                    <div className="flex-1 pb-8">
                        <h3 className="text-xl font-semibold text-white">Carro, Singapore <span className="text-sm text-gray-400">(Nov 2021 - Mar 2022)</span></h3>
                        <p className="text-lg text-gray-300 mt-2">
                            <span className="font-semibold text-indigo-300">Administrative Intern - Insurance and Operations Support</span>
                        </p>
                        <ul className="list-disc pl-5 mt-2 text-lg text-gray-300">
                            <li>Assisted with database updates and validation of vehicle insurance records, ensuring 100% compliance with documentation standards.</li>
                            <li>Supported process automation by identifying bottlenecks in manual data entry, contributing to a proposed digitization workflow.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-4">
                <h2 className="text-2xl font-semibold text-white mb-6">Co-curricular Activities</h2>
                
                {/* NTU Pioneer Hall Entry */}
                <div 
                    className={`flex gap-6 mb-8 timeline-item transition-all duration-700 ${
                        visibleItems.has('6') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    data-index="6"
                >
                    <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-indigo-400 rounded-full"></div>
                        <div className="w-0.5 h-full bg-gray-600 mt-2"></div>
                    </div>
                    <div className="flex-1 pb-8">
                        <h3 className="text-xl font-semibold text-white">NTU Pioneer Hall <span className="text-sm text-gray-400">(Aug 2023 - May 2024)</span></h3>
                        <p className="text-lg text-gray-300 mt-2">
                            <span className="font-semibold text-indigo-300">Snooker Captain</span>
                        </p>
                        <ul className="list-disc pl-5 mt-2 text-lg text-gray-300">
                            <li>Spearheaded mentorship of 8 members to improve snooker skills through practice sessions over a 1-year period.</li>
                            <li>Championed snooker club into achieving Top 8 in the NTU Inter-Hall Games.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-4">
                <h2 className="text-2xl font-semibold text-white mb-4">Technical Skills</h2>
                <p className="text-lg text-gray-300">
                    <span className="font-semibold">Programming & Software:</span> TypeScript, Python, Swift, HTML, CSS, React.js, React Native, Node.js, APIs, Git
                </p>
                <p className="text-lg text-gray-300 mt-2">
                    <span className="font-semibold">Cloud & Deployment:</span> AWS (EC2, CloudWatch, S3), GCP, Vercel, Docker, GitHub Actions, Firebase (Auth, Firestore)
                </p>
                <p className="text-lg text-gray-300 mt-2">
                    <span className="font-semibold">AI & Data:</span> Hugging Face Inference API, Vector Databases, Data Analysis (Python/Pandas), SQL
                </p>
                <p className="text-lg text-gray-300 mt-2">
                    <span className="font-semibold">Design & Collaboration:</span> Figma, Microsoft Office, Google Suite, Atlassian Suite
                </p>
                <p className="text-lg text-gray-300 mt-2">
                    <span className="font-semibold">Languages:</span> English, Chinese, Japanese
                </p>
                <p className="text-lg text-gray-300 mt-2">
                    <span className="font-semibold">Certifications:</span> JLPT (Japanese Language Proficiency Test) N3
                </p>
            </section>

            <section className="py-4">
                <h2 className="text-2xl font-semibold text-white mb-6">Education</h2>
                
                {/* NTU Entry */}
                <div 
                    className={`flex gap-6 mb-8 timeline-item transition-all duration-700 ${
                        visibleItems.has('7') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    data-index="7"
                >
                    <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-indigo-400 rounded-full"></div>
                        <div className="w-0.5 h-full bg-gray-600 mt-2"></div>
                    </div>
                    <div className="flex-1 pb-8">
                        <h3 className="text-xl font-semibold text-white">Nanyang Technological University, Singapore <span className="text-sm text-gray-400">(Aug 2022 - 2026)</span></h3>
                        <p className="text-lg text-gray-300 mt-2">
                            <span className="font-semibold text-indigo-300">Bachelor of Engineering in Computer Science, 2nd Upper</span>
                        </p>
                        <p className="text-gray-300 mt-1">Expected Graduation: 2026</p>
                        <ul className="list-disc pl-5 mt-2 text-lg text-gray-300">
                            <li>Relevant coursework: Software Engineering, Computer Networks, Cyber Security</li>
                        </ul>
                    </div>
                </div>

                {/* KTH Entry */}
                <div 
                    className={`flex gap-6 mb-8 timeline-item transition-all duration-700 ${
                        visibleItems.has('8') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    data-index="8"
                >
                    <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-indigo-400 rounded-full"></div>
                        <div className="w-0.5 h-full bg-gray-600 mt-2"></div>
                    </div>
                    <div className="flex-1 pb-8">
                        <h3 className="text-xl font-semibold text-white">KTH Royal Institute of Technology, Stockholm, Sweden <span className="text-sm text-gray-400">(Jan 2025 - Jun 2025)</span></h3>
                        <p className="text-lg text-gray-300 mt-2">
                            <span className="font-semibold text-indigo-300">School of Electrical Engineering and Computer Science</span>
                        </p>
                        <ul className="list-disc pl-5 mt-2 text-lg text-gray-300">
                            <li>Focus areas: Machine Learning, Advanced Software Engineering, Computer Security</li>
                        </ul>
                    </div>
                </div>

                {/* ACJC Entry */}
                <div 
                    className={`flex gap-6 timeline-item transition-all duration-700 ${
                        visibleItems.has('9') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    data-index="9"
                >
                    <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-indigo-400 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white">Anglo-Chinese Junior College, Singapore <span className="text-sm text-gray-400">(Mar 2018 - Dec 2019)</span></h3>
                        <p className="text-lg text-gray-300 mt-2">
                            <span className="font-semibold text-indigo-300">GCE A-Levels</span>
                        </p>
                        <ul className="list-disc pl-5 mt-2 text-lg text-gray-300">
                            <li>Physics, Chemistry, Mathematics, and Economics</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
