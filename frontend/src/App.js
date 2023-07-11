import { useState } from 'react'
import './App.css';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './car-svgrepo-com.svg';


import HomePage from './pages/HomePage.js'
import SearchPage from './pages/SearchPage.js'
import Nav from './components/Nav.js';
=======
import DisplayFormDataInTable from "./data_table/display_form_data_in_table"
>>>>>>> 1893f5d80f2255b50fa1f34dc95ef709920c600d

function App() {

  return (
<<<<<<< HEAD
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
=======
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          EV-Assist
        </p>
        <a
          className="App-text"
        >
          A useful tool for determining the closest electrical vehicle charging station to a given address
          within the United States.
        </a>
        <a
          className="App-link"
          href="https://afdc.energy.gov/stations/#/find/nearest"
          target="_blank"
          rel="noopener noreferrer"
        >
          Data Source
        </a>


         {/* end of new line*/}
      </header>

      <source className="App-source">

      </source>
      <body className="App-body">
         <DisplayFormDataInTable />
      </body>
    </div>
>>>>>>> 1893f5d80f2255b50fa1f34dc95ef709920c600d
  );
}

export default App;