import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';


import NavBar from './components/NavBar/NavBar';
import Another from './components/another/Another';
import Auth from './components/Auth/Auth';

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <NavBar />
        <Routes>
         <Route path="/" element={<Another />} />
         <Route path="/auth" element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
