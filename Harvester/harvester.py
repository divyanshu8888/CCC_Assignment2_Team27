from mastodon import Mastodon, MastodonNotFoundError, MastodonRatelimitError, StreamListener
import csv, os, time, json

m = Mastodon(
        api_base_url= os.environ['URL'],
        access_token= os.environ['MASTODON_ACCESS_TOKEN']
    )

class Listener(StreamListener):
    total = []
    def on_update(self, status):
        self.total.append(json.dumps(status, indent=2, sort_keys=True, default=str))

        if len(self.total)%1000 == 0:
            with open("/toots/sample.json", "w") as json_file:
                json.dump(self.total, json_file, indent=2, separators=(',', ': '))

m.stream_public(Listener())

