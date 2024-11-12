import React from "react";

function PaymentGateways() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-50 p-4">
      <h1 className="text-2xl font-bold mb-4">Payment Gateway</h1>
      <p className="mb-8 text-gray-600">Complete your payment to proceed with booking.</p>

      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-8">
        {/* Card Payment Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Card Payment</h2>
          <label className="block mb-2 font-semibold">Card Number</label>
          <input
            type="text"
            className="w-full mb-4 border border-gray-300 rounded-md p-2"
            placeholder="1234 5678 9123 4567"
          />

          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label className="block mb-2 font-semibold">Expiry Date</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="MM/YY"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 font-semibold">CVV</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="123"
              />
            </div>
          </div>

          <button className="w-full bg-yellow-500 text-black font-semibold py-2 rounded-md mt-4">
            Pay Now
          </button>
        </div>

        {/* QR Code Payment Section */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">QR Code Payment</h2>
          <p className="text-gray-600 mb-4">Scan the QR code below to complete payment.</p>
          <div className="flex items-center justify-center bg-gray-200 p-4 rounded-lg">
            <img src="./qr.png" alt="QR Code" className="w-32 h-32 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentGateways;
