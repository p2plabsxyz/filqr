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

function Coupons(
  isConnected,
  accountAddress,
  connectWallet,
  walletStatus,
  QrCodeContract
) {
  const qrRef = useRef(null);
  const [companyName, setCompanyName] = useState("Company name");
  const [title, setTitle] = useState("40% OFF YOUR PURCHASE");
  const [desc, setDesc] = useState(
    "Lorem ipsum dolor sit amet, et nam pertinax gloriatur. Sea te minim soleat senserit, ex quo luptatum tacimates voluptatum, salutandi delicatissimi eam ea."
  );
  const [promoCode, setPromoCode] = useState("DEAL40");
  const [expireDate, setExpireDate] = useState("2023-02-10");
  const [redeemLink, setRedeemLink] = useState(null);
  const [couponImageLink, setCouponImageLink] = useState(null);
  const [color, setColor] = useState("#3B82F6");
  const [cid, setCid] = useState(null);
  const [link, setLink] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingCouponImage, setLoadingCouponImage] = useState(false);

  async function handleCouponImageChange() {
    setLoadingCouponImage(true);
    const couponImageInput = document.getElementById("couponimage");
    const couponImageCid = await client.put(couponImageInput.files, {
      wrapWithDirectory: false,
    });
    setCouponImageLink(`https://dweb.link/ipfs/${couponImageCid}/`);
    setLoadingCouponImage(false);
  }

  async function handleData(e) {
    e.preventDefault();
    setLoading(true);
    const blob = new Blob(
      [
        `<!DOCTYPE html> <html> <head> <meta name="viewport" content="width=device-width, initial-scale=1" /> <style> html, body { background-color: white; margin: auto; overflow-x: hidden; color: black; background-color: ${color}; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; } .coupon { border: 5px dashed white; width: 80%; border-radius: 15px; max-width: 500px; margin-top: 2rem; text-align: left; align-items: left; } .container { padding: 2px 16px; background-color: #f1f1f1; } .promo { background: #ccc; border-radius: 5px; padding: 3px; } .expire { color: red; } .button { align-items: center; appearance: none; background-color: #fcfcfd; border-radius: 4px; border-width: 0; box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset; box-sizing: border-box; color: #36395a; cursor: pointer; display: inline-flex; font-family: "JetBrains Mono", monospace; height: 48px; justify-content: center; line-height: 1; list-style: none; overflow: hidden; padding-left: 16px; padding-right: 16px; position: relative; text-align: left; text-decoration: none; transition: box-shadow 0.15s, transform 0.15s; user-select: none; -webkit-user-select: none; touch-action: manipulation; white-space: nowrap; will-change: box-shadow, transform; font-size: 18px; } .button:focus { box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset; } .button:hover { box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset; transform: translateY(-2px); } .button:active { box-shadow: #d6d6e7 0 3px 7px inset; transform: translateY(2px); } .link-div{ margin-top: 2rem; margin-bottom: 2rem; } .link { text-decoration: none; } </style> </head> <body> <center> <div class="coupon"> <div class="container"> <h3>${companyName}</h3> </div> <img src="${
          couponImageLink == null
            ? "https://dweb.link/ipfs/bafkreibqqchv2yrh2p5s6b2e6fablv6j3ys5ex4ipg3jyyvn257hmzux7i/"
            : couponImageLink
        }" alt="Coupon image" style="width:100%; height: auto;"> <div class="container" style="background-color: white; margin-top: -3px" > <h2><b>${title}</b></h2> <p>${desc}</p> </div> <div class="container"> <p>Use Promo Code: <span class="promo">${promoCode}</span></p> <p class="expire">Expires: ${expireDate}</p> </div> </div> <div class="link-div"> <a class="link" href="${redeemLink}" target="_blank" rel="noopener noreferrer" ><button class="button" role="button">Redeem now</button></a > </div> </center> </body> </html> `,
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
              Coupons
            </h1>
            <p class="block mt-2 text-sm font-medium text-gray-600">
              Make your customers happy with amazing discounts.
            </p>
            <form onSubmit={handleData}>
              <input
                type="text"
                value={companyName}
                maxLength="30"
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Company name (max length 20 chars)"
                className="mt-2 w-80 bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
              <label className="block mt-2 text-sm font-medium text-gray-600">
                🖼️ Coupon image*
              </label>
              <input
                type="file"
                id="couponimage"
                accept="image/*"
                onChange={handleCouponImageChange}
                className="inline-flex mt-2 w-80 bg-white cursor-pointer rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
              {loadingCouponImage != false ? (
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
              <label class="block mt-6 text-sm font-medium text-gray-600">
                🎟️ Coupon information
              </label>
              <input
                type="text"
                value={title}
                maxLength="30"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title (max length 30 chars)"
                className="mt-2 w-80 bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
              <textarea
                type="text"
                value={desc}
                maxLength="200"
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Description (max length 200 chars)"
                className="mt-2 w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
              <input
                type="text"
                value={promoCode}
                maxLength="20 (max length 20 chars)"
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Promo code"
                className="mt-2 w-80 bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <input
                type="date"
                value={expireDate}
                onChange={(e) => setExpireDate(e.target.value)}
                placeholder="Coupon expiry date"
                className="mt-2 w-80 bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <input
                type="url"
                value={redeemLink}
                onChange={(e) => setRedeemLink(e.target.value)}
                placeholder="Redeem link"
                className="mt-2 w-80 bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
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
                      srcDoc={`<!DOCTYPE html> <html> <head> <meta name="viewport" content="width=device-width, initial-scale=1" /> <style> html, body { background-color: white; margin: auto; overflow-x: hidden; color: black; background-color: ${color}; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; } .coupon { border: 5px dashed white; width: 80%; border-radius: 15px; max-width: 500px; margin-top: 2rem; text-align: left; align-items: left; } .container { padding: 2px 16px; background-color: #f1f1f1; } .promo { background: #ccc; border-radius: 5px; padding: 3px; } .expire { color: red; } .button { align-items: center; appearance: none; background-color: #fcfcfd; border-radius: 4px; border-width: 0; box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset; box-sizing: border-box; color: #36395a; cursor: pointer; display: inline-flex; font-family: "JetBrains Mono", monospace; height: 48px; justify-content: center; line-height: 1; list-style: none; overflow: hidden; padding-left: 16px; padding-right: 16px; position: relative; text-align: left; text-decoration: none; transition: box-shadow 0.15s, transform 0.15s; user-select: none; -webkit-user-select: none; touch-action: manipulation; white-space: nowrap; will-change: box-shadow, transform; font-size: 18px; } .button:focus { box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset; } .button:hover { box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset; transform: translateY(-2px); } .button:active { box-shadow: #d6d6e7 0 3px 7px inset; transform: translateY(2px); } .link-div{ margin-top: 2rem; margin-bottom: 2rem; } .link { text-decoration: none; } </style> </head> <body> <center> <div class="coupon"> <div class="container"> <h3>${companyName}</h3> </div> <img src="${
                        couponImageLink == null
                          ? "https://dweb.link/ipfs/bafkreibqqchv2yrh2p5s6b2e6fablv6j3ys5ex4ipg3jyyvn257hmzux7i/"
                          : couponImageLink
                      }" alt="Coupon image" style="width:100%; height: auto;"> <div class="container" style="background-color: white; margin-top: -3px" > <h2><b>${title}</b></h2> <p>${desc}</p> </div> <div class="container"> <p>Use Promo Code: <span class="promo">${promoCode}</span></p> <p class="expire">Expires: ${expireDate}</p> </div> </div> <div class="link-div"> <a class="link" href="${redeemLink}" target="_blank" rel="noopener noreferrer" ><button class="button" role="button">Redeem now</button></a > </div> </center> </body> </html> `}
                    ></iframe>
                  ) : (
                    <iframe
                      width={375}
                      height={575}
                      className="border border-gray-300"
                      title="vCard"
                      srcDoc={`<!DOCTYPE html> <html> <head> <meta name="viewport" content="width=device-width, initial-scale=1" /> <style> html, body { background-color: white; margin: auto; overflow-x: hidden; color: black; background-color: ${color}; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; } .coupon { border: 5px dashed white; width: 80%; border-radius: 15px; max-width: 500px; margin-top: 2rem; text-align: left; align-items: left; } .container { padding: 2px 16px; background-color: #f1f1f1; } .promo { background: #ccc; border-radius: 5px; padding: 3px; } .expire { color: red; } .button { align-items: center; appearance: none; background-color: #fcfcfd; border-radius: 4px; border-width: 0; box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset; box-sizing: border-box; color: #36395a; cursor: pointer; display: inline-flex; font-family: "JetBrains Mono", monospace; height: 48px; justify-content: center; line-height: 1; list-style: none; overflow: hidden; padding-left: 16px; padding-right: 16px; position: relative; text-align: left; text-decoration: none; transition: box-shadow 0.15s, transform 0.15s; user-select: none; -webkit-user-select: none; touch-action: manipulation; white-space: nowrap; will-change: box-shadow, transform; font-size: 18px; } .button:focus { box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset; } .button:hover { box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset; transform: translateY(-2px); } .button:active { box-shadow: #d6d6e7 0 3px 7px inset; transform: translateY(2px); } .link-div{ margin-top: 2rem; margin-bottom: 2rem; } .link { text-decoration: none; } </style> </head> <body> <center> <div class="coupon"> <div class="container"> <h3>${companyName}</h3> </div> <img src="${
                        couponImageLink == null
                          ? "https://dweb.link/ipfs/bafkreibqqchv2yrh2p5s6b2e6fablv6j3ys5ex4ipg3jyyvn257hmzux7i/"
                          : couponImageLink
                      }" alt="Coupon image" style="width:100%; height: auto;"> <div class="container" style="background-color: white; margin-top: -3px" > <h2><b>${title}</b></h2> <p>${desc}</p> </div> <div class="container"> <p>Use Promo Code: <span class="promo">${promoCode}</span></p> <p class="expire">Expires: ${expireDate}</p> </div> </div> <div class="link-div"> <a class="link" href="${redeemLink}" target="_blank" rel="noopener noreferrer" ><button class="button" role="button">Redeem now</button></a > </div> </center> </body> </html> `}
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

export default Coupons;
