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
    "https://w3s.link/ipfs/bafkreighfcmuaykmlfmcgrztp7luxb6lpkwuvyxhxw7sqtagkwmpq6yale/",
  dotsOptions: {
    color: "#000000",
    type: "extra-rounded",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 3,
  },
});

function SocialMedia({
  isConnected,
  accountAddress,
  connectWallet,
  walletStatus,
  getQrCodeContract,
}) {
  const qrRef = useRef(null);
  const [header, setHeader] = useState("#Heading");
  const [about, setAbout] = useState("#About");
  const [website, setWebsite] = useState(null);
  const [facebook, setFacebook] = useState(null);
  const [instagram, setInstagram] = useState(null);
  const [twitter, setTwitter] = useState(null);
  const [linkedin, setLinkedin] = useState(null);
  const [github, setGithub] = useState(null);
  const [mastodon, setMastodon] = useState(null);
  const [youtube, setYoutube] = useState(null);
  const [color, setColor] = useState("#3B82F6");
  const [cid, setCid] = useState(null);
  const [link, setLink] = useState(null);
  const [loading, setLoading] = useState(false);
  const [processTransaction, setProcessTransaction] = useState(false);
  const [txnHash, setTxnHash] = useState(null);

  async function handleData(e) {
    e.preventDefault();
    setLoading(true);
    const blob = new Blob(
      [
        `<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <title>Social Media</title> <style> html, body { background-color: white; margin: auto; overflow-x: hidden; color: black; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; } .header { padding-top: 1.5rem; padding-bottom: 1.5rem; margin-bottom: 4rem; color: #ffffff; text-align: center; background-color: ${color}; } h1 { margin-bottom: 1rem; font-size: 1.5rem; line-height: 2rem; font-weight: 500px; text-align: center; } .about { margin-left: auto; margin-right: auto; padding-left: 1rem; padding-right: 1rem; font-size: 1rem; line-height: 1.625; } .main { padding-left: 2rem; padding-right: 2rem; text-align: center; align-items: center; margin-left: -0.5rem; margin-right: -0.5rem; box-sizing: border-box; margin-bottom: 3rem; } .link-div { padding: 0.5rem; width: 100%; } .link { display: flex; padding: 1rem; background-color: #f3f4f6; border: 1px solid #e5e7eb; align-items: center; height: 100%; border-radius: 0.75rem; border-width: 1px; } .link:hover { border-color: #c8d3dc; } .link-name { color: black; font-weight: 500px; text-decoration: none; } svg { margin-right: 1rem; color: ${color}; flex-shrink: 0; width: 1.5rem; height: 1.5rem; } /* Small (sm) */ @media (min-width: 640px) { h1 { font-size: 1.875rem; line-height: 2.25rem; } .main { margin-bottom: 3rem; margin-left: auto; margin-right: auto; } .link-div { width: 50%; } } /* Medium (md) */ @media (min-width: 768px) { } /* Large (lg) */ @media (min-width: 1024px) { .about { width: 50%; } .main { margin-bottom: 3rem; width: 66%; } } /* Extra Large (xl) */ @media (min-width: 1280px) { .about { width: 75%; } } </style> </head> <body> <section> <div> <div class="header"> <h1>${header}</h1> <p class="about">${about}</p> </div> <div class="main"> <center> ${
          website == null
            ? ""
            : ` <div class="link-div"> <a class="link-name" href="${website}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16" > <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" /> </svg> <span>Website</span> </div></a > </div> `
        } ${
          facebook == null
            ? ""
            : ` <div class="link-div"> <a class="link-name" href="${facebook}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook text-gray-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 16 16" > <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" /> </svg> <span>Facebook</span> </div> </a> </div> `
        } ${
          instagram == null
            ? ""
            : ` <div class="link-div"> <a class="link-name" href="${instagram}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram text-gray-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 16 16" > <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" /> </svg> <span>Instagram</span> </div> </a> </div> `
        } ${
          youtube == null
            ? ""
            : ` <div class="link-div"> <a class="link-name" href="${youtube}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube text-gray-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 16 16" > <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" /> </svg> <span>YouTube</span> </div> </a> </div> `
        } ${
          twitter == null
            ? ""
            : ` <div class="link-div"> <a class="link-name" href="${twitter}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter text-gray-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 16 16" > <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" /> </svg> <span>Twitter</span> </div> </a> </div> `
        } ${
          linkedin == null
            ? ""
            : ` <div class="link-div"> <a class="link-name" href="${linkedin}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin text-gray-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 16 16" > <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" /> </svg> <span>LinkedIn</span> </div> </a> </div> `
        } ${
          github == null
            ? ""
            : ` <div class="link-div"> <a class="link-name" href="${github}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github text-gray-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 16 16" > <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" /> </svg> <span>GitHub</span> </div> </a> </div> `
        } ${
          mastodon == null
            ? ""
            : ` <div class="link-div"> <a class="link-name" href="${mastodon}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mastodon text-gray-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 16 16" > <path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z" /> </svg> <span>Mastodon</span> </div> </a> </div> `
        } </center> </div> </div> </section> </body> </html> `,
      ],
      { type: "text/html" }
    );
    const file = [new File([blob], "index.html")];
    const cid = await client.put(file, { wrapWithDirectory: false });
    setCid(cid);
    setLink(`https://w3s.link/ipfs/${cid}/`);
    if (getQrCodeContract) {
      try {
        setProcessTransaction(true);
        await getQrCodeContract.methods
          .uploadFile(cid, file[0].size, "Social Media")
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
              Social Media
            </h1>
            <p class="block mt-2 text-sm font-medium text-gray-600">
              Create your decentralized linkTree.
            </p>
            <form onSubmit={handleData}>
              <input
                type="text"
                value={header}
                maxLength="50"
                onChange={(e) => setHeader(e.target.value)}
                placeholder="Heading (max length 50 chars)"
                className="mt-2 w-80 bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
              <textarea
                type="text"
                value={about}
                maxLength="200"
                onChange={(e) => setAbout(e.target.value)}
                placeholder="About (max length 200 chars)"
                className="resize-y mt-2 w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
              <label
                htmlFor="color"
                class="block mb-2 text-sm font-medium text-gray-600"
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
              <label class="block mt-2 text-sm font-medium text-gray-600">
                🔗 Enter your social links:
              </label>
              <input
                type="url"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Website"
                className="mt-2 w-80 bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <input
                type="url"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
                placeholder="Facebook"
                className="mt-2 w-80 bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <input
                type="url"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                placeholder="Instagram"
                className="mt-2 w-80 bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <input
                type="url"
                value={youtube}
                onChange={(e) => setYoutube(e.target.value)}
                placeholder="YouTube"
                className="mt-2 w-80 bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <input
                type="url"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
                placeholder="Twitter"
                className="mt-2 w-80 bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <input
                type="url"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                placeholder="LinkedIn"
                className="mt-2 w-80 bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <input
                type="url"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                placeholder="GitHub"
                className="mt-2 w-80 bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <input
                type="url"
                value={mastodon}
                onChange={(e) => setMastodon(e.target.value)}
                placeholder="Mastodon"
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
                        title="Social Media"
                        srcDoc={`<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <title>Social Media</title> <style> html, body { background-color: white; margin: auto; overflow-x: hidden; color: black; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; } .header { padding-top: 1.5rem; padding-bottom: 1.5rem; margin-bottom: 4rem; color: #ffffff; text-align: center; background-color: ${color}; } h1 { margin-bottom: 1rem; font-size: 1.5rem; line-height: 2rem; font-weight: 500px; text-align: center; } .about { margin-left: auto; margin-right: auto; padding-left: 1rem; padding-right: 1rem; font-size: 1rem; line-height: 1.625; } .main { padding-left: 2rem; padding-right: 2rem; text-align: center; align-items: center; margin-left: -0.5rem; margin-right: -0.5rem; box-sizing: border-box; margin-bottom: 3rem; } .link-div { padding: 0.5rem; width: 100%; } .link { display: flex; padding: 1rem; background-color: #f3f4f6; border: 1px solid #e5e7eb; align-items: center; height: 100%; border-radius: 0.75rem; border-width: 1px; } .link:hover { border-color: #c8d3dc; } .link-name { color: black; font-weight: 500px; text-decoration: none; } svg { margin-right: 1rem; color: ${color}; flex-shrink: 0; width: 1.5rem; height: 1.5rem; } /* Small (sm) */ @media (min-width: 640px) { h1 { font-size: 1.875rem; line-height: 2.25rem; } .main { margin-bottom: 3rem; margin-left: auto; margin-right: auto; } .link-div { width: 50%; } } /* Medium (md) */ @media (min-width: 768px) { } /* Large (lg) */ @media (min-width: 1024px) { .about { width: 50%; } .main { margin-bottom: 3rem; width: 66%; } } /* Extra Large (xl) */ @media (min-width: 1280px) { .about { width: 75%; } } </style> </head> <body> <section> <div> <div class="header"> <h1>${header}</h1> <p class="about">${about}</p> </div> <div class="main"> <center> ${
                          website == null
                            ? ""
                            : ` <div class="link-div"> <a class="link-name" href="${website}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16" > <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" /> </svg> <span>Website</span> </div></a > </div> `
                        } ${
                          facebook == null
                            ? ""
                            : ` <div class="link-div"> <a class="link-name" href="${facebook}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook text-gray-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 16 16" > <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" /> </svg> <span>Facebook</span> </div> </a> </div> `
                        } ${
                          instagram == null
                            ? ""
                            : ` <div class="link-div"> <a class="link-name" href="${instagram}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram text-gray-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 16 16" > <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" /> </svg> <span>Instagram</span> </div> </a> </div> `
                        } ${
                          youtube == null
                            ? ""
                            : ` <div class="link-div"> <a class="link-name" href="${youtube}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube text-gray-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 16 16" > <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" /> </svg> <span>YouTube</span> </div> </a> </div> `
                        } ${
                          twitter == null
                            ? ""
                            : ` <div class="link-div"> <a class="link-name" href="${twitter}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter text-gray-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 16 16" > <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" /> </svg> <span>Twitter</span> </div> </a> </div> `
                        } ${
                          linkedin == null
                            ? ""
                            : ` <div class="link-div"> <a class="link-name" href="${linkedin}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin text-gray-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 16 16" > <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" /> </svg> <span>LinkedIn</span> </div> </a> </div> `
                        } ${
                          github == null
                            ? ""
                            : ` <div class="link-div"> <a class="link-name" href="${github}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github text-gray-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 16 16" > <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" /> </svg> <span>GitHub</span> </div> </a> </div> `
                        } ${
                          mastodon == null
                            ? ""
                            : ` <div class="link-div"> <a class="link-name" href="${mastodon}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mastodon text-gray-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 16 16" > <path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z" /> </svg> <span>Mastodon</span> </div> </a> </div> `
                        } </center> </div> </div> </section> </body> </html> `}
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
                      title="Social Media"
                      srcDoc={`<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <title>Social Media</title> <style> html, body { background-color: white; margin: auto; overflow-x: hidden; color: black; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; } .header { padding-top: 1.5rem; padding-bottom: 1.5rem; margin-bottom: 4rem; color: #ffffff; text-align: center; background-color: ${color}; } h1 { margin-bottom: 1rem; font-size: 1.5rem; line-height: 2rem; font-weight: 500px; text-align: center; } .about { margin-left: auto; margin-right: auto; padding-left: 1rem; padding-right: 1rem; font-size: 1rem; line-height: 1.625; } .main { padding-left: 2rem; padding-right: 2rem; text-align: center; align-items: center; margin-left: -0.5rem; margin-right: -0.5rem; box-sizing: border-box; margin-bottom: 3rem; } .link-div { padding: 0.5rem; width: 100%; } .link { display: flex; padding: 1rem; background-color: #f3f4f6; border: 1px solid #e5e7eb; align-items: center; height: 100%; border-radius: 0.75rem; border-width: 1px; } .link:hover { border-color: #c8d3dc; } .link-name { color: black; font-weight: 500px; text-decoration: none; } svg { margin-right: 1rem; color: ${color}; flex-shrink: 0; width: 1.5rem; height: 1.5rem; } /* Small (sm) */ @media (min-width: 640px) { h1 { font-size: 1.875rem; line-height: 2.25rem; } .main { margin-bottom: 3rem; margin-left: auto; margin-right: auto; } .link-div { width: 50%; } } /* Medium (md) */ @media (min-width: 768px) { } /* Large (lg) */ @media (min-width: 1024px) { .about { width: 50%; } .main { margin-bottom: 3rem; width: 66%; } } /* Extra Large (xl) */ @media (min-width: 1280px) { .about { width: 75%; } } </style> </head> <body> <section> <div> <div class="header"> <h1>${header}</h1> <p class="about">${about}</p> </div> <div class="main"> <center> ${
                        website == null
                          ? ""
                          : ` <div class="link-div"> <a class="link-name" href="${website}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16" > <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" /> </svg> <span>Website</span> </div></a > </div> `
                      } ${
                        facebook == null
                          ? ""
                          : ` <div class="link-div"> <a class="link-name" href="${facebook}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook text-gray-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 16 16" > <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" /> </svg> <span>Facebook</span> </div> </a> </div> `
                      } ${
                        instagram == null
                          ? ""
                          : ` <div class="link-div"> <a class="link-name" href="${instagram}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram text-gray-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 16 16" > <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" /> </svg> <span>Instagram</span> </div> </a> </div> `
                      } ${
                        youtube == null
                          ? ""
                          : ` <div class="link-div"> <a class="link-name" href="${youtube}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube text-gray-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 16 16" > <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" /> </svg> <span>YouTube</span> </div> </a> </div> `
                      } ${
                        twitter == null
                          ? ""
                          : ` <div class="link-div"> <a class="link-name" href="${twitter}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter text-gray-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 16 16" > <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" /> </svg> <span>Twitter</span> </div> </a> </div> `
                      } ${
                        linkedin == null
                          ? ""
                          : ` <div class="link-div"> <a class="link-name" href="${linkedin}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin text-gray-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 16 16" > <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" /> </svg> <span>LinkedIn</span> </div> </a> </div> `
                      } ${
                        github == null
                          ? ""
                          : ` <div class="link-div"> <a class="link-name" href="${github}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github text-gray-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 16 16" > <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" /> </svg> <span>GitHub</span> </div> </a> </div> `
                      } ${
                        mastodon == null
                          ? ""
                          : ` <div class="link-div"> <a class="link-name" href="${mastodon}" target="_blank" rel="noopener noreferrer" > <div class="link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mastodon text-gray-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 16 16" > <path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z" /> </svg> <span>Mastodon</span> </div> </a> </div> `
                      } </center> </div> </div> </section> </body> </html> `}
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

export default SocialMedia;
