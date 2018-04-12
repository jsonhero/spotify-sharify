import os
import requests
import base64
from urllib.parse import urlencode
from flask import Flask, request, redirect, jsonify

app = Flask(__name__)

redirect_uri = "http://localhost:3000/callback"
clientId = os.environ.get("clientId")
clientSecret = os.environ.get("clientSecret")

@app.route('/spotify')
def authenticate():
  queryStrings = urlencode({
    "client_id": clientId,
    "response_type": "code",
    "redirect_uri": redirect_uri,
  })
  return redirect("https://accounts.spotify.com/authorize?" + queryStrings)

@app.route('/callback')
def callback():
  code = request.args.get('code')
  state = request.args.get('state')
  payload = {
    "grant_type": "authorization_code",
    "code": code,
    "redirect_uri": redirect_uri,
  }
  basic = "{id}:{secret}".format(id=clientId, secret=clientSecret)
  headers = {
    "Authorization": "Basic " + base64.b64encode(bytes(basic, 'utf-8')).decode()
  }
  response = requests.post("https://accounts.spotify.com/api/token", data=payload, headers=headers)
  json = response.json()
  return jsonify(json)






app.run(port=3000)