import Button from "../Components/button";
import { useState } from "react";

interface LoginPageProps {
  usertype: 'jewellery' | 'bank'; // Type can be either 'jewellery' or 'bank'
}

export default function LoginPage({ usertype }: LoginPageProps) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle the login logic here (just logging for now)
    console.log(`ID: ${id}, Password: ${password}, Usertype: ${usertype}`);
    alert(`Logging in with ID: ${id} and Usertype: ${usertype}`);
  };

  return (
    <div className="flex h-screen">
      {/* Full height for the entire container */}
      
      <div className="bg-[#F2EAD3] w-1/2 h-full flex flex-col justify-center">
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
    </div>
  );
}
