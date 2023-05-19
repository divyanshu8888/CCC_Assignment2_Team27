import json

# The files extracted from the views are to be called 'xx.json'. Replace the name here.
tweetFile = open("test.json")
tweets_collection = json.load(tweetFile)["rows"]

geojson = {  
    "type":"FeatureCollection",
    "features":[]
    }

for tweet in tweets_collection:
    tweet = tweet["value"]
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
    with open('spatial_data_medical.geojson', 'w') as fp:
        json.dump(geojson, fp)


# curl -XGET "http://admin:admin@172.26.135.230:5984/twitter/_design/travelhistory/_view/travel-view?reduce=false&include_docs=false" > /data/travel.json