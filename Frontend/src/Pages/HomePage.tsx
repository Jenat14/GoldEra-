import React from 'react';
import cardImage1 from '../assets/cardImage1.png';
import cardImage2 from '../assets/cardImage2.png';
import cardImage3 from '../assets/cardImage3.png';
import logo from '../assets/logo.png';
import Navbar from '../Components/Navbar';


const HomePage: React.FC = () => {
  const cards = [
    {
      id: 1,
      link:"#",
      description: <b>BANK</b>,
      image: cardImage1, // Replace with your image URL
    },
    {
      id: 2,
      link:"#",
      description: <b>JEWELLERY</b>,
      image: cardImage2, // Replace with your image URL
    },
    {
      id: 3,
      link:"#",
      description: <b>CITIZEN</b>,
      image: cardImage3, // Replace with your image URL
    },
  ];

  return (
    <div style={{ backgroundColor: '#FFF7D4' }} className="min-h-screen">
    <Navbar />
    {/* Header with logo and title */}
    <div className="flex items-center justify-center p-11"> {/* Added margin-top */}
      <img src={logo} alt="Logo" className="w-32 mr-4" />
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold text-black">GOLDERA</h1>
        <h2 className="text-lg font-medium text-black mt-1 text-center">
          GATEWAY TO AN ERA OF SECURE GOLD TRANSACTIONS
        </h2>
      </div>
    </div>
  
    {/* Content section */}
    <div className="flex items-center justify-center p-10"> {/* Increased margin-top */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((card) => (
            <a href={card.link}>
          <div
            key={card.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col justify-between max-w-xs md:max-w-md"
          >
            <img
              src={card.image}
              alt=""
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4 flex flex-col flex-grow">
              <p className="text-gray-700">{card.description}</p>
            </div>
            <div className="mt-auto">
              {/* Additional content can go here */}
            </div>
          </div>
          </a>
        ))}
      </div>
      
    </div>
  </div>
  
  );
};

export default HomePage;
