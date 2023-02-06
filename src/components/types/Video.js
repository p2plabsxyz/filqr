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

function Video({
  isConnected,
  accountAddress,
  connectWallet,
  walletStatus,
  getQrCodeContract,
}) {
  const qrRef = useRef(null);
  const [title, setTitle] = useState("#Title");
  const [desc, setDesc] = useState("#Description");
  const [videoLink, setVideoLink] = useState(null);
  const [url, setUrl] = useState("");
  const [color, setColor] = useState("#3B82F6");
  const [cid, setCid] = useState(null);
  const [link, setLink] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingVideo, setLoadingVideo] = useState(false);
  const [processTransaction, setProcessTransaction] = useState(false);
  const [txnHash, setTxnHash] = useState(null);

  async function handleVideoFileChange() {
    setLoadingVideo(true);
    const videoInput = document.getElementById("video");
    const videoCid = await client.put(videoInput.files, {
      wrapWithDirectory: false,
    });
    setVideoLink(`https://dweb.link/ipfs/${videoCid}/`);
    setLoadingVideo(false);
  }

  async function handleData(e) {
    e.preventDefault();
    setLoading(true);
    const blob = new Blob(
      [
        `<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <title>Video</title> <style> html, body { background-color: white; margin: auto; overflow-x: hidden; color: black; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; } .header { padding-top: 8rem; padding-bottom: 8rem; margin-bottom: -7rem; color: #ffffff; text-align: center; background-color: ${color}; } h2 { margin-bottom: 1rem; font-size: 1.5rem; line-height: 2rem; font-weight: 500px; text-align: left; align-items: left; color: #1f2937; } .desc { text-align: left; align-items: left; color: #374151; margin-bottom: 6rem; } video { object-fit: cover; object-position: center; border-radius: 0.2rem; box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); width: 100%; } .video-link { text-align: center; align-items: center; color: #374151; text-decoration: none; } .video-link:hover { text-decoration: underline; } .main { padding-left: 2rem; padding-right: 2rem; text-align: center; align-items: center; margin-left: -0.5rem; margin-right: -0.5rem; box-sizing: border-box; margin-bottom: 3rem; } .video-div { padding: 0.5rem; width: 100%; } /* Small (sm) */ @media (min-width: 640px) { h2 { font-size: 1.875rem; line-height: 2.25rem; } .main { margin-bottom: 3rem; margin-left: auto; margin-right: auto; } .video-div { width: 50%; } } /* Medium (md) */ @media (min-width: 768px) { } /* Large (lg) */ @media (min-width: 1024px) { .main { margin-bottom: 3rem; width: 66%; } video { height: auto; width: 100%; } } /* Extra Large (xl) */ @media (min-width: 1280px) { } </style> </head> <body> <section> <div> <div class="header"></div> <div class="main"> <center> <div class="video-div"> <video width="full" controls> <source src="${
          videoLink == null
            ? "https://dweb.link/ipfs/bafybeihrg3eslykg3v7zd5fzxzuepbgkwizkhmd7vtuhuozjpvk234teh4/"
            : videoLink
        }" type="video/mp4" /> Your browser does not support the video tag. </video> <h2>${title}</h2> <p class="desc">${desc}</p> <a class="video-link" href="${url}" target="_blank" rel="noopener noreferrer" >${url}</a > </div> </center> </div> </div> </section> </body> </html> `,
      ],
      { type: "text/html" }
    );
    const file = [new File([blob], "index.html")];
    const cid = await client.put(file, { wrapWithDirectory: false });
    setCid(cid);
    setLink(`https://dweb.link/ipfs/${cid}/`);
    if (getQrCodeContract) {
      try {
        setProcessTransaction(true);
        await getQrCodeContract.methods
          .uploadFile(cid, file[0].size, "Video")
          .send({ from: accountAddress })
          .on("transactionHash", function (hash) {
            setTxnHash(hash);
          });
      } catch (err) {
        console.log(err);
      }
    }
    setProcessTransaction(false);
    setLoading(false);
  }

  useEffect(() => {
    qrCode.update({
      data: link,
    });
    qrCode.append(qrRef.current);
  }, [link, processTransaction]);

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
              Video
            </h1>
            <p class="block mt-2 text-sm font-medium text-gray-600">
              Publish movies, shorts, podcasts, etc.
            </p>
            <form onSubmit={handleData}>
              <input
                type="text"
                value={title}
                maxLength="50"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title (max length 50 chars)"
                className="mt-2 w-80 bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
              <input
                type="text"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Description"
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
              <label className="block mt-6 text-sm font-medium text-gray-600">
                📺 Mp4 video file*
              </label>
              <input
                type="file"
                id="video"
                accept="video/*"
                onChange={handleVideoFileChange}
                className="inline-flex mt-2 w-80 bg-white cursor-pointer rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
              {loadingVideo != false ? (
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
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter a link"
                className="mt-2 w-80 bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <div className="block mt-8 justify-center">
                {isConnected ? (
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
                ) : (
                  <button
                    type="button"
                    onClick={connectWallet}
                    className="inline-flex text-white font-bold bg-blue-500 border-0 py-1 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
                  >
                    Connect wallet
                  </button>
                )}
              </div>
            </form>
          </div>
          <div className="p-2 h-full sm:pt-72 sm:border-l border-gray-200 text-center"></div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 ">
            <center>
              {link != null && processTransaction != true ? (
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
                    <>
                      <iframe
                        width={375}
                        height={575}
                        className="border border-gray-300 opacity-50"
                        title="Video"
                        srcDoc={`<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <title>Video</title> <style> html, body { background-color: white; margin: auto; overflow-x: hidden; color: black; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; } .header { padding-top: 8rem; padding-bottom: 8rem; margin-bottom: -7rem; color: #ffffff; text-align: center; background-color: ${color}; } h2 { margin-bottom: 1rem; font-size: 1.5rem; line-height: 2rem; font-weight: 500px; text-align: left; align-items: left; color: #1f2937; } .desc { text-align: left; align-items: left; color: #374151; margin-bottom: 6rem; } video { object-fit: cover; object-position: center; border-radius: 0.2rem; box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); width: 100%; } .video-link { text-align: center; align-items: center; color: #374151; text-decoration: none; } .video-link:hover { text-decoration: underline; } .main { padding-left: 2rem; padding-right: 2rem; text-align: center; align-items: center; margin-left: -0.5rem; margin-right: -0.5rem; box-sizing: border-box; margin-bottom: 3rem; } .video-div { padding: 0.5rem; width: 100%; } /* Small (sm) */ @media (min-width: 640px) { h2 { font-size: 1.875rem; line-height: 2.25rem; } .main { margin-bottom: 3rem; margin-left: auto; margin-right: auto; } .video-div { width: 50%; } } /* Medium (md) */ @media (min-width: 768px) { } /* Large (lg) */ @media (min-width: 1024px) { .main { margin-bottom: 3rem; width: 66%; } video { height: auto; width: 100%; } } /* Extra Large (xl) */ @media (min-width: 1280px) { } </style> </head> <body> <section> <div> <div class="header"></div> <div class="main"> <center> <div class="video-div"> <video width="full" controls> <source src="${
                          videoLink == null
                            ? "https://dweb.link/ipfs/bafybeihrg3eslykg3v7zd5fzxzuepbgkwizkhmd7vtuhuozjpvk234teh4/"
                            : videoLink
                        }" type="video/mp4" /> Your browser does not support the video tag. </video> <h2>${title}</h2> <p class="desc">${desc}</p> <a class="video-link" href="${url}" target="_blank" rel="noopener noreferrer" >${url}</a > </div> </center> </div> </div> </section> </body> </html> `}
                      ></iframe>{" "}
                      <BeatLoader
                        color={"#3B82F6"}
                        className="mt-4"
                        loading={true}
                        size={10}
                        speedMultiplier="1"
                      />
                      <p className="mt-2 text-sm truncate w-[300px]">
                        Txn hash:{" "}
                        <a
                          className="text-blue-500"
                          href={
                            "https://hyperspace.filfox.info/en/tx/" + txnHash
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {txnHash}
                        </a>
                      </p>
                      <p className="mt-2 text-sm">
                        Please wait till the Txn is completed :)
                      </p>
                    </>
                  ) : (
                    <iframe
                      width={375}
                      height={575}
                      className="border border-gray-300"
                      title="Video"
                      srcDoc={`<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <title>Video</title> <style> html, body { background-color: white; margin: auto; overflow-x: hidden; color: black; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; } .header { padding-top: 8rem; padding-bottom: 8rem; margin-bottom: -7rem; color: #ffffff; text-align: center; background-color: ${color}; } h2 { margin-bottom: 1rem; font-size: 1.5rem; line-height: 2rem; font-weight: 500px; text-align: left; align-items: left; color: #1f2937; } .desc { text-align: left; align-items: left; color: #374151; margin-bottom: 6rem; } video { object-fit: cover; object-position: center; border-radius: 0.2rem; box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); width: 100%; } .video-link { text-align: center; align-items: center; color: #374151; text-decoration: none; } .video-link:hover { text-decoration: underline; } .main { padding-left: 2rem; padding-right: 2rem; text-align: center; align-items: center; margin-left: -0.5rem; margin-right: -0.5rem; box-sizing: border-box; margin-bottom: 3rem; } .video-div { padding: 0.5rem; width: 100%; } /* Small (sm) */ @media (min-width: 640px) { h2 { font-size: 1.875rem; line-height: 2.25rem; } .main { margin-bottom: 3rem; margin-left: auto; margin-right: auto; } .video-div { width: 50%; } } /* Medium (md) */ @media (min-width: 768px) { } /* Large (lg) */ @media (min-width: 1024px) { .main { margin-bottom: 3rem; width: 66%; } video { height: auto; width: 100%; } } /* Extra Large (xl) */ @media (min-width: 1280px) { } </style> </head> <body> <section> <div> <div class="header"></div> <div class="main"> <center> <div class="video-div"> <video width="full" controls> <source src="${
                        videoLink == null
                          ? "https://dweb.link/ipfs/bafybeihrg3eslykg3v7zd5fzxzuepbgkwizkhmd7vtuhuozjpvk234teh4/"
                          : videoLink
                      }" type="video/mp4" /> Your browser does not support the video tag. </video> <h2>${title}</h2> <p class="desc">${desc}</p> <a class="video-link" href="${url}" target="_blank" rel="noopener noreferrer" >${url}</a > </div> </center> </div> </div> </section> </body> </html> `}
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

export default Video;
