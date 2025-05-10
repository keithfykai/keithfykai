export function Footer() {
    return (
      <footer className="bg-gray-100 text-gray-700 mt-20 px-6 py-10 text-center border-t border-gray-200">
        <p className="text-sm mb-2">
          Proudly made in Singapore 🇸🇬
        </p>
        <p className="text-xs mb-4">
          The buddy at the top left-hand corner is a mascot I created during a hackathon 🫶
        </p>
        <div className="flex justify-center gap-4 mb-4">
          <a
            href="https://github.com/keithfykai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/keith-lim-en-kai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Keith Lim | Built using Vite ⚡ and ReactJS ⚛️, hosted on Github Pages 🐱</p>
      </footer>
    );
  }
  