import { useState } from 'react'
import axios from "axios";
import logo from './car-svgrepo-com.svg';
import './App.css';
import DisplayFormDataInTable from "./data_table/display_form_data_in_table"

function App() {

  return (
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
  );
}

export default App;