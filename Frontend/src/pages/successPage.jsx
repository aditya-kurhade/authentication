import React from 'react';

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-4 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Success!</h1>
        <p className="text-gray-700 mb-6">Your operation was completed successfully.</p>
        <a href="/" className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition duration-150">
          Go to Homepage
        </a>
      </div>  
    </div>
  );
}
