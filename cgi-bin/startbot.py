#!C:/Users/Jose/AppData/Local/Programs/Python/Python37/python.exe

import cgitb
import cgi
import json
import dieselbot
print("Content-type: application/json\n\n")

cgitb.enable()
form = cgi.FieldStorage()
inp = form["s"].value

outp = dieselbot.chat(inp)

print(json.dumps({"data": outp}))
