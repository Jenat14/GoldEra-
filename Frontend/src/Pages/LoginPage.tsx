import Button from "../Components/button";
import { useState } from "react";
import axios, { AxiosError } from "axios";  // Import Axios and AxiosError
import jewelleryImage from "../assets/jewellery.jpg";
import bankImage from "../assets/bank.jpg";

interface LoginPageProps {
  usertype: 'Jewellery' | 'Bank';
}

interface LoginResponse {
  message: string;
  user: {
    Name: string;
  };
}

interface LoginErrorResponse {
  error: string;
}

export default function LoginPage({ usertype }: LoginPageProps) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post<LoginResponse>('http://localhost:3000/login', {
        id,
        password,
        usertype,
      });

      // Handle success response
      console.log(response.data);
      alert(`Login successful: ${response.data.user.Name}`);

    } catch (error) {
      // Ensure the error is typed as AxiosError
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<LoginErrorResponse>;

        // Handle the error if there's a response from the server
        if (axiosError.response) {
          alert(`Error: ${axiosError.response.data.error}`);
          console.log('Server Error:', axiosError.response.data.error);
        } else {
          alert('Network Error');
          console.log('Network Error:', error);
        }
      } else {
        // Non-Axios errors (e.g., JavaScript runtime errors)
        console.log('Unexpected Error:', error);
        alert('An unexpected error occurred');
      }
    }
  };

  const loginImage = usertype === 'Jewellery' ? jewelleryImage : bankImage;

  return (
    <div className="flex h-screen">
      {/* Left section: Login form */}
      <div className="bg-[#FFF7D4] w-1/2 h-full flex flex-col justify-center">
        <h2 className="font-medium text-5xl text-center">
          Login To Your {usertype === 'Jewellery' ? 'Jewellery' : 'Bank'} Portal
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
              placeholder={`Enter ${usertype === 'Jewellery' ? 'Jewellery' : 'Bank'} ID`}
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
