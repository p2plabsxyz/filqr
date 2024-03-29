import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import Logo from "../logo.png";

function Navbar({ network }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {network != "3141" ? (
        <div className="text-center w-full rounded-sm shadow-md p-2 bg-red-200">
          <p className="text-gray-600">
            ⚠️ Please switch your network to Filecoin's Hyperspace testnet &
            refresh the page.
          </p>
        </div>
      ) : (
        ""
      )}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center ml-8">
              <Link to="/">
                <span className="flex title-font font-medium items-center text-gray-900 md:mb-0">
                  <img
                    src={Logo}
                    alt="Logo"
                    className="w-12 h-12 p-1"
                  />
                  <code className="ml-2 text-xl">FilQR</code>
                </span>
              </Link>
              <div className="md:mr-auto md:ml-4 md:py-4 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center" />
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-4">
                  <Link to="/dashboard">
                    <button className="text-lg text-blue-500 hover:bg-gray-100 px-3 py-2 rounded-md font-medium">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="inline-flex mr-2 w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Dashboard
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <span className="md:ml-0 sm:ml-0 ml-14 inline-flex items-center animation-ping text-md text-blue-500 p-1 border border-blue-400 bg-blue-100 rounded-md">
              Filecoin testnet
            </span>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-300 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden ml-8" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/dashboard">
                  <button className="text-blue-500 hover:bg-gray-100 px-3 py-2 rounded-md font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="inline-flex mr-2 w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Dashboard
                  </button>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
export default Navbar;
