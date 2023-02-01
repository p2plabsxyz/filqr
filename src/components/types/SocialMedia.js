import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Web3Storage } from "web3.storage";
import QRCodeStyling from "qr-code-styling";

const token = process.env.REACT_APP_WEB3STORAGE_API_TOKEN;
console.log(token);
const client = new Web3Storage({ token });

const qrCode = new QRCodeStyling({
  width: 200,
  height: 200,
  image:
    "https://w3s.link/ipfs/bafkreighfcmuaykmlfmcgrztp7luxb6lpkwuvyxhxw7sqtagkwmpq6yale/",
  dotsOptions: {
    color: "#000000",
    type: "extra-rounded",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 5,
  },
});

function SocialMedia(
  isConnected,
  accountAddress,
  connectWallet,
  walletStatus,
  QrCodeContract
) {
  const inputRef = useRef(null);
  const qrRef = useRef(null);
  const [url, setUrl] = useState(null);
  const [cid, setCid] = useState(null);
  const [link, setLink] = useState(null);

  async function handleData(e) {
    e.preventDefault();
    setUrl(inputRef.current.value);
    const blob = new Blob(
      [
        `<!DOCTYPE html><html lang="en"><head><title>Social Media</title></head><body><p>${url}</p></body></html>`,
      ],
      { type: "text/html" }
    );
    const file = [new File([blob], "index.html")];
    const cid = await client.put(file, { wrapWithDirectory: false });
    setCid(cid);
    setLink(`https://w3s.link/ipfs/${cid}/`);
  }

  function download() {
    qrCode.download({ name: "FilQR", extension: "png" });
  }

  useEffect(() => {
    qrCode.update({
      data: link,
    });
    qrCode.append(qrRef.current);
  }, [link]);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-44 py-44 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-26 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Social Media
            </h1>
            <form onSubmit={handleData}>
              <input
                type="text"
                ref={inputRef}
                name="url"
                id="url"
                placeholder="Enter your website"
              />
              <div className="flex mt-8 justify-center">
                <button
                  type="submit"
                  className="inline-flex text-white font-bold bg-blue-500 border-0 py-1 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
                >
                  GENERATE
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
                </button>
              </div>
            </form>
            <p>{url}</p>
          </div>
          <div className="p-2 h-full sm:pt-72 sm:border-l border-gray-200 text-center"></div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <center>
              {link != null ? (
                <div ref={qrRef} />
              ) : (
                <img
                  src="https://w3s.link/ipfs/bafkreifav6ujjyzeztsszfz3u5p4slyz2fblrfz3jkcce4xe4g3y6qz3lu/"
                  width={200}
                  alt="QR Code"
                />
              )}
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
                {cid != null ? cid : "CID: .........."}
              </p>
              <p className="mt-4 truncate w-[300px]">
                <a
                  className="decoration-dotted underline hover:no-underline"
                  href={link}
                >
                  {link != null ? link : "URL: .........."}
                </a>
              </p>
            </center>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SocialMedia;
