import { useState } from "react";

export default function FindOwner() {
  const [huid, setHUID] = useState("");
  const [aadharResult, setAadharResult] = useState<string | null>(null);
  const [isResultVisible, setIsResultVisible] = useState(false);

  const getAadhar = () => {
    // Simulate fetching Aadhar number based on HUID
    const mockResult = `Aadhar for HUID ${huid}: 9876543210`;

    setAadharResult(mockResult);
    setIsResultVisible(true);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="font-bold text-lg mb-4">Fetch Aadhar</h2>
        <label htmlFor="huidInput" className="block mb-2">Enter HUID:</label>
        <input
          type="text"
          id="huidInput"
          value={huid}
          onChange={(e) => setHUID(e.target.value)}
          required
          className="border border-gray-300 p-2 mb-4 w-full rounded"
        />
        <button
          onClick={getAadhar}
          className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 w-full"
        >
          Get Aadhar
        </button>
        {isResultVisible && (
          <div className="mt-4 p-2 bg-gray-100 rounded">
            <strong>Result:</strong>
            <p>{aadharResult}</p>
          </div>
        )}
        <div className="flex justify-between mt-4">
          <a href="../Homelogin/Homelogin.html" className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600">
            Home
          </a>
          <a href="./BIShome.html" className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600">
            Back
          </a>
        </div>
      </div>
    </div>
  );
}