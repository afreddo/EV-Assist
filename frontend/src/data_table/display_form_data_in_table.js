import React from "react";
import { useState } from 'react'
import Table from "./table";
import '../App.css';
import axios from "axios";

function Main(){

  const [stationData, setStationData] = useState(null)
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

    function getStation() {
    var streetName_arr = streetName.split(" ")
    var streetName_ready = streetName_arr.join('+')
    var city_arr = city.split(" ")
    var city_ready = city_arr.join('+')
    var state_arr = state.split(" ")
    var state_ready = state_arr.join('+')
    axios({
      method: "GET",
      url:"/station/" + streetName_ready + "+" + city_ready + "+" + state_ready,
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

 return(

     <React.Fragment>
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
         <p>To find nearby stations: </p><button onClick={getStation}>Click me</button>
          {stationData && <div>
              <table className="App-table">
            <thead className="App-th">
                <tr>
                    <th>Station Name</th>
                    <th>Location</th>
                    <th>Distance</th>
                </tr>
            </thead>
            <tbody>
                <td className="App-td">{stationData.name[0]}</td>
                <td className="App-td">{stationData.location[0]}</td>
                <td className="App-td">{stationData.distance[0]}</td>
            </tbody>
            <tbody>
                <td className="App-td">{stationData.name[1]}</td>
                <td className="App-td">{stationData.location[1]}</td>
                <td className="App-td">{stationData.distance[1]}</td>
            </tbody>
            <tbody>
                <td className="App-td">{stationData.name[2]}</td>
                <td className="App-td">{stationData.location[2]}</td>
                <td className="App-td">{stationData.distance[2]}</td>
            </tbody>
            <tbody>
                <td className="App-td">{stationData.name[3]}</td>
                <td className="App-td">{stationData.location[3]}</td>
                <td className="App-td">{stationData.distance[3]}</td>
            </tbody>
            <tbody>
                <td className="App-td">{stationData.name[4]}</td>
                <td className="App-td">{stationData.location[4]}</td>
                <td className="App-td">{stationData.distance[4]}</td>
            </tbody>
        </table>
            </div>
          }
         {/* end of new line */}
    </body>
     </React.Fragment>
 );
}
export default Main;
