# EV-Assist
1. Project's Title

This project is EV-Assist. It is a webapp that allows users to find the nearest electric vehicle charging stations to any location within the United States.


2. Project Description

This project has a frontend built with React, HTML, and CSS. The backend is constructed in python using the Flask framework. 

The webpage contains a form that the user can plug in their address of interest. The frontend sends an request to the backend API with the locaction selected by the user. The backend API then sends a request to the Department of Energy National Renewable Energy Lab API to retrieve the name, location, and distance of the nearest five stations to the site. The backend then converts this to a usable format for the frontend and returns the station names, locations, and distances from the address to the frontend in JSON format.

The information returned by the backend API is then added to a table shown on the webpage.

4. How to Install and Run the Project

Dependencies requred:
- flask
- requests
- axios

To install and run the project:

clone the project to a local directory

install dependencies

In the terminal: navigate to /EV-Assist/frontend

In the terminal: enter npm run start-backend
 - this starts the flask API

In the terminal: enter npm start
- this launches the frontend webpage

Webpage

![image](https://user-images.githubusercontent.com/64040498/213895796-9909dd4b-3a62-4b3c-b51e-5af6d2781bc3.png)

Example of inserted address

![image](https://user-images.githubusercontent.com/64040498/213895894-988e541d-b427-4ac5-9412-8bc7e4da40ca.png)

Example of table generated

![image](https://user-images.githubusercontent.com/64040498/213895904-fe995e0e-3cc2-485a-ae33-6737de045b43.png)



