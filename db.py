import requests
import json

url = "https://api.thecatapi.com/v1/images/search?limit=50" # replace with the endpoint URL that returns the image
filename = "db.json" # replace with the filename of the JSON file to modify
breeds = ['Orange Tabby']

response = requests.get(url)

with open(filename, 'r') as f:
    json_data = json.load(f)

i = 0
for cat in json_data['cats']:
    cat['image'] = response[i]['url']
    i += 1

# with open('test.json', 'w') as f:
#     json.dump(json_data, f)