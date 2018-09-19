from flask import Flask
from flask_cors import CORS
from flask_restful import Api


from api.controllers.wordclouds_controller import Wordclouds as Wordclouds
from api.controllers.locations_controller import Locations as Locations
from api.controllers.repository_controller import Repository as Repository
from api.controllers.top_tweets_controller import TopTweets as TopTweets
from api.controllers.influencers_controller import Influencers as Influencers

app = Flask(__name__)
cors = CORS(app)

# Initialize the API endpoints
api = Api(app, prefix='/api/')
api.add_resource(Wordclouds, "/wordclouds", endpoint="wordclouds_endpoint")

if __name__ == "__main__":
    app.run(debug=True, port=5110)
