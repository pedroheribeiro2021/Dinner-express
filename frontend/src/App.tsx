import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { Header } from './components/header';
import { Home } from './pages/home';


function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </main>
  );
}

export default App;
