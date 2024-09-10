import "./styles/Hero.css"
import eddy from '../assets/eddy.svg'
import profilephoto from "../assets/profilephoto.jpeg"
import { Link } from "react-router-dom"

export default function Hero(){
    return (
        <>
            <div className="bg-white">
                <div className="relative isolate px-6 lg:px-8">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div className="style1"></div>
                </div>
                
                <div className="mx-auto max-w-2xl py-26 sm:py-32 lg:py-48">
                    <img className="mx-auto py-4" src={eddy} alt="eddy the mascot (My icon)" />
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    

                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Currently up to: <a href="#" className="font-semibold text-indigo-600">
                        <span className="absolute inset-0" aria-hidden="true"></span>Internship! <span aria-hidden="true">&rarr;</span></a>
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

            <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Tech Enthusiast</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Aspiring Programmer</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    I love learning about innovative and interesting new 
                    technologies that can help improve the quality and accessibility of the world around us.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                        <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                        </svg>
                        Proficiencies:
                    </dt>
                    <dd className="inline"> Python, React.js, JavaScript, HTML5, CSS</dd>
                    </div>
                    <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                        <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                        </svg>
                        Certifications: 
                    </dt>
                    <dd className="inline"> Amazon Web Services (AWS) Cloud Essentials</dd>
                    </div>
                    <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                        <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                        <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
                        </svg>
                        Education:
                    </dt>
                    <dd className="inline"> B.Comp (Computer Science), Nanyang Technological University (NTU), Est. 2026</dd>
                    </div>
                </dl>
                </div>
            </div>
            <img src={profilephoto} alt="Product screenshot" className="w-[32-rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"/>
            </div>
        </div>
        </div>

        </>
    )
}

