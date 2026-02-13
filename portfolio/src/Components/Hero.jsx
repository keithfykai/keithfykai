import mainphoto from '../assets/mainphoto.jpeg'
import { Link } from 'react-router-dom';

export function Hero() {
    return (
        <div className="relative isolate px-12 lg:px-8 py-20">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Left side - Photo and location */}
                    <div className="flex-shrink-0 text-center">
                        <div className="relative">
                            <img 
                                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-gray-600" 
                                src={mainphoto}
                                alt="Keith in Svalbard"
                            />
                        </div>
                        <p className="mt-4 text-sm text-gray-400">
                            📍 Svalbard, Longyearbyen<br />
                            (78.2253° N, 15.6256° E)
                        </p>
                    </div>

                    {/* Right side - Text content */}
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Welcome, I'm Keith
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl">
                            Thank you for visiting, I hope you enjoy your stay.
                        </p>
                        <div className="mt-8 flex items-center justify-center md:justify-start gap-x-6">
                            <Link to="/aboutme" className="rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors">
                                About Me
                            </Link>
                            <Link to="/contactme" className="text-sm font-semibold text-white hover:text-gray-300 transition-colors">
                                Contact Me<span aria-hidden="true"> →</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
