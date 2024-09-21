import Button from "../Components/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Ownership() {
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const [buttonText, setButtonText] = useState("Send OTP");
  const navigate = useNavigate();
  const handleSendOTP = () => {
    console.log("OTP has been sent");
    setIsOtpVisible(true);
    setButtonText("Proceed");
    if (isOtpVisible) {
      handleSubmit();
    }
  };
  const handleSubmit = () => {
       navigate('/purity')
  }

  return (
    <div className="h-max">
      <div className="flex p-10 h-auto items-center">
      <div className="w-1/3 mx-auto h-auto bg-white p-8 border border-gray-200 rounded-xl shadow-lg w-[40%]">
        <h2 className="text-2xl text-center font-bold mb-6 text-gray-800">Verify HUID</h2>
        <form>
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
        <div className="mt-0 mb-4">
        <Button title={buttonText} onClick={handleSendOTP} />
      </div>
      </div>
      </div>
    </div>
  );
}
