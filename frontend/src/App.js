import { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './car-svgrepo-com.svg';


import HomePage from './pages/HomePage.js'
import SearchPage from './pages/SearchPage.js'
import Nav from './components/Nav.js';

function App() {

  return (
    <>
      <BrowserRouter>

        <header>
          <h1>EV Assist</h1>
          <h2><img src={logo} className="App-logo" alt="logo" /></h2>
        </header>

        <Nav />

        <main>
          <section>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />


            </Routes>
          </section>
        </main>
        
        <footer>
          <p>Photo by <a href="https://unsplash.com/@t_t?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Studio Dekorasyon</a> on <a href="https://unsplash.com/photos/vngzm4P2BTs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
  
          <p><cite>&copy; 2023 Alexander Freddo</cite></p>
        </footer>
        
        </BrowserRouter>
      </>
  );
}

export default App;