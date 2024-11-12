import React from "react";
import { useNavigate } from "react-router-dom"; // Ensure you're using react-router for navigation
import { FaHome, FaMapMarkerAlt, FaInfoCircle } from "react-icons/fa";

function LocDetails() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen justify-between bg-cream">
      {/* India Gate Photo Section */}
      <div className="h-1/3 w-full overflow-hidden">
        <img
          src="./ig1.png"
          alt="India Gate"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Booking Details Section */}
      <div className="flex flex-col space-y-4 p-4">
        {/* Input Text Area */}
        <textarea
          placeholder=""
          className="w-full h-20 border border-black rounded-md p-2 resize-none"
        />

        {/* Location Details */}
        <div className="text-lg font-semibold">Location details</div>
        <div className="text-2xl font-bold">
          India Gate, Kartavya Path, India Gate, New Delhi
        </div>

        {/* Date and Time Selection */}
        <div className="flex items-center space-x-4">
          <div className="border border-black rounded-md p-4 w-40">
            <div className="text-sm font-semibold">From:</div>
            <div>05:30 PM</div>
            <div>SAT, DEC-02</div>
          </div>
          <div className="text-2xl">➡️</div>
          <div className="border border-black rounded-md p-4 w-40">
            <div className="text-sm font-semibold">To:</div>
            <div>07:30 PM</div>
            <div>SAT, DEC-02</div>
          </div>
        </div>

        {/* Vehicle Selection */}
        <div>
          <div className="text-lg font-semibold mb-2">Select Vehicle:</div>
          <div className="flex space-x-4">
            <button
              className="p-4 border border-black rounded-md"
              onClick={() => navigate('/paymentgateways')}
            >
              🏍️
            </button>
            <button className="p-4 border border-black rounded-md">🚗</button>
            <button className="p-4 border border-black rounded-md">+ Vehicle</button>
          </div>
        </div>
      </div>

      {/* Book Now Button */}
      <button className="bg-yellow-500 text-black font-semibold text-lg rounded-md py-2 mx-4 mb-4">
        Book now
      </button>

      {/* Bottom Navigation Icons */}
      <div className="w-full flex justify-around bg-gray-800 text-white py-4 fixed bottom-0">
        <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate('/')}>
          <FaHome size={24} />
          <span className="text-sm">Home</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate('/map')}>
          <FaMapMarkerAlt size={24} />
          <span className="text-sm">Map</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => alert("Info about the app!")}>
          <FaInfoCircle size={24} />
          <span className="text-sm">Info</span>
        </div>
      </div>
    </div>
  );
}

export default LocDetails;
