import requests, json

token = ""
messages = []
channel_id = 1110961351230226463

last = requests.get(f"https://discord.com/api/v9/channels/{channel_id}/messages?limit=100",headers={"authorization":token})
print(last.json()[-1]["id"])
print(last.json()[-1]["content"])
print(last.json()[-1]["author"]["username"])



while True:
    try:
        last = requests.get(f"https://discord.com/api/v9/channels/{channel_id}/messages?limit=100&before={last.json()[-1]['id']}",headers={"authorization":token})
        print(last.json()[-1]["id"])
        print(last.json()[-1]["content"])
        print(last.json()[-1]["author"]["username"])
        messages.append(last.json())
    except Exception as e:
        with open('data.json', 'w') as f:
            json.dump(messages, f)
        print(e)
        print(last.text)

        
