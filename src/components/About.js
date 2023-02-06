import React from "react";

function About() {
  return (
    <div className="section">
      {/* Intro */}
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-8 py-8 lg:px-28 lg:py-20 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">
              Billions of QR Codes are scanned each day!
            </h1>
            <h2 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Grow your business with <code>FilQr</code>.
            </h2>
            <h3 class="text-lg mb-2">Generate decentralized QR Codes in seconds using our customizable templates such as text, social media, vCards, coupons, mp3, video, documents, etc.</h3>
            <p class="flex items-center text-gray-600 mb-2">
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-400 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Decentralized
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-400 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Immutable
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-400 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              User-controllable
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-400 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Super-cheap
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://w3s.link/ipfs/bafkreieaz4igao4jmdrxhnrzj2u4p63wtteqc5d3m5zsubtyttqvq3nrni/"
            />
          </div>
        </div>
      </section>
      {/* QR Code types */}
      <section class="text-gray-600 body-font">
        <div class="container lg:px-16 px-6 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-14">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              QR Code Examples
            </h1>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div class="block relative h-48 rounded border bg-white overflow-hidden">
                <img
                  alt="Billboards"
                  class="object-cover object-center w-full h-full block"
                  src="https://w3s.link/ipfs/bafkreic6crtxi6vu36cnqw6a5xk5olfnnqdm2ukova7cuwr74w6iexmkcy/"
                />
              </div>
              <div class="mt-4">
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  Billboards
                </h2>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div class="block relative h-48 rounded border bg-white overflow-hidden">
                <img
                  alt="Vehicles"
                  class="object-cover object-center w-full h-full block"
                  src="https://w3s.link/ipfs/bafkreicfyw63srwi5qr4pmlqnsfycuq7eqg6yjem25ptcepox3uqxmt5oa/"
                />
              </div>
              <div class="mt-4">
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  Vehicles
                </h2>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div class="block relative h-48 rounded border bg-white overflow-hidden">
                <img
                  alt="Billboards"
                  class="object-cover object-center w-full h-full block"
                  src="https://w3s.link/ipfs/bafkreiez5fawcurhfzuyemcb2cndmy4qeojvlcxhbbjw66dvcttymaeuc4/"
                />
              </div>
              <div class="mt-4">
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  Tickets
                </h2>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div class="block relative h-48 rounded border bg-white overflow-hidden">
                <img
                  alt="Websites"
                  class="object-cover object-center w-full h-full block"
                  src="https://w3s.link/ipfs/bafkreibigffjebaq4l2265rhmv4gfbqxscd2ew6plxkh67yfh7ugmag5n4/"
                />
              </div>
              <div class="mt-4">
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  Websites
                </h2>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div class="block relative h-48 rounded border bg-white overflow-hidden">
                <img
                  alt="Food packaging"
                  class="object-cover object-center w-full h-full block"
                  src="https://w3s.link/ipfs/bafkreiccytiw3udiusgjwhntbt7stritbasmk2v4xp6zyhffmyd2dnhmny/"
                />
              </div>
              <div class="mt-4">
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  Food Packaging
                </h2>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div class="block relative h-48 rounded border bg-white overflow-hidden">
                <img
                  alt="Product Packaging"
                  class="object-cover object-center w-full h-full block"
                  src="https://w3s.link/ipfs/bafkreihkshfhtqdgyhmu5fgumcsbkhvxt34lpoulau6tgdvrmm44xpgbiu/"
                />
              </div>
              <div class="mt-4">
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  Product Packaging
                </h2>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div class="block relative h-48 rounded border bg-white overflow-hidden">
                <img
                  alt="Labels"
                  class="object-cover object-center w-full h-full block"
                  src="https://w3s.link/ipfs/bafkreiafqez3knckbldvt6fddxocxlx3s4tymjyf2wi3zfhpuzfp3uq4ra/"
                />
              </div>
              <div class="mt-4">
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  Labels
                </h2>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div class="block relative h-48 rounded border bg-white overflow-hidden">
                <img
                  alt="Badges"
                  class="object-cover object-center w-full h-full block"
                  src="https://w3s.link/ipfs/bafkreibf2x4f4xrsgfottgrwchhltim7c5pcoxejf5omfrd2t4yiphtenu/"
                />
              </div>
              <div class="mt-4">
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  Badges
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing */}
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container lg:px-20 px-6 py-28 mb-28 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Coming soon!
            </h1>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-blue-400 hover:border-blue-300 cursor-pointer flex flex-col relative overflow-hidden">
                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                  GUEST
                </h2>
                <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                  Free
                </h1>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  1 Dynamic QR Code
                </p>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  10000 Scans
                </p>
              </div>
            </div>
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-blue-400 hover:border-blue-300 cursor-pointer flex flex-col relative overflow-hidden">
                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                  START
                </h2>
                <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$5 FIL</span>
                  <span class="text-lg ml-1 font-normal text-gray-500">
                    /mo
                  </span>
                </h1>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  25 Dynamic QR Codes
                </p>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Unlimited scans
                </p>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  100 Bulk Creation
                </p>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  1 User
                </p>
              </div>
            </div>
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-blue-400 hover:border-blue-300 cursor-pointer flex flex-col relative overflow-hidden">
                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                  PRO
                </h2>
                <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$10 FIL</span>
                  <span class="text-lg ml-1 font-normal text-gray-500">
                    /mo
                  </span>
                </h1>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  50 Dynamic QR Codes
                </p>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Unlimited scans
                </p>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  200 Bulk Creation
                </p>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  2 Users
                </p>
              </div>
            </div>
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-blue-400 hover:border-blue-300 cursor-pointer flex flex-col relative overflow-hidden">
                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                  BUSINESS
                </h2>
                <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$x FIL</span>
                  <span class="text-lg ml-1 font-normal text-gray-500">
                    /mo
                  </span>
                </h1>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  x Dynamic QR Codes
                </p>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Unlimited scans
                </p>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  x Bulk Creation
                </p>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  x Users
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
