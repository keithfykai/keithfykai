export function Projects() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-5">
            <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">Projects</h1>
    
            <div className="space-y-12">
            {/* TravelLog */}
                <div>
                    <h2 className="text-2xl font-semibold text-indigo-700 mb-2">TravelLog Mobile Application</h2>
                    <p className="italic text-sm text-gray-500 mb-1">Team Lead / Full Stack Developer</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Spearheading development of a travel journal app with built-in expense tracking and daily sentiment logging.</li>
                    <li>Designed schema for real-time storage and retrieval of geo-tagged entries and budget summaries.</li>
                    </ul>
                    <p className="mt-2 text-sm text-gray-600"><strong>Tools:</strong> React Native, Node.js, Firestore, Firebase Auth, Figma</p>
                    <p className="mt-1 text-blue-600 hover:underline">GitHub Link: <span className="text-gray-800">placeholder</span></p>
                </div>
        
                {/* GoWhere */}
                <div>
                    <h2 className="text-2xl font-semibold text-indigo-700 mb-2">GoWhere Web Application</h2>
                    <p className="italic text-sm text-gray-500 mb-1">Team Leader / Full Stack Developer</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Developed a location discovery platform with ranking algorithms based on user activity and preferences.</li>
                    <li>Designed backend services to aggregate user interaction logs and generate personalized recommendations.</li>
                    </ul>
                    <p className="mt-2 text-sm text-gray-600"><strong>Tools:</strong> React.js, Node.js, Firebase, HTML/CSS</p>
                    <p className="mt-1 text-blue-600 hover:underline">GitHub Link: <span className="text-gray-800">placeholder</span></p>
                </div>
        
                {/* Final Year Project */}
                <div>
                    <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Final Year Project: Next-Gen Generative Search Engine for Code Base</h2>
                    <p className="text-gray-700">
                    This project explores the theory and algorithm design of AI-native Large Language Models (LLM) like ChatGPT to develop
                    a next-generation generative search engine for source code. By leveraging the GitHub API and LLMs for automated evaluation,
                    the system aims to enhance code discovery, analysis, and recommendation. Applications include AI-assisted software development,
                    debugging, and optimization.
                    </p>
                    <p className="mt-2 text-sm text-gray-600"><strong>Requirements:</strong> Strong skills in Machine Learning, mathematics, and full-stack development (Node.js)</p>
                    <p className="mt-1 text-blue-600 hover:underline">GitHub Link: <span className="text-gray-800">placeholder</span></p>
                </div>
            </div>
        </div>
    );
  }
  