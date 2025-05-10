import { FaGithub, FaLinkedin } from "react-icons/fa";

export function ContactMe() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-5 text-center">
      <h1 className="text-4xl font-bold mb-12 text-gray-900">Contact Me</h1>
      <div className="flex justify-center gap-16">
        {/* GitHub */}
        <a
          href="https://github.com/keithfykai"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
        >
          <div className="bg-gray-900 text-white rounded-full p-6 hover:bg-gray-700 transition-colors">
            <FaGithub className="text-4xl" />
          </div>
          <span className="mt-2 text-sm font-medium text-gray-700 group-hover:text-gray-900">
            GitHub
          </span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/keith-lim-en-kai/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
        >
          <div className="bg-blue-600 text-white rounded-full p-6 hover:bg-blue-500 transition-colors">
            <FaLinkedin className="text-4xl" />
          </div>
          <span className="mt-2 text-sm font-medium text-gray-700 group-hover:text-gray-900">
            LinkedIn
          </span>
        </a>
      </div>
    </div>
  );
}
