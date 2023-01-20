import { useState } from 'react'
import axios from "axios";
import logo from './logo.svg';
import './App.css';

function App() {

   // new line start
  const [profileData, setProfileData] = useState(null)
  const [locationData, setLocationData] = useState(null)
  const [address, setAddress] = useState("");

  function getData() {
    axios({
      method: "GET",
      url:"/profile",
    })
    .then((response) => {
      const res =response.data
      setProfileData(({
        profile_name: res.name,
        about_me: res.about}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}
    function getLocation() {
    axios({
      method: "GET",
      url:"/location/" + address,
    })
    .then((response) => {
      const res =response.data
      setLocationData(({
        location: res.location}))
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
          Edit <code>src/App.js</code> and save to reload.
        </p>
            <form>
      <label>Enter your address:
        <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
        />
      </label>
    </form>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* new line start*/}
         <p>To get your location: </p><button onClick={getLocation}>Click me</button>
        {locationData && <div>
              <p>Location: {locationData.location}</p>
            </div>
        }
         {/* end of new line */}
      </header>
    </div>
  );
}

export default App;