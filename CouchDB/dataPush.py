import ijson
import json
import requests

file = open('twitter-huge.json', 'rb')
total_chunk = ijson.items(file, "rows.item")
url = "http://admin:admin@172.26.135.230:5984/testing/_bulk_docs"

index = 0
restart_point = 0
docList = []
print("Starting the sending")
for tweet in total_chunk:
    
    tweet = tweet['doc']

    if index < restart_point:
        continue

  
    dic = {}

    dic["author_id"] =  tweet["data"]["author_id"]
    dic["text"] = tweet["data"]["text"]

    try:
        dic["places"] = tweet["includes"]["places"][0]["full_name"]
        bbox = tweet["includes"]["places"][0]["geo"]["bbox"]
        dic["bbox"] = [float(el) for el in bbox]
    except KeyError:
        continue

    try:
        dic["sentiment"] = float(tweet["data"]["sentiment"])
    except KeyError:
        pass

    try:
        dic["tag"] = tweet["data"]["matching_rules"][0]["tag"]
    except:
        pass


    docList.append(dic)
    

    if len(docList) % 100 == 0:
        sendDoc = {"docs": docList}
        x = requests.post(url, headers = {"Content-Type": "application/json"}, json = sendDoc)
        print("I've sent the data")

        index_file = {"indexCurrent": index}
        json_object = json.dumps(index_file)
        with open('index.json', 'w') as f:
            f.write(json_object)

        docList = []
         
    index += 1

if len(docList) > 0:
    sendDoc = {"docs": docList}
    x = requests.post(url, headers = {"Content-Type": "application/json"}, json = sendDoc)
    print("I've sent the data")

    index_file = {"indexCurrent": index}
    json_object = json.dumps(index_file)
    with open('index.json', 'w') as f:
        f.write(json_object)

        