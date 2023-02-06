import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";

function QrCodeDashboard({
  isConnected,
  accountAddress,
  connectWallet,
  walletStatus,
  getQrCodeContract,
}) {
  const [files, setFiles] = useState([]);
  const [fileCount, setFileCount] = useState(null);

  useEffect(() => {
    if (isConnected) {
      (async () => {
        try {
          const filesCount = await getQrCodeContract.methods.fileCount().call();
          setFileCount(filesCount);
          // Load files&sort by the newest
          for (var i = filesCount; i >= 1; i--) {
            const file = await getQrCodeContract.methods.files(i).call();
            setFiles((prevFiles) => [...prevFiles, file]);
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [isConnected]);

  return (
    <div className="section">
      <div className="flex flex-col text-center w-full">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mt-16">
          📜 Dashboard
        </h1>
      </div>
      <center className="mt-10">
        {isConnected ? (
          <p className="text-blue-500">{accountAddress}</p>
        ) : (
          <button
            type="button"
            onClick={connectWallet}
            className="inline-flex text-white font-bold bg-blue-500 border-0 py-1 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
          >
            Connect wallet
          </button>
        )}
      </center>

      <center>
        <table className="mt-12 shadow-lg table-fixed w-1/2 text-sm text-gray-700">
          <thead>
            <tr className="bg-gray-100">
              <th className="w-10 px-4 py-2 text-left">Id</th>
              <th className="w-20 px-4 py-2 text-left">Type</th>
              <th className="w-12 px-4 py-2 text-right">Size</th>
              <th className="w-12 px-4 py-2 text-left">Date</th>
              <th className="w-20 px-4 py-2 text-left">Account</th>
              <th className="w-20 px-4 py-2 text-left">CID</th>
            </tr>
          </thead>
          {fileCount != null ? 
          <tbody className="overflow-y-scroll max-h-450">
            {files.map((file, key) => (
              <tr key={key} className="odd:bg-gray-200">
                <td className="p-4 text-left">{file.fileId}</td>
                <td className="p-4 text-left">{file.fileType}</td>
                <td className="p-4 text-right">{file.fileSize / 10 ** 6} MB</td>
                <td className="p-4 text-left">
                  {moment.unix(file.uploadTime).format("h:mm:ss A M/D/Y")}
                </td>
                <td className="p-4 text-left">
                  <a
                    href={
                      "https://hyperspace.filfox.info/en/address/" +
                      file.uploader
                    }
                    className="underline"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {file.uploader.substring(0, 10)}...
                  </a>
                </td>
                <td className="p-4 text-left">
                  <a
                    href={"https://dweb.link/ipfs/" + file.fileHash}
                    className="underline"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {file.fileHash.substring(0, 10)}...
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
          : <p className="mt-4 mb-4">0 files found! :/</p>}
        </table>
      </center>
    </div>
  );
}

export default QrCodeDashboard;
