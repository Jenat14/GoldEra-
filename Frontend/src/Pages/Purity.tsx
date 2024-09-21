import { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

// Register the necessary chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

export default function Purity() {
  const [file, setFile] = useState<File | null>(null);
  const [analysisResult, setAnalysisResult] = useState<string>("");
  const [chartData, setChartData] = useState<any>(null); // For the bar chart data
  const [adaptabilityRate, setAdaptabilityRate] = useState<number>(0); // For circular graph

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files ? e.target.files[0] : null;
    setFile(uploadedFile);
  };

  const handleAnalyzeClick = async () => {
    if (!file) {
      setAnalysisResult("Please upload a PDF document first.");
      return;
    }

    // Simulate PDF analysis and comparison with previous XRF reading data
    const reader = new FileReader();
    reader.onload = () => {
      const fileContent = reader.result as string;

      // Simulate previous and current XRF readings
      const previousData = {
        Gold: 80,
        Silver: 10,
        Copper: 9,
        Zinc: 1,
      };

      const currentData = {
        Gold: 78,
        Silver: 11,
        Copper: 10,
        Zinc: 1,
      };

      // Set the chart data for Bar graph
      const result = {
        labels: ["Gold", "Silver", "Copper", "Zinc"],
        datasets: [
          {
            label: "Previous Reading",
            backgroundColor: "rgba(54, 162, 235, 0.6)",
            data: Object.values(previousData),
          },
          {
            label: "Current Reading",
            backgroundColor: "rgba(255, 99, 132, 0.6)",
            data: Object.values(currentData),
          },
        ],
      };
      setChartData(result);

      // Calculate adaptability rate (based on gold purity)
      const previousPurity = previousData.Gold;
      const currentPurity = currentData.Gold;
      const adaptability = ((currentPurity / previousPurity) * 100).toFixed(2);
      setAdaptabilityRate(parseFloat(adaptability));

      // Set the analysis result for written report
      setAnalysisResult(`Document analyzed: ${file.name}`);
    };
    reader.readAsText(file);
  };

  // Data for circular graph (adaptability rate)
  const circularGraphData = {
    labels: ["Adaptability Rate"],
    datasets: [
      {
        data: [adaptabilityRate],
        backgroundColor: ["#36A2EB"],
        hoverBackgroundColor: ["#36A2EB"],
      },
    ],
  };

  return (
    <div className="h-max p-10">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-6">Upload PDF Document</h2>

        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="mb-6 p-2 border border-gray-300 rounded-lg"
        />

        <Button title="Analyze PDF" onClick={handleAnalyzeClick} />

        {/* Bar Chart Section */}
        {chartData && (
          <div className="mt-6 w-full max-w-lg">
            <h3 className="text-lg font-semibold mb-2">XRF Reading Comparison:</h3>
            <Bar data={chartData} options={{ responsive: true }} />
          </div>
        )}

        {/* Written Report Section */}
        {analysisResult && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg border border-gray-200 w-full max-w-lg">
            <h3 className="text-lg font-semibold mb-2">Analysis Report:</h3>
            <p className="text-gray-700 whitespace-pre-wrap">
              {analysisResult}
              {"\n"}Comparison Summary:
              {"\n"}Gold (Previous): 80%
              {"\n"}Gold (Current): 78%
              {"\n"}Silver, Copper, and Zinc show similar variations.
            </p>
          </div>
        )}

        {/* Gold Details Section */}
        {analysisResult && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg border border-gray-200 w-full max-w-lg">
            <h3 className="text-lg font-semibold mb-2">Gold Details:</h3>
            <p className="text-gray-700 whitespace-pre-wrap">
              Jeweller Registration Number: 6490262318
              {"\n"}Assaying and Hallmarking Centre (AHC): QUALITY ASSAY & HALLMARKING CENTRE PRIVATE LIMITED
              {"\n"}AHC Recognition Number: SRO/RAHC/R-600401
              {"\n"}AHC Address: 3rd FLOOR, 17/1491-D3,D4,D5,D6, MALABAR GATE RAM MOHAN ROAD, Kozhikode-673004
              {"\n"}Article Type: Bangles
              {"\n"}Date of Hallmarking: 23-06-2021
              {"\n"}Purity: 22K916
            </p>
          </div>
        )}

        {/* Circular Graph for Adaptability Rate */}
        {analysisResult && (
         <>
             <h3 className="text-lg font-semibold mb-2">Adaptability Rate (Circular Graph):</h3>
              <div className="mt-6 w-64 max-w-lg">
                <Doughnut data={circularGraphData} options={{ responsive: true }} />
              </div>
              <p className="text-center mt-2 text-xl font-bold">{adaptabilityRate}%</p> {/* Displaying the percentage */}

         </>
        )}
      </div>
    </div>
  );
}

interface ButtonProps {
  title: string;
  onClick: () => void;
}

function Button({ title, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
    >
      {title}
    </button>
  );
}
