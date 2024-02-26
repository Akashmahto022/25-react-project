import React, { useState } from "react";
import QRCode from "react-qr-code";

const QrCodeGen = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handleClick = () => {
    setQrCode(input);
    setInput("");
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center' }}>
      <div>
        <h1>QR Code Generator</h1>
        <div>
          <input
            type="text"
            placeholder="write code value"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleClick} disabled={!input} className="bg-blue-700 text-white hover:bg-black p-2 rounded">
            Generator
          </button>
        </div>
        <div>
          <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
        </div>
      </div>
    </div>
  );
};

export default QrCodeGen;
