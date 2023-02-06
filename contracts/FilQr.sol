// SPDX-License-Identifier: MIT

// ███████╗██╗██╗░░░░░░██████╗░██████╗░
// ██╔════╝██║██║░░░░░██╔═══██╗██╔══██╗
// █████╗░░██║██║░░░░░██║██╗██║██████╔╝
// ██╔══╝░░██║██║░░░░░╚██████╔╝██╔══██╗
// ██║░░░░░██║███████╗░╚═██╔═╝░██║░░██║
// ╚═╝░░░░░╚═╝╚══════╝░░░╚═╝░░░╚═╝░░╚═╝

pragma solidity ^0.8.7;

contract FilQr {
  string public name = 'FilQr';
  uint public fileCount = 0;
  mapping(uint => File) public files;

  struct File {
    uint fileId;
    string fileHash;
    uint fileSize;
    string fileType;
    uint uploadTime;
    address payable uploader;
  }

  event FileUploaded(
    uint fileId,
    string fileHash,
    uint fileSize,
    string fileType,
    uint uploadTime,
    address payable uploader
  );

  constructor() {
  }

  function uploadFile(string memory _fileHash, uint _fileSize, string memory _fileType) public {
    // Make sure the file hash exists
    require(bytes(_fileHash).length > 0);
    // Make sure file type exists
    require(bytes(_fileType).length > 0);
    // Make sure uploader address exists
    require(msg.sender!=address(0));
    // Make sure file size is more than 0
    require(_fileSize>0);

    // Increment file id
    fileCount ++;

    // Add File to the contract
    files[fileCount] = File(fileCount, _fileHash, _fileSize, _fileType, block.timestamp, payable(msg.sender));
    // Trigger an event
    emit FileUploaded(fileCount, _fileHash, _fileSize, _fileType, block.timestamp, payable(msg.sender));
  }
}