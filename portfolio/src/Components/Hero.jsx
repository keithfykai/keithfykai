import mainphoto from '../assets/mainphoto.jpeg'

export function Hero() {
    return (
        <div className="relative isolate px-12 py-25">
            <div className="mx-auto max-w-6xl px-12">
                <div className="flex flex-col md:flex-row items-center gap-35">
                    {/* Left side - Photo and location */}
                    <div className="flex-shrink-0 text-center">
                        <div className="relative inline-block">
                            {/* Rotating dots border */}
                            <div className="absolute inset-0 rounded-full border-4 border-dashed border-white animate-spin" style={{ padding: '1rem', animationDuration: '80s' }}></div>
                            
                            {/* Profile photo */}
                            <div className="relative m-4">
                                <img 
                                    className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-8 border-gray-600" 
                                    src={mainphoto}
                                    alt="Keith in Svalbard"
                                />
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-white">
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
                            Check out what I've been working on below.
                        </p>
                        <div className="mt-8 flex items-center justify-center md:justify-start gap-x-6">
                            <a href="#about-me" className="rounded-4xl bg-cyan-200 px-4 py-3 text-sm font-semibold text-black shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors">
                                About Me
                            </a>
                            <a href="#contact-me" className="text-sm font-semibold text-white hover:text-gray-300 transition-colors">
                                Contact Me<span aria-hidden="true"> →</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
