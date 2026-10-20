import { FaRobot, FaPlane, FaCompass } from 'react-icons/fa';

export function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 sm:mb-8">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

                {/* Educational Tutor Bot */}
        <div className="bg-surface border border-divider rounded-lg p-4 sm:p-6 hover:border-indigo-500 transition-colors">
          <div className="flex items-center gap-2 sm:gap-3 mb-3">
            <FaRobot className="text-accent text-2xl sm:text-3xl flex-shrink-0" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground leading-tight">
              <a href="https://eduble-zeta.vercel.app/" className="hover:text-accent transition-colors">Educational Tutor Bot</a>
            </h2>
          </div>
          <p className="italic text-sm text-subtle mb-1">Full Stack Developer (Jul 2025 - Present)</p>
          <ul className="list-disc list-inside text-muted">
            <li>Designed and built an AI-powered, syllabus-aligned educational tutor using a RAG pipeline with vector search and LLM integration.</li>
            <li>Implemented full-stack architecture with user authentication and session management.</li>
            <li>Deployed Next.js frontend on Vercel and Flask backend on Google Cloud using Docker and CI/CD pipelines.</li>
          </ul>
          <p className="mt-2 text-sm text-subtle">
            <strong>Tools:</strong> Next.js, Flask, TypeScript, Python, Firebase, OpenAI, Docker, GCP, GitHub Actions
          </p>
          <p className="mt-1 text-link hover:underline text-sm">
            GitHub Link: <span className="text-muted break-all"><a href="https://github.com/keithfykai/Final-Year-Project---Educational-Tutor-Bot">View on GitHub</a></span>
          </p>
        </div>

        {/* TravelLog */}
        <div className="bg-surface border border-divider rounded-lg p-4 sm:p-6 hover:border-indigo-500 transition-colors">
          <div className="flex items-center gap-2 sm:gap-3 mb-3">
            <FaPlane className="text-accent text-2xl sm:text-3xl flex-shrink-0" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground leading-tight">
              <a href="https://travel-log--xqwlt2zf11.expo.app" className="hover:text-accent transition-colors">TravelLog Mobile Application</a>
            </h2>
          </div>
          <p className="italic text-sm text-subtle mb-1">Team Lead / Full Stack Developer (Jan 2025 - Jun 2025)</p>
          <ul className="list-disc list-inside text-muted mb-1">
            <li>Spearheaded development of a travel journal app with built-in expense tracking and daily sentiment logging.</li>
            <li>Designed schema for real-time storage and retrieval of geo-tagged entries and budget summaries.</li>
          </ul>
          <p className="mt-2 text-sm text-subtle">
            <strong>Tools:</strong> React Native, JavaScript, Node.js, Firebase Auth, HTML/CSS, Figma, Redux, Redux Toolkit
          </p>
          <p className="mt-1 text-link hover:underline text-sm">
            GitHub Link: <span className="text-muted break-all">View on Github</span>
          </p>
        </div>

        {/* GoWhere */}
        <div className="bg-surface border border-divider rounded-lg p-4 sm:p-6 hover:border-indigo-500 transition-colors">
          <div className="flex items-center gap-2 sm:gap-3 mb-3">
            <FaCompass className="text-accent text-2xl sm:text-3xl flex-shrink-0" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground leading-tight">
              <a href="https://keithfykai.github.io/GoWhere/" className="hover:text-accent transition-colors">GoWhere Web Application</a>
            </h2>
          </div>
          <p className="italic text-sm text-subtle mb-1">Team Leader / Full Stack Developer (Aug 2023 - Dec 2023)</p>
          <ul className="list-disc list-inside text-muted mb-1">
            <li>Developed a location discovery platform with ranking algorithms based on user activity and preferences.</li>
            <li>Designed backend services to aggregate user interaction logs and generate personalized recommendations.</li>
          </ul>
          <p className="mt-2 text-sm text-subtle">
            <strong>Tools:</strong> React.js, Node.js, Firebase Auth and Firestore, HTML/CSS, Figma
          </p>
          <p className="mt-1 text-link hover:underline text-sm">
            GitHub Link: <span className="text-muted break-all"><a href="https://github.com/keithfykai/GoWhere">View on GitHub</a></span>
          </p>
        </div>

      </div>
    </div>
  );
}
