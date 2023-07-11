# EV-Assist

This project is EV-Assist. It is a webapp that allows users to find the nearest electric vehicle charging stations to any location within the United States.


**Project Description**

This project has a frontend built with React, HTML, and CSS. The backend is constructed in python using the Flask framework. 

The webpage contains a form that the user can plug in their address of interest. The frontend sends an request to the backend API with the locaction selected by the user. The backend API then sends a request to the Department of Energy National Renewable Energy Lab API to retrieve the name, location, and distance of the nearest five stations to the site. The backend then converts this to a usable format for the frontend and returns the station names, locations, and distances from the address to the frontend in JSON format.

The information returned by the backend API is then added to a table shown on the webpage.

**How to Install and Run the Project**

_**Dependencies required:**_

- install python dependencies from requirements.txt

- install javascript dependencies from package.json

**_To install and run the project:_**

1. clone the project to a local directory

2. install dependencies

3. In the terminal: navigate to /EV-Assist/frontend

4. In the terminal: enter npm run start-backend
   - this starts the flask API

5. In the terminal: enter npm start
   - this launches the frontend webpage

**Webpage**

![homepage](https://github.com/afreddo/EV-Assist/assets/64040498/30c0e0f7-e3b5-4642-af10-2761ddccf317)

Example of Search Page

![searchpage](https://github.com/afreddo/EV-Assist/assets/64040498/bd19572c-6102-48ce-9410-e452ce3516f9)




