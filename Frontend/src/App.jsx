import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/signup';
import SigninPage from './pages/signin';

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<SignupPage />} />
      <Route path="/signin" element={<SigninPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

