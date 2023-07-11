import React from 'react';

import '../App.css';

function HomePage() {
    return (
        <>
            <h2>A tool for determining the closest electrical vehicle charging station to a given address
                within the United States.</h2>

            <article>

                <a
                    className="App-link"
                    href="https://afdc.energy.gov/stations/#/find/nearest"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Data Source
                </a>

            </article>
         </>
    );
}

export default HomePage;