import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Porcoes from './pages/Porcoes';
import Bebidas from './pages/Bebidas';
import Drinks from './pages/Drinks';
import Doses from './pages/Doses';
import Admin from './pages/Admin';
import Login from './services/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = () => {
    setIsAuthenticated(true);
  };

  const verifyAuthentication = (): JSX.Element | null => {
    if (localStorage.getItem('atila') === 'logado' || localStorage.getItem('rafa') === 'logado') {
      return <Admin />;
    } else {
      return <Login authenticate={authenticate} />;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Admin" element={verifyAuthentication()} />
        <Route path="/Porcoes" element={<Porcoes />} />
        <Route path="/Bebidas" element={<Bebidas />} />
        <Route path="/Drinks" element={<Drinks />} />
        <Route path="/Doses" element={<Doses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
