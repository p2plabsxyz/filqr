import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Web3 from "web3";
import Navbar from "./components/Navbar";
import Text from "./components/types/Text";
import SocialMedia from "./components/types/SocialMedia";
import VCard from "./components/types/SocialMedia";
import Coupons from "./components/types/Coupons";
import Mp3 from "./components/types/Mp3";
import Video from "./components/types/Video";
import Apps from "./components/types/Apps";
import File from "./components/types/File";
import QrCodeDashboard from "./components/QrCodeDashboard";
import About from './components/About'
import Footer from "./components/Footer";
import "./App.css";
import QrCodeTypes from "./components/QrCodeTypes";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletStatus, setWalletStatus] = useState("");
  const [accountAddress, setAccountAddress] = useState(
    "Please connect your wallet to view your NFT badges."
  );
  const [getWeb3, setGetWeb3] = useState(undefined);
  const [getNetwork, setGetNetwork] = useState(undefined);
  const [getQrCodeContract, setGetQrCodeContract] =
    useState(undefined);
  const [contractAddress, setContractAddress] = useState(undefined);

  useEffect(() => {
    (async () => {
      // Define web3
      const web3 = new Web3(window.ethereum);
      setGetWeb3(web3);
      // Get network id
      const networkId = await web3.eth.getChainId();
      setGetNetwork(networkId);
      const network = "31411";
      setContractAddress("0xb48c947d9e6a38bbb64823De5F79a16d48D3d3a8");
      // Instantiate smart contract instance
      const QrCodeContract = new web3.eth.Contract(
        [
          {
            "constant": false,
            "inputs": [
              {
                "name": "_videoHash",
                "type": "string"
              },
              {
                "name": "_title",
                "type": "string"
              }
            ],
            "name": "uploadVideo",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "hash",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "title",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "author",
                "type": "address"
              }
            ],
            "name": "VideoUploaded",
            "type": "event"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [
              {
                "name": "",
                "type": "string"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "videoCount",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "videos",
            "outputs": [
              {
                "name": "id",
                "type": "uint256"
              },
              {
                "name": "hash",
                "type": "string"
              },
              {
                "name": "title",
                "type": "string"
              },
              {
                "name": "author",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          }
        ],
        "0xb48c947d9e6a38bbb64823De5F79a16d48D3d3a8"
      );
      setGetQrCodeContract(QrCodeContract);
      // Set provider
      QrCodeContract.setProvider(window.ethereum);
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
                  <Route path="/" exact element={<QrCodeTypes/>} />
                  <Route
                    path="/text"
                    exact
                    element={
                      <Text
                        connectWallet={connectWallet}
                        walletStatus={walletStatus}
                        web3={getWeb3}
                        QrCodeContract={getQrCodeContract}
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
                        QrCodeContract={getQrCodeContract}
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
                        QrCodeContract={getQrCodeContract}
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
                        QrCodeContract={getQrCodeContract}
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
                        QrCodeContract={getQrCodeContract}
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
                        QrCodeContract={getQrCodeContract}
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
                        QrCodeContract={getQrCodeContract}
                        isConnected={isConnected}
                        accountAddress={accountAddress}
                      />
                    }
                  />
                  <Route
                    path="/file"
                    exact
                    element={
                      <File
                        connectWallet={connectWallet}
                        walletStatus={walletStatus}
                        web3={getWeb3}
                        QrCodeContract={getQrCodeContract}
                        isConnected={isConnected}
                        accountAddress={accountAddress}
                      />
                    }
                  />
                  <Route path="/dashboard" exact element={<QrCodeDashboard/>} />
                </Route>
              </Routes>
              <Routes>
                {/* <Route path="/" exact element={<Content />} /> */}
              </Routes>
              <Footer />
            </Router>
          ) : (
            <div className="text-center w-full rounded-sm shadow-md p-2 bg-gray-200">
              <p className="text-gray-500">
                ⚠️ Web3 is not injected! Please install MetaMask in your
                browser.
              </p>
            </div>
          )}
        </>
    </div>
  );
}

export default App;