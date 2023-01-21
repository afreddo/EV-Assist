from flask import Flask
from markupsafe import escape
import requests


api = Flask(__name__)

api_key = 'CBLilVZ0bLDqjI5NvabP3pZbXgRF5VvYYFQwIHqZ'

@api.route('/station/<location>')
def my_location(location):
    print(location)
    print(type(location))
    response = requests.get(f"https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key={api_key}&location={location}&fuel_type=ELEC&limit=1")
    response_body = {
        "location": response.json()["fuel_stations"][0]["street_address"]
    }

    return response_body


if __name__ == '__main__':
    api.run(debug=True)