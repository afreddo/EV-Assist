import { useState } from 'react'
import axios from "axios";
import logo from './car-svgrepo-com.svg';
import './App.css';
import DisplayFormDataInTable from "./data_table/display_form_data_in_table"

function App() {

   // new line start
  const [stationData, setStationData] = useState(null)
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

    function getStation() {
    axios({
      method: "GET",
      url:"/station/" + streetName + city + state,
    })
    .then((response) => {
      const res =response.data
      setStationData(({
        location: res.location,
        name: res.name,
        distance: res.distance
        }))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}
    //end of new line
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
         <form>
          <label>Enter your Street name/address:
            <input
                type="text"
                value={streetName}
                onChange={(e) => setStreetName(e.target.value)}
            />
          </label>
          </form>

          <form>
          <label>Enter your city:
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
          </label>
          </form>

          <form>
          <label>Enter your state:
            <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
            />
          </label>
          </form>

          {/* new line start*/}
         <p>To get your location: </p><button onClick={getStation}>Click me</button>
          {stationData && <div>
              <p>Name: {stationData.name}</p>
              <p>Location: {stationData.location}</p>
              <p>Distance: {stationData.distance}</p>
            </div>
          }
         {/* end of new line */}

         {/* new line start*/}
         <DisplayFormDataInTable />
      </body>
    </div>
  );
}

export default App;