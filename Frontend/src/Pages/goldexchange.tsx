import { useState } from "react";
import axios from 'axios'; // Import axios to make HTTP requests
import Button from "../Components/button"; // Import your button component

export default function GoldExchangePage() {
  const [name, setName] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [huid, setHuid] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otpSentTo, setOtpSentTo] = useState("");

  // Function to send OTP
  const handleSubmit = () => {
    // Logic to send OTP based on Aadhar number
    console.log(`Name: ${name}, Aadhar: ${aadhar}, HUID: ${huid}`);
    setOtpSentTo(aadhar); // Assuming OTP is sent to Aadhar for demo purposes
    setIsOtpSent(true);
    alert(`OTP sent to Aadhar: ${aadhar}`);
  };

  // Function to verify OTP and send API request to remove HUID linkage
  const handleOtpVerification = async () => {
    try {
      // Logic to verify OTP and remove HUID linkage
      console.log(`Verifying OTP: ${otp} for Aadhar: ${aadhar}`);

      // Call API to remove HUID linkage
      const response = await axios.post('http://localhost:3000/contract/remove-huid', {
        aadhar,
        huid,
      });

      console.log('Response:', response.data);
      alert("HUID linkage removed successfully! Transaction hash: " + response.data.txHash);
    } catch (error) {
      console.error('Error removing HUID:', error);
      alert("Failed to remove HUID. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#F2EAD3]">
      <h2 className="font-medium text-4xl mb-5">Gold Exchange</h2>
      <div className="w-3/4 max-w-md">
        <div className="pt-4">
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-full h-14 w-full p-4"
            placeholder="Enter your name"
          />
        </div>
        <div className="pt-4">
          <label className="block mb-2">Aadhar Number:</label>
          <input
            type="text"
            value={aadhar}
            onChange={(e) => setAadhar(e.target.value)}
            className="rounded-full h-14 w-full p-4"
            placeholder="Enter your Aadhar Number"
          />
        </div>
        <div className="pt-4">
          <label className="block mb-2">HUID:</label>
          <input
            type="text"
            value={huid}
            onChange={(e) => setHuid(e.target.value)}
            className="rounded-full h-14 w-full p-4"
            placeholder="Enter your HUID"
          />
        </div>

        {isOtpSent && (
          <div className="pt-4">
            <label className="block mb-2">Enter OTP:</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="rounded-full h-14 w-full p-4"
              placeholder="Enter OTP"
            />
          </div>
        )}

        <div className="p-10">
          {!isOtpSent ? (
            <Button title="Submit" onClick={handleSubmit} />
          ) : (
            <Button title="Verify OTP" onClick={handleOtpVerification} />
          )}
        </div>
      </div>
    </div>
  );
}
