import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <section className="w-screen h-screen flex flex-col justify-between items-center font-sans gap-2 absolute inset-0 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <Navbar />
      <div className="mx-auto flex h-full w-screen max-w-screen-xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-prose flex-col items-center text-center">
          <img width={112} height={16} src="/users.webp" alt="RunJS Users" />
          <span className="mt-4 text-base text-gray-700">
            {'{ Trusted by 1K+ developers }'}
          </span>
          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            Master React & Javascript Programming with RunJS.in
          </p>
          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Learn, Practice & Compete
          </h1>
          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            Join millions of developers in learning in-demand programming
            languages, solving real-world problems, and excelling in coding
            competitions.
          </p>
          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <Link
              className="inline-block rounded-md border bg-black px-5 py-3 font-medium text-white shadow-sm transition-colors"
              to="/start"
            >
              Get Started
            </Link>
            <Link
              className="inline-block rounded-md border border-gray-200 bg-white px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
              to="/about"
            >
              About Us
            </Link>
          </div>
          <div className="flex gap-4 mt-5 justify-center">
            <Link to={'/js'}>
              <img
                src="/JavaScript.webp"
                alt="JavaScript Logo"
                className="w-10 h-10 mb-4 rounded-md"
              />
            </Link>
            <Link to={'/ts'}>
              <img
                src="/Typescript.webp"
                alt="Typescript Logo"
                className="w-10 h-10 mb-4"
              />
            </Link>
            <Link to={'/react'}>
              <img
                src="/React.svg"
                alt="React Logo"
                className="w-10 h-10 mb-4"
              />
            </Link>
          </div>
          <p className="mt-2 text-sm font-medium text-gray-700">
            RunJS.in is the foundation for mastering technical React &
            JavaScript coding interviews.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default HomePage;
