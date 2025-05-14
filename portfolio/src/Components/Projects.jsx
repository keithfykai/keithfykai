export function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-5">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">Projects</h1>

      <div className="space-y-12">
        {/* TravelLog */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
            <a href="https://travellog--i37vg7lzsi.expo.app">TravelLog Mobile Application</a>
          </h2>
          <p className="italic text-sm text-gray-500 mb-1">Team Lead / Full Stack Developer</p>
          <ul className="list-disc list-inside text-gray-700 mb-1">
            <li>Cross-platform travel journal app with daily logs, photos, notes, and expenses.</li>
            <li>Supports automatic currency conversion and trip timeline visualization.</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600">
            <strong>Tools:</strong> React Native, Node.js, Firebase, Firestore, Figma, React Native Paper
          </p>
          <p className="mt-1 text-blue-600 hover:underline">
            GitHub Link: <span className="text-gray-800">Coming Soon! (Still in Development)</span>
          </p>
        </div>

        {/* GoWhere */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
            <a href="https://keithfykai.github.io/GoWhere/">GoWhere Web Application</a>
          </h2>
          <p className="italic text-sm text-gray-500 mb-1">Team Leader / Full Stack Developer</p>
          <ul className="list-disc list-inside text-gray-700 mb-1">
            <li>Location-based travel app for discovering places in Singapore.</li>
            <li>Features live maps, real-time weather, user reviews, and personalized suggestions.</li>
            <li>Emphasizes ease of exploration and local discovery.</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600">
            <strong>Tools:</strong> React.js, Node.js, Firebase, TailwindCSS, Figma
          </p>
          <p className="mt-1 text-blue-600 hover:underline">
            GitHub Link: <span className="text-gray-800"><a href="https://github.com/keithfykai/GoWhere">https://github.com/keithfykai/GoWhere</a></span>
          </p>
        </div>

        {/* Final Year Project */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
            Final Year Project: Next-Gen Generative Search Engine for Code Base
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>A generative search engine using LLMs and GitHub API.</li>
            <li>Enables AI-assisted code discovery, evaluation, and recommendation.</li>
            <li>Explores LLM applications in software development, debugging, and optimization.</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600">
            <strong>Tools:</strong> Machine Learning, Mathematics, Fullstack Development
          </p>
          <p className="mt-1 text-blue-600 hover:underline">
            GitHub Link: <span className="text-gray-800">Coming Soon!</span>
          </p>
        </div>
      </div>
    </div>
  );
}
