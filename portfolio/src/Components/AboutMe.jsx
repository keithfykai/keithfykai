export function AboutMe() {
    return (
        <div className="max-w-4xl mx-auto px-6 pt-5">
            <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">About Me</h1>

            <p className="text-lg text-gray-700 mb-6">
                Hello! I'm Keith, currently a penultimate Computer Science student 🤓 studying at 
                Nanyang Technological University in Singapore 🇸🇬. I am passionate about many areas of tech, including mainly
                (but not limited to:) Full Stack Web Development 🥞 and Cloud Computing/Technologies ☁️.
            </p>

            <section className="py-4">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-4">💼 Internships / Work Experience</h2>
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">🛡️ Defence Science and Technology Agency (DSTA), Singapore <span className="text-sm text-gray-500">(May 2024 - Dec 2024)</span></h3>
                    <p className="text-lg text-gray-700 mt-2">
                        <span className="font-semibold">Cloud and Virtual Reality Software Development Intern</span>
                    </p>
                    <ul className="list-disc pl-5 mt-2 text-lg text-gray-700">
                        <li>Conducted in-depth data collection and performance benchmarking for XR cloud gaming applications deployed on AWS, contributing to optimization decisions and latency reduction strategies.</li>
                        <li>Utilized Python and Jupyter Notebook for analysis of large-scale experimental data, narrowing down configuration of instances to achieve more than 50% increase in gaming performance.</li>
                        <li>Participated in Apple Vision Pro app prototyping.</li>
                    </ul>
                    <p className="mt-2 text-gray-700">
                        <span className="font-semibold">Technologies:</span> AWS EC2 & CloudWatch, Python (Pandas, NumPy), Jupyter Notebook, Swift, Xcode, Unity
                    </p>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">🚗 Carro, Singapore <span className="text-sm text-gray-500">(Nov 2021 - Mar 2022)</span></h3>
                    <p className="text-lg text-gray-700 mt-2">
                        <span className="font-semibold">Administrative Intern - Insurance and Operations Support</span>
                    </p>
                    <ul className="list-disc pl-5 mt-2 text-lg text-gray-700">
                        <li>Assisted with database updates and validation of vehicle insurance records, ensuring 100% compliance with documentation standards.</li>
                        <li>Supported process automation by identifying bottlenecks in manual data entry, contributing to a proposed digitization workflow.</li>
                    </ul>
                </div>
            </section>

            <section className="py-4">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-4">🤖 Tech Stack</h2>
                <p className="text-lg text-gray-700">
                    <span className="font-semibold">Programming & Software:</span> JavaScript, Python, Swift, SQL, Figma, HTML, CSS, React.js, Node.js, APIs, Git
                </p>
                <p className="text-lg text-gray-700 mt-2">
                    <span className="font-semibold">Platforms:</span> Windows & OSX Operating Systems, Microsoft Office, Google Suite
                </p>
                <p className="text-lg text-gray-700 mt-2">
                    <span className="font-semibold">Languages:</span> English, Chinese
                </p>
            </section>

            <section className="py-4">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-4">📜 Education</h2>
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">🦁 Nanyang Technological University, Singapore <span className="text-sm text-gray-500">(Aug 2022 - Present)</span></h3>
                    <p className="text-lg text-gray-700 mt-2">
                        <span className="font-semibold">Bachelor of Engineering in Computer Science, 2nd Upper</span>
                    </p>
                    <ul className="list-disc pl-5 mt-2 text-lg text-gray-700">
                        <li>Software Engineering</li>
                        <li>Data Science and Artificial Intelligence</li>
                        <li>Expected Graduation: June 2026</li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">👑 KTH Royal Institute of Technology, Stockholm, Sweden <span className="text-sm text-gray-500">(Jan 2025 - Present)</span></h3>
                    <p className="text-lg text-gray-700 mt-2">
                        <span className="font-semibold">School of Electrical Engineering and Computer Science</span>
                    </p>
                    <ul className="list-disc pl-5 mt-2 text-lg text-gray-700">
                        <li>Computer Security</li>
                        <li>Machine Learning and Natural Language Processing</li>
                        <li>Advanced Software Engineering</li>
                    </ul>
                </div>

                <div className="">
                    <h3 className="text-xl font-semibold text-gray-800">❤️💙💛 Anglo-Chinese Junior College, Singapore <span className="text-sm text-gray-500">(Mar 2018 - Dec 2019)</span></h3>
                    <p className="text-lg text-gray-700 mt-2">
                        <span className="font-semibold">GCE A-Levels, 83.75/90</span>
                    </p>
                    <ul className="list-disc pl-5 mt-2 text-lg text-gray-700">
                        <li>Majored in Physics, Chemistry, Mathematics, and Economics</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
