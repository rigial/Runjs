import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import { packageList } from "../utils/masterData"

function AboutPage() {
    return (
        <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <Navbar />
            <h1 className="my-4 text-xl font-medium">RunJS Author - Links</h1>
            <Link target="_blank" to={"https://www.linkedin.com/in/mrkishorekumar/"} className="mb-4 font-sans mr-3 text-blue-700">LinkedIn</Link>
            <Link target="_blank" to={"https://github.com/mrkishorekumar"} className="mb-4 font-sans mr-3 text-blue-700">GitHub</Link>
            <Link target="_blank" to={"http://youtube.com/mrkishorekumar?sub_confirmation=1"} className="mb-4 font-sans text-blue-700">YouTube</Link>

            <h1 className="my-4 text-xl font-medium">The Story Behind RunJS</h1>
            <p className="mb-4 font-sans">RunJS began its journey in 2023 when I was inspired by CodePen—a platform where users could compile HTML, CSS, and JavaScript online. CodePen allowed users to save and share their creations with friends and colleagues, and by 2025, it had evolved into a kind of social media hub for frontend developers. Back then, I was working as a frontend web developer and had a growing interest in building a similar platform.</p>
            <p className="mb-4 font-sans">That’s when I started working on my initial version of what I called "WebDJ." For the frontend, I chose React, paired it with Express.js for the backend, and used MongoDB as the database. With a minimalistic UI, I completed the project in just one month. The platform used an iframe to render the code that users wrote in the IDE. Everything seemed perfect, but I hit a roadblock when trying to capture console.log outputs from the browser. Capturing logs would have added a vital feature, making the platform feel like a complete online IDE. At the time, I was still an intern, with limited experience and no ChatGPT to turn to for assistance.</p>
            <p className="mb-4 font-sans">A few months later, I decided to migrate the project to TypeScript and Firebase. However, due to my increasing workload, the migration was paused.</p>
            <p className="mb-4 font-sans">Fast forward to October 2024, I revisited the idea of capturing console.log outputs. Armed with helpful blogs and ChatGPT, I finally overcame the challenge. This time, instead of replicating CodePen, I envisioned a platform where users could write and execute both JavaScript and TypeScript code directly in the browser, with no backend dependencies. I named it RunJS (since the .com domain wasn’t available, I went with runjs.in) and hosted the platform under my freelance company’s domain as runjs.rigial.com. Later, I integrated Firebase, enabling users to save and retrieve their code effortlessly.</p>
            <p className="mb-4 font-sans">By December 2024, I discovered several bugs in the system. Instead of patching them, I decided to rebuild the platform from scratch, adhering to modern coding standards and fully leveraging React and Web APIs. The result is the platform you’re now using, and you’re reading this on its About page.</p>
            <p className="mb-4 font-sans underline">In the future, we plan to integrate a dedicated database solution to enable users to store their code securely in the cloud. This will ensure that their projects are accessible from anywhere, offering even greater flexibility and convenience for developers.</p>

            <h1 className="my-4 text-xl font-medium">RunJS Dependencies</h1>
            <div className="overflow-x-auto mb-6 text-black">
                <table className="min-w-full divide-y-[1px] border-black text-sm border-collapse border">
                    <thead>
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium border-[2px] border-black">Dependency</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium border-[2px] border-black">Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            packageList.map((val, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="whitespace-nowrap px-4 py-2 border-[2px] border-black">
                                            <a href={val.packageLink} target="_blank" rel="noopener noreferrer">{val.packageName}</a>
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 border-[2px] border-black">{val.packageDescription}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </section>
    )
}

export default AboutPage