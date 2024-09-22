import { useState } from "react";

export default function HUIDListing() {
  const [aadharNumber, setAadharNumber] = useState("");
  const [huidResult, setHUIDResult] = useState<string | null>(null);
  const [isResultVisible, setIsResultVisible] = useState(false);

  const getHUIDs = () => {
    // Simulate fetching HUIDs based on Aadhar number
    const mockResult = `HUID for Aadhar ${aadharNumber}: 1234567890`;

    setHUIDResult(mockResult);
    setIsResultVisible(true);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-yellow-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="font-bold text-lg mb-4">HUID Listing</h2>
        <label htmlFor="aadharInput" className="block mb-2">Enter Aadhar Number:</label>
        <input
          type="text"
          id="aadharInput"
          value={aadharNumber}
          onChange={(e) => setAadharNumber(e.target.value)}
          required
          className="border border-gray-300 p-2 mb-4 w-full rounded"
        />
        <button
          onClick={getHUIDs}
          className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 w-full"
        >
          Get HUIDs
        </button>
        {isResultVisible && (
          <div className="mt-4 p-2 bg-gray-100 rounded">
            <strong>Result:</strong>
            <p>{huidResult}</p>
          </div>
        )}
      </div>
    </div>
  );
}