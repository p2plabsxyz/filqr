import React from "react";
import { Link } from "react-router-dom";

function QrCodeTypes() {
  return (
    <div>
      <section className="section text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-2">
              First ever decentralized QR Code generator!
            </h1>
            <p className="text-base text-gray-500 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-6">
              Powered by Filecoin and ⁂ web3.storage
            </p>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Select your QR Code type 👇
            </p>
          </div>
          <div className="flex flex-wrap lg:w-3/6 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <Link to="/text">
                <div className="bg-white rounded border border-gray-300 hover:border-blue-300 flex p-4 h-full items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                  <span className="title-font font-bold">Text</span>
                </div>
              </Link>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <Link to="/socialmedia">
                <div className="bg-white rounded border border-gray-300 hover:border-blue-300 flex p-4 h-full items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
                    />
                  </svg>

                  <span className="title-font font-bold">Social Media</span>
                </div>
              </Link>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <Link to="/vcard">
                <div className="bg-white rounded border border-gray-300 hover:border-blue-300 flex p-4 h-full items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                    />
                  </svg>

                  <span className="title-font font-bold">vCard</span>
                </div>
              </Link>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <Link to="/coupons">
                <div className="bg-white rounded border border-gray-300 hover:border-blue-300 flex p-4 h-full items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                    />
                  </svg>

                  <span className="title-font font-bold">Coupons</span>
                </div>
              </Link>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <Link to="/mp3">
                <div className="bg-white rounded border border-gray-300 hover:border-blue-300 flex p-4 h-full items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                    />
                  </svg>

                  <span className="title-font font-bold">Mp3</span>
                </div>
              </Link>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <Link to="/video">
                <div className="bg-white rounded border border-gray-300 hover:border-blue-300 flex p-4 h-full items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  >
                    <path
                      stroke-linecap="round"
                      d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>

                  <span className="title-font font-bold">Video</span>
                </div>
              </Link>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <Link to="/apps">
                <div className="bg-white rounded border border-gray-300 hover:border-blue-300 flex p-4 h-full items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>

                  <span className="title-font font-bold">App</span>
                </div>
              </Link>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <Link to="/docs">
                <div className="bg-white rounded border border-gray-300 hover:border-blue-300 flex p-4 h-full items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>

                  <span className="title-font font-bold">Docs</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default QrCodeTypes;
