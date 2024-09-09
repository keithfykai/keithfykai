import "./styles/Hero.css"
import eddy from '../assets/eddy.svg'
import { Link } from "react-router-dom"

export default function Hero(){
    return (
        <>
            <div className="bg-white">
                <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div className="style1"></div>
                </div>
                
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <img className="mx-auto py-4" src={eddy} alt="eddy the mascot (My icon)" />
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    

                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Currently up to: <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Hello! I'm Keith 👋</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        I'm a 3rd Year Computer Science Undergraduate studying at Nanyang Technological University (NTU) and 
                        am passionate in all things tech! This guy you see here is a mascot I designed during a hackathon
                        and have now adopted him. :D
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Contact Me
                    </a>
                    <a href="/aboutme" className="text-sm font-semibold leading-6 text-gray-900">About Me 
                        <span aria-hidden="true">→</span></a>
                    </div>
                </div>
                </div>
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                <div className="style2"></div>
                </div>
            </div>
            </div>
        </>
    )
}

