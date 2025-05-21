import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function HomePage() {
    return (
        <section className='w-screen h-screen flex flex-col justify-between items-center font-sans gap-2'>
            <Navbar />
            <div className="flex w-100 items-center flex-col text-center">
                <img src="/runjs.in.webp" alt="RunJs Logo" className="w-24 h-24 mb-4 rounded-lg" />
                <h2 className="text-3xl sm:text-2xl font-bold">Powerfull JS/TS Online Compiler.</h2>
                <h2 className="text-3xl sm:text-2xl font-bold">Instant Browser-Based IDEs.</h2>
                <p className="text-xl sm:text-xl/relaxed">The easy-to-use and fast JavaScript compiler.<br />Write JavaScript code and run it online.<br />Save time & effort with live view results, ready-to-use templates!</p>
                <p className="text-xs font-semibold mt-2">* No registration or signup required</p>
                <div className="flex gap-4 mt-5 justify-center">
                    <Link to={"/js"}>
                        <img src="/JavaScript.webp" alt="JavaScript Logo" className="w-14 h-14 mb-4 rounded-lg" />
                    </Link>
                    <Link to={"/ts"}>
                        <img src="/Typescript.webp" alt="Typescript Logo" className="w-14 h-14 mb-4" />
                    </Link>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default HomePage