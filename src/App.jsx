import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/Welcomepage';
import SignupPage from './pages/Signuppage.JSX';
import MapPage from './pages/Mappage';
import LocDetails from './pages/Locdetails';
import PaymentGateways from './pages/Paymentgateways'; // Import the new PaymentGateways page

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
      <Route path="/paymentgateways" element={<PaymentGateways />} /> {/* New route for PaymentGateways */}
    </Routes>
  );
};

export default App;
