import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Web3 from "web3";
import Navbar from "./components/Navbar";
import Text from "./components/types/Text";
import SocialMedia from "./components/types/SocialMedia";
import VCard from "./components/types/VCards";
import Coupons from "./components/types/Coupons";
import Mp3 from "./components/types/Mp3";
import Video from "./components/types/Video";
import Apps from "./components/types/Apps";
import Docs from "./components/types/Docs";
import QrCodeDashboard from "./components/QrCodeDashboard";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";
import QrCodeTypes from "./components/QrCodeTypes";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletStatus, setWalletStatus] = useState("");
  const [accountAddress, setAccountAddress] = useState(
    "Please connect your wallet to view your files."
  );
  const [getWeb3, setGetWeb3] = useState(undefined);
  const [getNetwork, setGetNetwork] = useState(undefined);
  const [getQrCodeContract, setGetQrCodeContract] = useState(undefined);
  // const [contractAddress, setContractAddress] = useState(undefined);

  useEffect(() => {
    (async () => {
      // Define web3
      const web3 = new Web3(window.ethereum);
      setGetWeb3(web3);
      // Get network id
      const networkId = await web3.eth.getChainId();
      setGetNetwork(networkId);
      // setContractAddress("0x8dCC15EC2573D5a797B40227837714D95B24185e");
      const abi = [
        { inputs: [], stateMutability: "nonpayable", type: "constructor" },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "fileId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "fileHash",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "fileSize",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "fileType",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "uploadTime",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address payable",
              name: "uploader",
              type: "address",
            },
          ],
          name: "FileUploaded",
          type: "event",
        },
        {
          inputs: [
            { internalType: "string", name: "_fileHash", type: "string" },
            { internalType: "uint256", name: "_fileSize", type: "uint256" },
            { internalType: "string", name: "_fileType", type: "string" },
          ],
          name: "uploadFile",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "fileCount",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          name: "files",
          outputs: [
            { internalType: "uint256", name: "fileId", type: "uint256" },
            { internalType: "string", name: "fileHash", type: "string" },
            { internalType: "uint256", name: "fileSize", type: "uint256" },
            { internalType: "string", name: "fileType", type: "string" },
            { internalType: "uint256", name: "uploadTime", type: "uint256" },
            {
              internalType: "address payable",
              name: "uploader",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
      ];
      const contractAddress = "0x8dCC15EC2573D5a797B40227837714D95B24185e";
      // Instantiate smart contract instance
      const filQr = new web3.eth.Contract(abi, contractAddress);
      setGetQrCodeContract(filQr);
    })();
  }, []);

  // Connect to Metamask wallet
  async function connectWallet() {
    if (window.ethereum) {
      try {
        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccountAddress(account[0]);
        setIsConnected(!isConnected);
      } catch (error) {
        console.log("Error: ", error);
      }
    } else {
      setWalletStatus("⚠️ Wallet not found! Please install MetaMask.");
    }
  }

  return (
    <div id="App">
      <>
        {getWeb3 && getQrCodeContract ? (
          <Router>
            <Navbar network={getNetwork} />
            <Routes>
              <Route>
                <Route path="/" exact element={<QrCodeTypes />} />
                <Route
                  path="/text"
                  exact
                  element={
                    <Text
                      connectWallet={connectWallet}
                      walletStatus={walletStatus}
                      web3={getWeb3}
                      getQrCodeContract={getQrCodeContract}
                      isConnected={isConnected}
                      accountAddress={accountAddress}
                    />
                  }
                />
                <Route
                  path="/socialmedia"
                  exact
                  element={
                    <SocialMedia
                      connectWallet={connectWallet}
                      walletStatus={walletStatus}
                      web3={getWeb3}
                      getQrCodeContract={getQrCodeContract}
                      isConnected={isConnected}
                      accountAddress={accountAddress}
                    />
                  }
                />
                <Route
                  path="/vcard"
                  exact
                  element={
                    <VCard
                      connectWallet={connectWallet}
                      walletStatus={walletStatus}
                      web3={getWeb3}
                      getQrCodeContract={getQrCodeContract}
                      isConnected={isConnected}
                      accountAddress={accountAddress}
                    />
                  }
                />
                <Route
                  path="/coupons"
                  exact
                  element={
                    <Coupons
                      connectWallet={connectWallet}
                      walletStatus={walletStatus}
                      web3={getWeb3}
                      getQrCodeContract={getQrCodeContract}
                      isConnected={isConnected}
                      accountAddress={accountAddress}
                    />
                  }
                />
                <Route
                  path="/mp3"
                  exact
                  element={
                    <Mp3
                      connectWallet={connectWallet}
                      walletStatus={walletStatus}
                      web3={getWeb3}
                      getQrCodeContract={getQrCodeContract}
                      isConnected={isConnected}
                      accountAddress={accountAddress}
                    />
                  }
                />
                <Route
                  path="/video"
                  exact
                  element={
                    <Video
                      connectWallet={connectWallet}
                      walletStatus={walletStatus}
                      web3={getWeb3}
                      getQrCodeContract={getQrCodeContract}
                      isConnected={isConnected}
                      accountAddress={accountAddress}
                    />
                  }
                />
                <Route
                  path="/apps"
                  exact
                  element={
                    <Apps
                      connectWallet={connectWallet}
                      walletStatus={walletStatus}
                      web3={getWeb3}
                      getQrCodeContract={getQrCodeContract}
                      isConnected={isConnected}
                      accountAddress={accountAddress}
                    />
                  }
                />
                <Route
                  path="/docs"
                  exact
                  element={
                    <Docs
                      connectWallet={connectWallet}
                      walletStatus={walletStatus}
                      web3={getWeb3}
                      getQrCodeContract={getQrCodeContract}
                      isConnected={isConnected}
                      accountAddress={accountAddress}
                    />
                  }
                />
                <Route
                  path="/dashboard"
                  exact
                  element={
                    <QrCodeDashboard
                      connectWallet={connectWallet}
                      walletStatus={walletStatus}
                      web3={getWeb3}
                      getQrCodeContract={getQrCodeContract}
                      isConnected={isConnected}
                      accountAddress={accountAddress}
                    />
                  }
                />
              </Route>
            </Routes>
            <Routes>
              {/* <Route path="/" exact element={<About />} /> */}
            </Routes>
            <Footer />
          </Router>
        ) : (
          <div className="text-center w-full rounded-sm shadow-md p-2 bg-gray-200">
            <p className="text-gray-500">
              ⚠️ Web3 is not injected! Please install MetaMask in your browser.
            </p>
          </div>
        )}
      </>
    </div>
  );
}

export default App;
