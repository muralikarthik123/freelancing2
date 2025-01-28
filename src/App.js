import React from 'react';
import Login from './admin/admin.jsx';
import Home from './home/home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
