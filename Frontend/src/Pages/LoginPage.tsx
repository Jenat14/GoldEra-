import Button from "../Components/button";
import { useState } from "react";
import jewelleryImage from "../assets/jewellery.jpg"; 
import bankImage from "../assets/bank.jpg"; 

interface LoginPageProps {
  usertype: 'jewellery' | 'bank'; 
}

export default function LoginPage({ usertype }: LoginPageProps) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(`ID: ${id}, Password: ${password}, Usertype: ${usertype}`);
    alert(`Logging in with ID: ${id} and Usertype: ${usertype}`);
  };

  // Determine which image to show based on the usertype
  const loginImage = usertype === 'jewellery' ? jewelleryImage : bankImage;

  return (
    <div className="flex h-screen">
      {/* Left section: Login form */}
      <div className="bg-[#FFF7D4] w-1/2 h-full flex flex-col justify-center">
        <h2 className="font-medium text-5xl text-center">
          Login To Your {usertype === 'jewellery' ? 'Jewellery' : 'Bank'} Portal
        </h2>
        <div className="w-3/4 mx-auto pt-10">
          <div className="pt-10">
            <p className="pb-2 font-normal text-base">Enter your ID:</p>
            <input
              type="text"
              id="id"
              className="rounded-full h-14 w-full p-4"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder={`Enter ${usertype === 'jewellery' ? 'Jewellery' : 'Bank'} ID`}
            />
          </div>
          <div className="pt-10">
            <p className="pb-2 font-normal text-base">Password:</p>
            <input
              type="password"
              id="Password"
              className="rounded-full h-14 w-full p-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </div>
          <div className="p-10">
            <Button title="Submit" onClick={handleLogin} />
          </div>
        </div>
      </div>

      {/* Right section: Conditionally rendered image */}
      <div className="w-1/2 h-full">
        <img src={loginImage} alt="Login" className="object-cover w-full h-full" />
      </div>
    </div>
  );
}
