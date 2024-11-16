import React, { useState } from 'react';
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';

const MapPage = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [mapSrc, setMapSrc] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387201.3678241692!2d-74.25986599999999!3d40.6971475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1630026697121!5m2!1sen!2sin"
  );

  const handlePlaceChanged = () => {
    const place = window.autocomplete.getPlace();
    if (place && place.geometry) {
      const lat = place.geometry.location.lat();t
      setMapSrc(
        `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387201.3678241692!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5m2!1sen!2sin`
      );
      setInputValue(place.name);
    } else {
      console.warn("Please select a valid location from the dropdown.");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleNavigateToLocDetails = (location) => {
    navigate('/locdetails', { state: { location } });
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-yellow-50 pb-20">
      <div className="w-full p-4 bg-white shadow-lg rounded-lg">
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" libraries={['places']}>
          <Autocomplete
            onLoad={(autocomplete) => (window.autocomplete = autocomplete)}
            onPlaceChanged={handlePlaceChanged}
          >
            <input
              type="text"
              placeholder="Search for places"
              value={inputValue}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm mb-2"
              noValidate
            />
          </Autocomplete>
          <button
            onClick={handlePlaceChanged}
            className="w-full p-3 bg-blue-500 text-white rounded-lg mt-2 hover:bg-blue-600"
          >
            Search
          </button>
        </LoadScript>

        <div className="w-full my-6">
          <div className="map-container w-full" style={{ height: '450px' }}>
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="map"
            ></iframe>
          </div>
        </div>

        <div className="w-full p-4 border border-black rounded-lg mb-20">
          <h3 className="text-lg font-semibold mb-2">Nearby Parkings</h3>
          <div className="flex justify-between space-x-2">
            <div
              className="w-1/3 h-16 bg-gray-200 rounded-lg border border-black p-4 cursor-pointer"
              onClick={() => handleNavigateToLocDetails("INDIA GATE")}
            >
              INDIA GATE
            </div>
            <div
              className="w-1/3 h-16 bg-gray-200 rounded-lg border border-black p-4 cursor-pointer"
              onClick={() => handleNavigateToLocDetails("RED FORT")}
            >
              RED FORT
            </div>
            <div
              className="w-1/3 h-16 bg-gray-200 rounded-lg border border-black p-4 cursor-pointer"
              onClick={() => handleNavigateToLocDetails("TAJ MAHAL")}
            >
              TAJ MAHAL
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-around bg-gray-800 text-white py-4 fixed bottom-0">

        <div>
        <img
          src="./logo2.png"
          alt="Logo"
          className="w-30 h-12 "
        />
        </div>
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

export default MapPage;
