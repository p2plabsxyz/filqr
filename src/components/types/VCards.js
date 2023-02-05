import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Web3Storage } from "web3.storage";
import QRCodeStyling from "qr-code-styling";
import MoonLoader from "react-spinners/MoonLoader";
import BeatLoader from "react-spinners/BeatLoader";

const token = process.env.REACT_APP_WEB3STORAGE_API_TOKEN;
const client = new Web3Storage({ token });

const qrCode = new QRCodeStyling({
  width: 200,
  height: 200,
  image:
    "https://dweb.link/ipfs/bafkreighfcmuaykmlfmcgrztp7luxb6lpkwuvyxhxw7sqtagkwmpq6yale/",
  dotsOptions: {
    color: "#000000",
    type: "extra-rounded",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 3,
  },
});

function VCard(
  isConnected,
  accountAddress,
  connectWallet,
  walletStatus,
  QrCodeContract
) {
  const qrRef = useRef(null);
  const [header, setHeader] = useState("#Name");
  const [position, setPosition] = useState("#Position");
  const [about, setAbout] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [company, setCompany] = useState(null);
  const [location, setLocation] = useState(null);
  const [profileImageLink, setProfileImageLink] = useState(null);
  const [color, setColor] = useState("#3B82F6");
  const [cid, setCid] = useState(null);
  const [link, setLink] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingProfileImage, setLoadingProfileImage] = useState(false);

  async function handleProfileImageChange() {
    setLoadingProfileImage(true);
    const profileImageInput = document.getElementById("profileimage");
    const profileImageCid = await client.put(profileImageInput.files, {
      wrapWithDirectory: false,
    });
    setProfileImageLink(`https://dweb.link/ipfs/${profileImageCid}/`);
    setLoadingProfileImage(false);
  }

  async function handleData(e) {
    e.preventDefault();
    setLoading(true);
    const blob = new Blob(
      [
        `<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <title>vCard</title> <style> html, body { background-color: white; margin: auto; overflow-x: hidden; color: black; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; } .header { padding-top: 1.5rem; padding-bottom: 1.5rem; margin-bottom: 4rem; color: #ffffff; text-align: center; background-color: ${color}; } h1 { margin-bottom: 1rem; font-size: 1.5rem; line-height: 2rem; font-weight: 500px; text-align: center; } .about { margin-left: auto; margin-right: auto; padding-left: 1rem; padding-right: 1rem; font-size: 1rem; line-height: 1.625; } .main { padding-left: 2rem; padding-right: 2rem; text-align: center; align-items: center; margin-left: -0.5rem; margin-right: -0.5rem; box-sizing: border-box; margin-bottom: 3rem; } .vcard-div { padding: 0.5rem; width: 100%; } .link { display: flex; padding: 1rem; background-color: #f3f4f6; border: 1px solid #e5e7eb; text-align: left; align-items: left; height: 100%; border-radius: 0.25rem; border-width: 1px; } .link:hover { border-color: #c8d3dc; } .link-name { color: black; font-weight: 500px; text-decoration: none; } svg { margin-right: 1rem; color: ${color}; flex-shrink: 0; width: 1.5rem; height: 1.5rem; } img { margin-top: 1rem; object-fit: cover; object-position: center; border-radius: 50%; box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); } /* Small (sm) */ @media (min-width: 640px) { h1 { font-size: 1.875rem; line-height: 2.25rem; } .main { margin-bottom: 3rem; margin-left: auto; margin-right: auto; } .vcard-div { width: 50%; } } /* Medium (md) */ @media (min-width: 768px) { } /* Large (lg) */ @media (min-width: 1024px) { .about { width: 50%; } .main { margin-bottom: 3rem; width: 66%; } } /* Extra Large (xl) */ @media (min-width: 1280px) { .about { width: 75%; } } </style> </head> <body> <section> <div> <div class="header"> <img width="100" src="${profileImageLink == null ? "https://w3s.link/ipfs/bafkreignw6zfdikvtzb66pbqxdhip74nhthgfxnjlpgejrc5uuey4adt3a/" : profileImageLink}" /> <h1>${header}</h1> <p class="about">${position}</p> </div> <div class="main"> <center> ${about == null ? "" : ` <div class="vcard-div"> <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16"> <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/> <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/> </svg> <span>${about}</span> </div> </div> `} ${phone == null ? "" : ` <div class="vcard-div"> <a class="link-name" href="tel:${phone}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16"> <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/> </svg> <span>${phone}</span> </div> </a> </div> `} ${email == null ? "" : ` <div class="vcard-div"> <a class="link-name" href="mailto:${email}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16"> <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/> </svg> </svg> <span>${email}</span> </div> </a> </div> `} ${company == null ? "" : ` <div class="vcard-div"> <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16"> <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/> </svg> <span>${company}</span> </div> </div> `} ${location == null ? "" : ` <div class="vcard-div"> <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16"> <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/> <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/> </svg> <span>${location}</span> </div> </div> `} </center> </div> </div> </section> </body> </html> `,
      ],
      { type: "text/html" }
    );
    const file = [new File([blob], "index.html")];
    const cid = await client.put(file, { wrapWithDirectory: false });
    setCid(cid);
    setLink(`https://dweb.link/ipfs/${cid}/`);
    setLoading(false);
  }

  useEffect(() => {
    qrCode.update({
      data: link,
    });
    qrCode.append(qrRef.current);
  }, [link]);

  function download() {
    qrCode.download({ name: "FilQR", extension: "png" });
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <section className="section text-gray-600 body-font">
        <div className="container mx-auto flex px-44 py-32 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <Link to="/">
              <button className="mb-14 inline-flex focus:outline-none text-gray-500 hover:text-blue-600 rounded text-md">
                Home
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 ml-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                  />
                </svg>
              </button>
            </Link>
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              vCard
            </h1>
            <p class="block mt-2 text-sm font-medium text-gray-600">
              Create your decentralized identity.
            </p>
            <form onSubmit={handleData}>
              <label className="block mt-6 text-sm font-medium text-gray-600">
                📸 Profile picture (100x100)*
              </label>
              <input
                type="file"
                id="profileimage"
                accept="image/*"
                onChange={handleProfileImageChange}
                className="inline-flex mt-2 w-80 bg-white cursor-pointer rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
              {loadingProfileImage != false ? (
                <BeatLoader
                  color={"#3B82F6"}
                  className="ml-1 mt-1 inline-flex"
                  loading={true}
                  size={10}
                  speedMultiplier="1"
                />
              ) : (
                ""
              )}
              <input
                type="text"
                value={header}
                maxLength="30"
                onChange={(e) => setHeader(e.target.value)}
                placeholder="Name (max length 30 chars)"
                className="mt-2 w-80 bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
              <input
                type="text"
                value={position}
                maxLength="30"
                onChange={(e) => setPosition(e.target.value)}
                placeholder="Position (max length 50 chars)"
                className="mt-2 w-80 bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
              <label
                htmlFor="color"
                class="block mt-2 mb-2 text-sm font-medium text-gray-600"
              >
                🌈 Choose a theme color:
              </label>

              <select
                id="color"
                onChange={(e) => setColor(e.target.value)}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5"
              >
                <option value="#3B82F6">Blue 🔵</option>
                <option value="#EF4444">Red 🔴</option>
                <option value="#10B981">Green 🟢</option>
                <option value="#F59E0B">Yellow 🟡</option>
                <option value="#6366F1">Purple 🟣</option>
                <option value="#000000">Black ⚫️</option>
              </select>
              <label class="block mt-4 text-sm font-medium text-gray-600">
                📞 Enter your information:
              </label>
              <textarea
                type="text"
                value={about}
                maxLength="200"
                onChange={(e) => setAbout(e.target.value)}
                placeholder="About (max length 200 chars)"
                className="resize-y mt-2 w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone: xxx-xxxx-xxx"
                className="mt-2 w-80 bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                className="mt-2 w-80 bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company"
                className="mt-2 w-80 bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <textarea
                type="text"
                value={location}
                maxLength="200"
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location (max length 200 chars)"
                className="resize-y mt-2 w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <div className="block mt-8 justify-center">
                <button
                  type="submit"
                  className="inline-flex text-white font-bold bg-blue-500 border-0 py-1 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
                >
                  GENERATE
                  {loading != false ? (
                    <MoonLoader
                      color={"#ffffff"}
                      className="ml-2"
                      loading={true}
                      size={20}
                      speedMultiplier="1"
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 ml-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </form>
          </div>
          <div className="p-2 h-full sm:pt-72 sm:border-l border-gray-200 text-center"></div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 ">
            <center>
              {link != null ? (
                <>
                  <div ref={qrRef} />
                  <button
                    onClick={download}
                    className="mt-4 inline-flex text-white font-bold bg-blue-500 border-0 py-1 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
                  >
                    DOWNLOAD
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 ml-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                  </button>
                  <p className="mt-4 truncate w-[300px]">
                    {cid != null ? cid : "CID: #######################"}
                  </p>
                  <p className="mt-4 truncate w-[300px] text-blue-500">
                    <a
                      className="decoration-dotted underline hover:no-underline"
                      href={link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {link != null ? link : "URL: #######################"}
                    </a>
                  </p>
                  <button
                    className="mt-8 mr-6 inline-flex focus:outline-none text-gray-500 hover:text-blue-600 rounded text-md"
                    onClick={refreshPage}
                  >
                    New
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  </button>
                  <Link to="/">
                    <button className="mt-4 inline-flex focus:outline-none text-gray-500 hover:text-blue-600 rounded text-md">
                      Home
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 ml-1"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                        />
                      </svg>
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  {loading != false ? (
                    <iframe
                      width={375}
                      height={575}
                      className="border border-gray-300 opacity-50"
                      title="vCard"
                      srcDoc={`<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <title>vCard</title> <style> html, body { background-color: white; margin: auto; overflow-x: hidden; color: black; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; } .header { padding-top: 1.5rem; padding-bottom: 1.5rem; margin-bottom: 4rem; color: #ffffff; text-align: center; background-color: ${color}; } h1 { margin-bottom: 1rem; font-size: 1.5rem; line-height: 2rem; font-weight: 500px; text-align: center; } .about { margin-left: auto; margin-right: auto; padding-left: 1rem; padding-right: 1rem; font-size: 1rem; line-height: 1.625; } .main { padding-left: 2rem; padding-right: 2rem; text-align: center; align-items: center; margin-left: -0.5rem; margin-right: -0.5rem; box-sizing: border-box; margin-bottom: 3rem; } .vcard-div { padding: 0.5rem; width: 100%; } .link { display: flex; padding: 1rem; background-color: #f3f4f6; border: 1px solid #e5e7eb; text-align: left; align-items: left; height: 100%; border-radius: 0.25rem; border-width: 1px; } .link:hover { border-color: #c8d3dc; } .link-name { color: black; font-weight: 500px; text-decoration: none; } svg { margin-right: 1rem; color: ${color}; flex-shrink: 0; width: 1.5rem; height: 1.5rem; } img { margin-top: 1rem; object-fit: cover; object-position: center; border-radius: 50%; box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); } /* Small (sm) */ @media (min-width: 640px) { h1 { font-size: 1.875rem; line-height: 2.25rem; } .main { margin-bottom: 3rem; margin-left: auto; margin-right: auto; } .vcard-div { width: 50%; } } /* Medium (md) */ @media (min-width: 768px) { } /* Large (lg) */ @media (min-width: 1024px) { .about { width: 50%; } .main { margin-bottom: 3rem; width: 66%; } } /* Extra Large (xl) */ @media (min-width: 1280px) { .about { width: 75%; } } </style> </head> <body> <section> <div> <div class="header"> <img width="100" src="${profileImageLink == null ? "https://w3s.link/ipfs/bafkreignw6zfdikvtzb66pbqxdhip74nhthgfxnjlpgejrc5uuey4adt3a/" : profileImageLink}" /> <h1>${header}</h1> <p class="about">${position}</p> </div> <div class="main"> <center> ${about == null ? "" : ` <div class="vcard-div"> <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16"> <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/> <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/> </svg> <span>${about}</span> </div> </div> `} ${phone == null ? "" : ` <div class="vcard-div"> <a class="link-name" href="tel:${phone}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16"> <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/> </svg> <span>${phone}</span> </div> </a> </div> `} ${email == null ? "" : ` <div class="vcard-div"> <a class="link-name" href="mailto:${email}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16"> <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/> </svg> </svg> <span>${email}</span> </div> </a> </div> `} ${company == null ? "" : ` <div class="vcard-div"> <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16"> <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/> </svg> <span>${company}</span> </div> </div> `} ${location == null ? "" : ` <div class="vcard-div"> <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16"> <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/> <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/> </svg> <span>${location}</span> </div> </div> `} </center> </div> </div> </section> </body> </html> `}
                    ></iframe>
                  ) : (
                    <iframe
                      width={375}
                      height={575}
                      className="border border-gray-300"
                      title="vCard"
                      srcDoc={`<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <title>vCard</title> <style> html, body { background-color: white; margin: auto; overflow-x: hidden; color: black; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; } .header { padding-top: 1.5rem; padding-bottom: 1.5rem; margin-bottom: 4rem; color: #ffffff; text-align: center; background-color: ${color}; } h1 { margin-bottom: 1rem; font-size: 1.5rem; line-height: 2rem; font-weight: 500px; text-align: center; } .about { margin-left: auto; margin-right: auto; padding-left: 1rem; padding-right: 1rem; font-size: 1rem; line-height: 1.625; } .main { padding-left: 2rem; padding-right: 2rem; text-align: center; align-items: center; margin-left: -0.5rem; margin-right: -0.5rem; box-sizing: border-box; margin-bottom: 3rem; } .vcard-div { padding: 0.5rem; width: 100%; } .link { display: flex; padding: 1rem; background-color: #f3f4f6; border: 1px solid #e5e7eb; text-align: left; align-items: left; height: 100%; border-radius: 0.25rem; border-width: 1px; } .link:hover { border-color: #c8d3dc; } .link-name { color: black; font-weight: 500px; text-decoration: none; } svg { margin-right: 1rem; color: ${color}; flex-shrink: 0; width: 1.5rem; height: 1.5rem; } img { margin-top: 1rem; object-fit: cover; object-position: center; border-radius: 50%; box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); } /* Small (sm) */ @media (min-width: 640px) { h1 { font-size: 1.875rem; line-height: 2.25rem; } .main { margin-bottom: 3rem; margin-left: auto; margin-right: auto; } .vcard-div { width: 50%; } } /* Medium (md) */ @media (min-width: 768px) { } /* Large (lg) */ @media (min-width: 1024px) { .about { width: 50%; } .main { margin-bottom: 3rem; width: 66%; } } /* Extra Large (xl) */ @media (min-width: 1280px) { .about { width: 75%; } } </style> </head> <body> <section> <div> <div class="header"> <img width="100" src="${profileImageLink == null ? "https://w3s.link/ipfs/bafkreignw6zfdikvtzb66pbqxdhip74nhthgfxnjlpgejrc5uuey4adt3a/" : profileImageLink}" /> <h1>${header}</h1> <p class="about">${position}</p> </div> <div class="main"> <center> ${about == null ? "" : ` <div class="vcard-div"> <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16"> <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/> <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/> </svg> <span>${about}</span> </div> </div> `} ${phone == null ? "" : ` <div class="vcard-div"> <a class="link-name" href="tel:${phone}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16"> <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/> </svg> <span>${phone}</span> </div> </a> </div> `} ${email == null ? "" : ` <div class="vcard-div"> <a class="link-name" href="mailto:${email}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16"> <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/> </svg> </svg> <span>${email}</span> </div> </a> </div> `} ${company == null ? "" : ` <div class="vcard-div"> <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16"> <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/> </svg> <span>${company}</span> </div> </div> `} ${location == null ? "" : ` <div class="vcard-div"> <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16"> <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/> <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/> </svg> <span>${location}</span> </div> </div> `} </center> </div> </div> </section> </body> </html> `}
                    ></iframe>
                  )}
                </>
              )}
            </center>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VCard;
