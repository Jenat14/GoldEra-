import Button from "../Components/button";
import { useState } from "react";

export default function Ownership() {
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const [buttonText, setButtonText] = useState("Send OTP");

  const handleSendOTP = () => {
    console.log("OTP has been sent");
    setIsOtpVisible(true);
    setButtonText("Proceed");
  };

  return (
    <div className="h-max">
      <div className="flex p-10 h-full items-center">
      <div className="w-1/3 mx-auto h-[28rem] bg-white p-8 border border-gray-200 rounded-xl shadow-lg w-[40%]">
        <h2 className="text-2xl text-center font-bold mb-6 text-gray-800">Current Owner</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C07F00]"
            />
          </div>
            <div className="mb-4">
            <label htmlFor="aadhar" className="block text-gray- font-medium mb-2">
              Aadhaar Number
            </label>
            <input
              type="text"
              placeholder="Enter your Aadhar Number"
              className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C07F00]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="huid" className="block text-gray- font-medium mb-2">
              HUID
            </label>
            <input
              type="text"
              placeholder="Enter the HUID"
              className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C07F00]"
            />
          </div>
        {isOtpVisible&&
          (<div className="mb-4">
            <label htmlFor="huid" className="block text-gray- font-medium mb-2">
              Enter OTP
            </label>
            <input
              type="text"
              placeholder="Enter your OTP"
              className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C07F00]"
            />
          </div>
        )}
        </form>
      </div>
        <div className="inline-flex justify-center h-14 w-14 items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#C07F00] rounded-lg">
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </div>
        <div className="w-1/3 mx-auto h-[28rem] bg-white p-8 border border-gray-200 rounded-xl shadow-lg w-[40%]">
        <h2 className="text-2xl text-center font-bold mb-6 text-gray-800">New Owner</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C07F00]"
            />
          </div>
            <div className="mb-4">
            <label htmlFor="aadhar" className="block text-gray- font-medium mb-2">
              Aadhaar Number
            </label>
            <input
              type="text"
              placeholder="Enter your Aadhar Number"
              className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C07F00]"
            />
          </div>
        {isOtpVisible&&
          (<div className="mb-4">
            <label htmlFor="huid" className="block text-gray- font-medium mb-2">
              Enter OTP
            </label>
            <input
              type="text"
              placeholder="Enter your OTP"
              className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C07F00]"
            />
          </div>
        )}
        </form>
      </div>
      </div>
      <div className="mt-0 mb-4">
        <Button title={buttonText} onClick={handleSendOTP} />
      </div>
    </div>
  );
}
