import { useState } from "react";
import Button from "../Components/button"; // Assuming you have a Button component

export default function Citizen() {
  const [name, setName] = useState("");
  const [aadhaarId, setAadhaarId] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleSubmit = () => {
    console.log(`Name: ${name}, Aadhaar ID: ${aadhaarId}`);
    setIsOtpSent(true);
    alert(`OTP sent to Aadhaar ID: ${aadhaarId}`);
  };

  const handleOtpVerification = () => {
    console.log(`Verifying OTP: ${otp} for Aadhaar ID: ${aadhaarId}`);
    alert("OTP verified successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="font-medium text-4xl mb-8">Citizen Information</h2>
      <div className="w-full max-w-md bg-white shadow-lg p-8 rounded-lg">
        <div className="mb-4">
          <label className="block mb-2 text-lg">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-lg w-full p-3"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg">Aadhaar ID:</label>
          <input
            type="text"
            value={aadhaarId}
            onChange={(e) => setAadhaarId(e.target.value)}
            className="border rounded-lg w-full p-3"
            placeholder="Enter your Aadhaar ID"
          />
        </div>
        {isOtpSent && (
          <div className="mb-4">
            <label className="block mb-2 text-lg">Enter OTP:</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="border rounded-lg w-full p-3"
              placeholder="Enter the OTP"
            />
          </div>
        )}
        <div className="mt-6">
          {!isOtpSent ? (
            <Button title="Send OTP" onClick={handleSubmit} />
          ) : (
            <Button title="Verify OTP" onClick={handleOtpVerification} />
          )}
        </div>
      </div>
    </div>
  );
}
