import json

file = open("sample.json")
dic = json.load(file)
print(json.loads(dic[0]))