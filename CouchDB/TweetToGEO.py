import json

# The files extracted from the views are to be called 'results.json'
tweetFile = open("results.json")
tweets_collection = json.load(tweetFile)

geojson = {  
    "type":"FeatureCollection",
    "features":[]
    }

for tweet in tweets_collection:
    tweets_box = tweet["bbox"]
    long = (tweets_box[0] + tweets_box[2])/2
    lat = (tweets_box[1] + tweets_box[3])/2

    feature = {"type": "Feature", "geometry": {}, "properties": {}}

    feature["geometry"] = {"type": "Point",
                            "coordinates": [long, lat]}
    feature["properties"]["text"] = tweet["text"]
    feature["properties"]["sentiment"] = tweet["sentiment"]

    geojson["features"].append(feature)

# File output will have the name spatial_data.geojson
    with open('spatial_data.geojson', 'w') as fp:
        json.dump(geojson, fp)