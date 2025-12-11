import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/signup';
import SigninPage from './pages/signin';
import Homepage from './pages/home';
import SuccessPage from './pages/successPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/login" element={<SigninPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

