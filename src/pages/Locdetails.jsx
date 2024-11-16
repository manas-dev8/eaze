import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaMapMarkerAlt, FaInfoCircle } from "react-icons/fa";

function LocDetails() {
  const navigate = useNavigate();

  // State to manage selected time slots and date
  const [fromTime, setFromTime] = useState("05:30 PM");
  const [toTime, setToTime] = useState("07:30 PM");
  const [selectedDate, setSelectedDate] = useState("2024-12-02");

  // Array of predefined time slots
  const timeSlots = [
    { label: "05:30 PM", value: "05:30 PM" },
    { label: "06:00 PM", value: "06:00 PM" },
    { label: "06:30 PM", value: "06:30 PM" },
    { label: "07:00 PM", value: "07:00 PM" },
    { label: "07:30 PM", value: "07:30 PM" },
  ];

  // Function to handle the change in time slots
  const handleTimeChange = (type, value) => {
    if (type === "from") {
      setFromTime(value);
    } else if (type === "to") {
      setToTime(value);
    }
  };

  // Function to handle date change
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

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

      {/* Location Details */}
      <div className="text-lg font-semibold pl-4">Location details</div>
      <div className="text-2xl font-bold pl-4">
        India Gate, Kartavya Path, India Gate, New Delhi
      </div>

      {/* Date Picker */}
      <div className="flex items-center pl-4 mt-4">
        <label className="text-lg font-semibold mr-4">Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="border border-gray-300 p-2 rounded-md"
        />
      </div>

      {/* Date and Time Selection */}
      <div className="flex items-center space-x-4 pl-4 mt-4">
        <div className="border border-black rounded-md p-4 w-40">
          <div className="text-sm font-semibold">From:</div>
          <select
            value={fromTime}
            onChange={(e) => handleTimeChange("from", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            {timeSlots.map((slot) => (
              <option key={slot.value} value={slot.value}>
                {slot.label}
              </option>
            ))}
          </select>
          <div>{fromTime}</div>
          <div>{new Date(selectedDate).toLocaleDateString()}</div>
        </div>
        <div className="text-2xl">➡️</div>
        <div className="border border-black rounded-md p-4 w-40">
          <div className="text-sm font-semibold">To:</div>
          <select
            value={toTime}
            onChange={(e) => handleTimeChange("to", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            {timeSlots.map((slot) => (
              <option key={slot.value} value={slot.value}>
                {slot.label}
              </option>
            ))}
          </select>
          <div>{toTime}</div>
          <div>{new Date(selectedDate).toLocaleDateString()}</div>
        </div>
      </div>

      {/* Vehicle Selection */}
      <div className="pl-4 mt-4">
        <div className="text-lg font-semibold mb-2">Select Vehicle:</div>
        <div className="flex space-x-4">
          <button
            className="p-4 border border-black rounded-md"
            onClick={() => navigate('/vehicledetails')}
          >
            Two Wheeler
          </button>
          <button 
            className="p-4 border border-black rounded-md"
            onClick={() => navigate('/vehicledetails')}
          >
            Three Wheeler
          </button>
          <button 
            className="p-4 border border-black rounded-md"
            onClick={() => navigate('/vehicledetails')}
          >
            Four Wheeler
          </button>
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
