import React, { useState } from 'react';
import LocationTable from '../components/LocationTable.js';
import axios from "axios";

export const SearchPage = () => {

    const [locationData, setLocationData] = useState({"location": "", "name": "", "distance": ""});
    const [streetName, setStreetName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

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
          setLocationData(({
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
        })
      }

    return (
        <>
            <h2>Search for nearest EV Station</h2>

                <form>
            <label for="streetName">Enter your Street name/address:
                <input
                    type="text"
                    value={streetName}
                    id="streetName" 
                    name="streetName" 
                    onChange={(e) => setStreetName(e.target.value)}
                />
            </label>
            </form>

            <form>
            <label for="city">Enter your city:
                <input
                    type="text"
                    value={city}
                    id="city" 
                    name="city" 
                    onChange={(e) => setCity(e.target.value)}
                />
            </label>
            </form>

            <form>
            <label for="state">Enter your state:
                <input
                    type="text"
                    value={state}
                    id="state" 
                    name="state" 
                    onChange={(e) => setState(e.target.value)}
                />
            </label>
            </form>

            <button onClick={getStation}>Search</button>

                <LocationTable 
                    locationData={locationData}
                />
            
        </>
    );
}

export default SearchPage;