# import requests
import json
from operator import itemgetter
# url = "https://api.thecatapi.com/v1/images/search?limit=50" # replace with the endpoint URL that returns the image
filename = "test.json" # replace with the filename of the JSON file to modify

# response = requests.get(url)

with open(filename, 'r') as f:
    json_data = json.load(f)

sortData = sorted(json_data['cats'], key=lambda cat: cat['name'])

with open('test.json', 'w') as f:
    json.dump(sortData, f)