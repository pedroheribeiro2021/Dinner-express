import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { Header } from './components/header';
import { Home } from './pages/home';
import { Providers } from './components/providers/providers';
import ReactModal from "react-modal";


function App() {
  ReactModal.setAppElement("#root");
  return (
    <main>
      <Providers>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Providers>
    </main>
  );
}

export default App;
