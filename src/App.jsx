import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/welcomepage';
import SignupPage from './pages/Signuppage.JSX';
import MapPage from './pages/Mappage';
import LocDetails from './pages/Locdetails';
import PaymentGateways from './pages/Paymentgateways';
import Vehicledetails from './pages/Vehicledetails'; 
import './App.css';
const App = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleSignupClick = () => {
    setIsSignup(true);
  };

  const handleLoginClick = () => {
    setIsSignup(false);
  };

  return (
    <Routes future={{ v7_relativeSplatRoutes: true }}>
      <Route
        path="/"
        element={
          isSignup ? (
            <SignupPage onLoginClick={handleLoginClick} />
          ) : (
            <WelcomePage onSignupClick={handleSignupClick} />
          )
        }
      />
      <Route path="/map" element={<MapPage />} />
      <Route path="/locdetails" element={<LocDetails />} />
      <Route path="/paymentgateways" element={<PaymentGateways />} />
      <Route path="/vehicledetails" element={<Vehicledetails />} /> {/* Route for Vehicledetails */}
    </Routes>
  );
};

export default App;
