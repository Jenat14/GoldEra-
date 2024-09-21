import TransferForm from "../Components/TransferForm";
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
        <TransferForm
          title="Current Owner"
          input1="Name"
          input2="Aadhar Number"
          input3="HUID"
          input4={isOtpVisible}
        />
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
        <TransferForm title="New Owner" input1="Name" input2="Aadhar Number" input4={isOtpVisible} />
      </div>
      <div className="mt-0 mb-4">
        <Button title={buttonText} onClick={handleSendOTP} />
      </div>
    </div>
  );
}
