from flask import Flask
from markupsafe import escape
import requests


api = Flask(__name__)

api_key = 'CBLilVZ0bLDqjI5NvabP3pZbXgRF5VvYYFQwIHqZ'

@api.route('/profile')
def my_profile():
    response_body = {
        "name": "Nagato",
        "about": "Hello! I'm a full stack developer that loves python and javascript"
    }

    return response_body


@api.route('/location/<location>')
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