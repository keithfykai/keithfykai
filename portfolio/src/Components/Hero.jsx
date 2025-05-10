import mainphoto from '../assets/mainphoto.jpeg'
import { Link } from 'react-router-dom';

export function Hero() {
    return (
        <div className="relative isolate px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <img className="rounded-xl mx-auto h-130" src={mainphoto}/>
                <p className="p-5">📍 Svalbard, Longyearbyen (78.2253° N, 15.6256° E)</p>
                <div className="pt-5 text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Welcome, I'm Keith
                </div>
                <p className="mt-5 text-lg font-medium text-gray-500 sm:text-xl">
                    Thank you for visiting, I hope you enjoy your stay.
                </p>
                <div className="mt-6 flex items-center justify-center gap-x-6">
                    <Link to="/aboutme" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        About Me
                    </Link>
                    <Link to="/contactme" className="text-sm font-semibold text-gray-900">
                        Contact Me<span aria-hidden="true"> →</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
