import React, { useState } from 'react';
import { FaHome, FaMapMarkerAlt, FaInfoCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Vehicledetails = () => {
    const [vehicleName, setVehicleName] = useState('');
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [selectedTiming, setSelectedTiming] = useState('');
    const [amount, setAmount] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    // Function to calculate amount based on time in minutes
    const handleTimingSelect = (minutes) => {
        const ratePerHour = 100; // 100 Rs per hour
        const calculatedAmount = (minutes / 60) * ratePerHour; // Calculate proportional cost
        setSelectedTiming(
            minutes >= 60
                ? `${minutes / 60} hour${minutes > 60 ? 's' : ''}`
                : `${minutes} minute${minutes > 1 ? 's' : ''}`
        );
        setAmount(Math.round(calculatedAmount)); // Round the amount for simplicity
    };

    const handleBook = () => {
        if (!selectedTiming || !amount) {
            alert("Please select a timing option.");
            return;
        }
        // Navigate to paymentgateways page
        navigate('/paymentgateways');
    };

    return (
        <div className="flex flex-col md:flex-row h-screen bg-[#f8f5ee]">
            {/* Left Side: Image and Title */}
            <div className="flex-1 flex flex-col justify-center items-center p-5">
                <div className="w-3/4 h-3/4 bg-white shadow-lg p-5">
                    <img 
                        src="addv.png" 
                        alt="Add Vehicle" 
                        className="w-full h-full object-cover rounded"
                    />
                </div>
                <h2 className="text-3xl font-bold mt-4">Add Your Vehicle..</h2>
            </div>

            {/* Right Side: Form */}
            <div className="flex-1 flex flex-col justify-center items-start px-10 space-y-5">
                <h2 className="text-2xl font-bold">Add Your Vehicle:</h2>

                {/* Vehicle Number */}
                <div className="w-full">
                    <label className="text-lg font-medium">Vehicle Number:</label>
                    <input 
                        type="text" 
                        value={vehicleNumber} 
                        onChange={(e) => setVehicleNumber(e.target.value)} 
                        className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="Enter vehicle number"
                    />
                </div>

                {/* Vehicle Name */}
                <div className="w-full">
                    <label className="text-lg font-medium">Vehicle Name (Specific):</label>
                    <input 
                        type="text" 
                        value={vehicleName} 
                        onChange={(e) => setVehicleName(e.target.value)} 
                        className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="Enter vehicle name"
                    />
                </div>

                {/* Phone Number */}
                <div className="w-full">
                    <label className="text-lg font-medium">Phone Number:</label>
                    <input 
                        type="tel" 
                        value={phoneNumber} 
                        onChange={(e) => setPhoneNumber(e.target.value)} 
                        className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="Enter phone number"
                    />
                </div>

                {/* OTP */}
                <div className="w-full">
                    <label className="text-lg font-medium">OTP:</label>
                    <input 
                        type="text" 
                        value={otp} 
                        onChange={(e) => setOtp(e.target.value)} 
                        className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="Enter OTP"
                    />
                </div>

                {/* Timing and Payment Selection */}
                <div className="w-full">
                    <label className="text-lg font-medium">Select Timing and Amount:</label>
                    <div className="flex flex-wrap gap-4 mt-2">
                        {[15, 30, 60, 120].map((minutes) => (
                            <button 
                                key={minutes}
                                onClick={() => handleTimingSelect(minutes)}
                                className={`px-4 py-2 border rounded-lg ${
                                    selectedTiming ===
                                    (minutes >= 60
                                        ? `${minutes / 60} hour${minutes > 60 ? 's' : ''}`
                                        : `${minutes} minute${minutes > 1 ? 's' : ''}`)
                                        ? 'bg-yellow-500 text-white'
                                        : 'bg-gray-100'
                                }`}
                            >
                                {minutes >= 60
                                    ? `${minutes / 60} hr - ₹${(minutes / 60) * 100}`
                                    : `${minutes} min - ₹${Math.round((minutes / 60) * 100)}`}
                            </button>
                        ))}
                    </div>
                    {amount && (
                        <p className="mt-2 text-lg font-medium text-green-600">
                            Selected: {selectedTiming}, Amount: ₹{amount}
                        </p>
                    )}
                </div>

                {/* Book Button */}
                <button 
                    onClick={handleBook} 
                    className="mt-5 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600"
                >
                    Book
                </button>
            </div>

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
};

export default Vehicledetails;
