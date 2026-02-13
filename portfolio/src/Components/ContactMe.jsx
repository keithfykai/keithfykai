import { FaGithub, FaLinkedin } from "react-icons/fa";

export function ContactMe() {
  return (
    <div id="contact-me" className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-white">Contact Me</h1>
      <div className="flex justify-center gap-8 sm:gap-12 md:gap-16">
        {/* GitHub */}
        <a
          href="https://github.com/keithfykai"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
        >
          <div className="bg-gray-700 text-white rounded-full p-4 sm:p-6 hover:bg-gray-600 transition-colors">
            <FaGithub className="text-3xl sm:text-4xl" />
          </div>
          <span className="mt-2 text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white">
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
          <div className="bg-blue-600 text-white rounded-full p-4 sm:p-6 hover:bg-blue-500 transition-colors">
            <FaLinkedin className="text-3xl sm:text-4xl" />
          </div>
          <span className="mt-2 text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white">
            LinkedIn
          </span>
        </a>
      </div>
    </div>
  );
}
