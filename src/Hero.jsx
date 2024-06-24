import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
// import "./App.css";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold">Canvix</div>
        <button
          onClick={toggleMenu}
          className="md:hidden block text-xl focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-teal-400">
            Home
          </Link>
          <Link to="/about-us" className="hover:text-teal-400">
            About
          </Link>
          <Link to="/services" className="hover:text-teal-400">
            Services
          </Link>
          <Link to="/work-sample" className="hover:text-teal-400">
            Work Sample
          </Link>
        </nav>
        <Link to="/contactus">
          <button className="hidden md:block bg-white text-gray-900 px-4 py-2 rounded-full font-bold">
            Get in touch
          </button>
        </Link>
        <div
          className={`md:hidden absolute top-16 right-2 bg-gray-800 rounded-lg ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <nav className="flex flex-col space-y-4 p-4">
            <Link to="/" className="hover:text-teal-400">
              Home
            </Link>
            <Link to="/about-us" className="hover:text-teal-400">
              About
            </Link>
            <Link to="/services" className="hover:text-teal-400">
              Services
            </Link>
            <Link to="/work-sample" className="hover:text-teal-400">
              Work Sample
            </Link>
          </nav>
        </div>
      </header> */}

      {/* <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-4xl">
        <div className="px-4">
          <div className="flex items-center justify-between gap-5">
            <div className="flex justify-center items-center gap-3 shrink-0">
              <a aria-current="page" className="flex items-center" href="/">
                <img
                  className="h-8 w-auto rounded"
                  src="/instagram logo.jpg"
                  alt="Logo"
                />
              </a>
              <p className="text-black">Social Shine</p>
            </div>
            <div className=" md:hidden">
              <a
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                href="/login"
              >
                Get in Touch
              </a>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              <a
                aria-current="page"
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#"
              >
                About
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#"
              >
                Service
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#"
              >
                Portfolio
              </a>
            </div>
            <div className="hidden md:flex">
              <a
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                href="/login"
              >
                Get in Touch
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-900 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden mt-4 space-y-4 px-4 pb-4 text-center">
            <a
              aria-current="page"
              className="block rounded-lg px-2 py-3 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#"
            >
              About
            </a>
            <a
              className="block rounded-lg px-2 py-3 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#"
            >
              Service
            </a>
            <a
              className="block rounded-lg px-2 py-3 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 "
              href="#"
            >
              Portfolio
            </a>
          </div>
        )}
      </header> */}
      <Navbar />
      <main className="container mx-auto px-6 py-12 flex flex-col-reverse lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="lg:w-1/2 text-center lg:text-left space-y-6 py-11">
          <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold">
            Ready to take your{" "}
            <span className="text-teal-400">Business Growth</span> to the next
            level?
          </h1>
          <p className="text-gray-400 text-lg py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit– et ut massa
            libero egestas malesuada viverra gravida libero cursus nulla leo
            pulvinar.
          </p>
          <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold">
            Start your Free Trial
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative rounded-full overflow-hidden w-64 h-64 md:w-96 md:h-96 border-4 border-gray-700">
            <img
              src="./Ellipse 10.png"
              alt="Team working"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-6 pb-12">
        <div className="text-center text-gray-400">
          Trusted by Leading Brands
        </div>
        <div className="flex justify-center space-x-6 mt-4">
          <img
            src="https://via.placeholder.com/80x40"
            alt="Greenish"
            className="h-10"
          />
          <img
            src="https://via.placeholder.com/80x40"
            alt="Automation"
            className="h-10"
          />
          <img
            src="https://via.placeholder.com/80x40"
            alt="Leafe"
            className="h-10"
          />
        </div>
      </footer>
    </div>
  );
};

export default App;
