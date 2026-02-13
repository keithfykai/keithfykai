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
        <div className="max-w-6xl mx-auto px-6 pt-5">
            <h1 className="text-4xl font-extrabold text-white mb-4">About Me</h1>

            <p className="text-xl text-gray-300 mb-10">
                Hello! I'm Keith, currently a final year Computer Science student studying at Nanyang Technological University in Singapore. I am passionate about many areas of tech, including mainly Full Stack Web Development and Cloud Computing.
            </p>

            <section className="py-4">
                <h2 className="text-2xl font-semibold text-white mb-6">Internships / Work Experience</h2>
                
                {/* Actxa Entry */}
                <div 
                    className={`flex gap-6 mb-8 timeline-item transition-all duration-700 ${
                        visibleItems.has('0') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    data-index="0"
                >
                    <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-indigo-400 rounded-full"></div>
                        <div className="w-0.5 h-full bg-gray-600 mt-2"></div>
                    </div>
                    <div className="flex-1 pb-8">
                        <h3 className="text-xl font-semibold text-white">Actxa, Singapore <span className="text-sm text-gray-400">(Dec 2025 - Present)</span></h3>
                        <p className="text-lg text-gray-300 mt-2">
                            <span className="font-semibold">Software Engineer Intern</span>
                        </p>
                        <ul className="list-disc pl-5 mt-2 text-lg text-gray-300">
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
                            <span className="font-semibold">Cloud and Virtual Reality Software Development Intern</span>
                        </p>
                        <ul className="list-disc pl-5 mt-2 text-lg text-gray-300">
                            <li>Conducted in-depth data collection and performance benchmarking for XR cloud gaming applications deployed on AWS, contributing to optimization decisions and latency reduction strategies.</li>
                            <li>Utilized Python and Jupyter Notebook for analysis of large-scale experimental data, narrowing down configuration of instances to achieve more than 50% increase in gaming performance.</li>
                            <li>Participated in Apple Vision Pro app prototyping.</li>
                        </ul>
                        <p className="mt-2 text-gray-300">
                            <span className="font-semibold">Technologies:</span> AWS EC2 & CloudWatch, Python (Pandas, NumPy), Jupyter Notebook, Swift, Xcode, Unity
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
                            <span className="font-semibold">Administrative Intern - Insurance and Operations Support</span>
                        </p>
                        <ul className="list-disc pl-5 mt-2 text-lg text-gray-300">
                            <li>Assisted with database updates and validation of vehicle insurance records, ensuring 100% compliance with documentation standards.</li>
                            <li>Supported process automation by identifying bottlenecks in manual data entry, contributing to a proposed digitization workflow.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-4">
                <h2 className="text-2xl font-semibold text-white mb-4">Tech Stack</h2>
                <p className="text-lg text-gray-300">
                    <span className="font-semibold">Programming & Software:</span> JavaScript, Python, Swift, SQL, Figma, HTML, CSS, React.js, Node.js, APIs, Git
                </p>
                <p className="text-lg text-gray-300 mt-2">
                    <span className="font-semibold">Platforms:</span> Windows & OSX Operating Systems, Microsoft Office, Google Suite
                </p>
                <p className="text-lg text-gray-300 mt-2">
                    <span className="font-semibold">Languages:</span> English, Chinese
                </p>
            </section>

            <section className="py-4">
                <h2 className="text-2xl font-semibold text-white mb-6">Education</h2>
                
                {/* NTU Entry */}
                <div 
                    className={`flex gap-6 mb-8 timeline-item transition-all duration-700 ${
                        visibleItems.has('3') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    data-index="3"
                >
                    <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-indigo-400 rounded-full"></div>
                        <div className="w-0.5 h-full bg-gray-600 mt-2"></div>
                    </div>
                    <div className="flex-1 pb-8">
                        <h3 className="text-xl font-semibold text-white">Nanyang Technological University, Singapore <span className="text-sm text-gray-400">(Aug 2022 - Present)</span></h3>
                        <p className="text-lg text-gray-300 mt-2">
                            <span className="font-semibold">Bachelor of Engineering in Computer Science, 2nd Upper</span>
                        </p>
                        <ul className="list-disc pl-5 mt-2 text-lg text-gray-300">
                            <li>Software Engineering</li>
                            <li>Cloud Computing</li>
                            <li>Cyber Security</li>
                        </ul>
                    </div>
                </div>

                {/* KTH Entry */}
                <div 
                    className={`flex gap-6 mb-8 timeline-item transition-all duration-700 ${
                        visibleItems.has('4') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    data-index="4"
                >
                    <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-indigo-400 rounded-full"></div>
                        <div className="w-0.5 h-full bg-gray-600 mt-2"></div>
                    </div>
                    <div className="flex-1 pb-8">
                        <h3 className="text-xl font-semibold text-white">KTH Royal Institute of Technology, Stockholm, Sweden <span className="text-sm text-gray-400">(Jan 2025 - Jun 2025)</span></h3>
                        <p className="text-lg text-gray-300 mt-2">
                            <span className="font-semibold">School of Electrical Engineering and Computer Science</span>
                        </p>
                        <ul className="list-disc pl-5 mt-2 text-lg text-gray-300">
                            <li>Computer Security</li>
                            <li>Machine Learning and Natural Language Processing</li>
                            <li>Advanced Software Engineering</li>
                        </ul>
                    </div>
                </div>

                {/* ACJC Entry */}
                <div 
                    className={`flex gap-6 timeline-item transition-all duration-700 ${
                        visibleItems.has('5') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    data-index="5"
                >
                    <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-indigo-400 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white">Anglo-Chinese Junior College, Singapore <span className="text-sm text-gray-400">(Mar 2018 - Dec 2019)</span></h3>
                        <p className="text-lg text-gray-300 mt-2">
                            <span className="font-semibold">GCE A-Levels, 83.75/90</span>
                        </p>
                        <ul className="list-disc pl-5 mt-2 text-lg text-gray-300">
                            <li>Majored in Physics, Chemistry, Mathematics, and Economics</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
