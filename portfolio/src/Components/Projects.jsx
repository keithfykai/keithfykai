import { FaRobot, FaPlane, FaCompass } from 'react-icons/fa';

export function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-extrabold text-white mb-8">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Educational Tutor Bot */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-indigo-500 transition-colors">
          <div className="flex items-center gap-3 mb-3">
            <FaRobot className="text-indigo-400 text-3xl flex-shrink-0" />
            <h2 className="text-2xl font-semibold text-white">
              <a href="https://eduble-zeta.vercel.app/" className="hover:text-indigo-400 transition-colors">Educational Tutor Bot</a>
            </h2>
          </div>
          <p className="italic text-sm text-gray-400 mb-1">Full Stack Developer (Jul 2025 - Present)</p>
          <ul className="list-disc list-inside text-gray-300">
            <li>Designed and built an AI-powered, syllabus-aligned educational tutor using a RAG pipeline with vector search and LLM integration.</li>
            <li>Implemented full-stack architecture with user authentication and session management.</li>
            <li>Deployed Next.js frontend on Vercel and Flask backend on Google Cloud using Docker and CI/CD pipelines.</li>
          </ul>
          <p className="mt-2 text-sm text-gray-400">
            <strong>Tools:</strong> Next.js, Flask, TypeScript, Python, Firebase, OpenAI, Docker, GCP, GitHub Actions
          </p>
          <p className="mt-1 text-blue-400 hover:underline">
            GitHub Link: <span className="text-gray-300"><a href="https://github.com/keithfykai/Final-Year-Project---Educational-Tutor-Bot">https://github.com/keithfykai/Final-Year-Project---Educational-Tutor-Bot</a></span>
          </p>
        </div>

        {/* TravelLog */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-indigo-500 transition-colors">
          <div className="flex items-center gap-3 mb-3">
            <FaPlane className="text-indigo-400 text-3xl flex-shrink-0" />
            <h2 className="text-2xl font-semibold text-white">
              <a href="https://travel-log--xqwlt2zf11.expo.app" className="hover:text-indigo-400 transition-colors">TravelLog Mobile Application</a>
            </h2>
          </div>
          <p className="italic text-sm text-gray-400 mb-1">Team Lead / Full Stack Developer (Jan 2025 - Jun 2025)</p>
          <ul className="list-disc list-inside text-gray-300 mb-1">
            <li>Spearheading development of a travel journal app with built-in expense tracking and daily sentiment logging.</li>
            <li>Designed schema for real-time storage and retrieval of geo-tagged entries and budget summaries.</li>
          </ul>
          <p className="mt-2 text-sm text-gray-400">
            <strong>Tools:</strong> React Native, JavaScript, Node.js, Firebase Auth, HTML/CSS, Figma, Redux, Redux Toolkit
          </p>
          <p className="mt-1 text-blue-400 hover:underline">
            GitHub Link: <span className="text-gray-300">https://github.com/keithfykai/TravelLog</span>
          </p>
        </div>

        {/* GoWhere */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-indigo-500 transition-colors">
          <div className="flex items-center gap-3 mb-3">
            <FaCompass className="text-indigo-400 text-3xl flex-shrink-0" />
            <h2 className="text-2xl font-semibold text-white">
              <a href="https://keithfykai.github.io/GoWhere/" className="hover:text-indigo-400 transition-colors">GoWhere Web Application</a>
            </h2>
          </div>
          <p className="italic text-sm text-gray-400 mb-1">Team Leader / Full Stack Developer (Aug 2023 - Dec 2023)</p>
          <ul className="list-disc list-inside text-gray-300 mb-1">
            <li>Developed a location discovery platform with ranking algorithms based on user activity and preferences.</li>
            <li>Designed backend services to aggregate user interaction logs and generate personalized recommendations.</li>
          </ul>
          <p className="mt-2 text-sm text-gray-400">
            <strong>Tools:</strong> React.js, Node.js, Firebase Auth and Firestore, HTML/CSS, Figma
          </p>
          <p className="mt-1 text-blue-400 hover:underline">
            GitHub Link: <span className="text-gray-300"><a href="https://github.com/keithfykai/GoWhere">https://github.com/keithfykai/GoWhere</a></span>
          </p>
        </div>

      </div>
    </div>
  );
}
