import json


def notfound(s):
    inp = s
    flag = False

    with open("noResponses.json", "r") as f:
        jsonFile = f.read()

    mydict = json.loads(jsonFile)

    for x in mydict["noResponses"]:
        if not flag and x["input"] == inp:
            x["times"] = x["times"] + 1
            flag = True

    if not flag:
        noresponse = {
            "input": inp,
            "times": 1
        }

        mydict["noResponses"].append(noresponse)

    finalJson = json.dumps(mydict)

    with open("noResponses.json", "w") as f:
        f.write(finalJson)
