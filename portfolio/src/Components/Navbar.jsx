import Eddy from "../assets/Eddy.png"
import { Link } from "react-router-dom"

export function Navbar(){
    return (
        <header>
            <nav className="mx-auto flex max-w-7xl items-center justify-between py-4 px-8" aria-label="Global">
                <div className="flex-1">
                    <img className="h-12 w-auto" src={Eddy} alt="eddy the mascot (i made him during a hackathon) :D"/>
                </div>
                <div className="flex gap-x-12">
                    <Link to="/keithfykai/" className="text-sm/6 font-semibold text-decoration-none">Home</Link>
                    <Link to="/aboutme" className="text-sm/6 font-semibold text-decoration-none">About Me</Link>
                    <Link to="/projects" className="text-sm/6 font-semibold text-decoration-none">Projects</Link>
                    <Link to="/contactme" className="text-sm/6 font-semibold text-decoration-none">Contact Me</Link>
                </div>
                <div className="flex-1 justify-end"></div>
            </nav>
        </header>
    )
}
