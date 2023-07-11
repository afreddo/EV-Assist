from flask import Flask
from markupsafe import escape
import requests


api = Flask(__name__)

api_key = 'CBLilVZ0bLDqjI5NvabP3pZbXgRF5VvYYFQwIHqZ'


@api.route('/station/<location>')
def my_location(location):

    print(location)

    response = requests.get(f"https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key={api_key}&location={location}&fuel_type=ELEC&limit=5")
    response_body = {
        "location": [response.json()["fuel_stations"][0]["street_address"],
                     response.json()["fuel_stations"][1]["street_address"],
                     response.json()["fuel_stations"][2]["street_address"],
                     response.json()["fuel_stations"][3]["street_address"],
                     response.json()["fuel_stations"][4]["street_address"]],
        "name": [response.json()["fuel_stations"][0]["station_name"],
                 response.json()["fuel_stations"][1]["station_name"],
                 response.json()["fuel_stations"][2]["station_name"],
                 response.json()["fuel_stations"][3]["station_name"],
                 response.json()["fuel_stations"][4]["station_name"]],
        "distance": [str(round(response.json()["fuel_stations"][0]["distance"], 2)) + " miles",
                     str(round(response.json()["fuel_stations"][1]["distance"], 2)) + " miles",
                     str(round(response.json()["fuel_stations"][2]["distance"], 2)) + " miles",
                     str(round(response.json()["fuel_stations"][3]["distance"], 2)) + " miles",
                     str(round(response.json()["fuel_stations"][4]["distance"], 2)) + " miles"]
    }

    return response_body


if __name__ == '__main__':
    api.run(debug=True)