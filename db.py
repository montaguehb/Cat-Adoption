import json

filename = "db.json"

with open(filename, 'r') as f:
    json_data = json.load(f)

for cat in json_data['cats']:
    cat['adopted'] = False

with open(filename, 'w') as f:
    json.dump(json_data, f)