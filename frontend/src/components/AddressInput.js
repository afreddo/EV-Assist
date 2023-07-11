import React, { useState } from 'react';

function AddressInput(){
    const [streetName, setStreetName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    return(
        <>
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
        </>
    )
}
export default AddressInput;