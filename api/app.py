from flask import Flask
from flask_cors import CORS
from flask_restful import Api


from controllers.wordclouds_controller import Wordclouds as Wordclouds
from controllers.locations_controller import Locations as Locations
from controllers.top_tweets_controller import TopTweets as TopTweets
from controllers.reviews_controller import Reviews as Reviews
from controllers.personal_data_controller import PersonalData as PersonalData

app = Flask(__name__)
cors = CORS(app)

# Initialize the API endpoints
api = Api(app, prefix='/api/')
api.add_resource(Wordclouds, "wordclouds", endpoint="wordclouds_endpoint")
api.add_resource(Reviews, "reviews/save", endpoint="reviews_endpoint")
api.add_resource(PersonalData, "personal_data/save", endpoint="personal_data_endpoint")
api.add_resource(TopTweets, "top-tweets", endpoint="toptweets_endpoint")
api.add_resource(Locations, "locations", endpoint="locations_endpoint")

if __name__ == "__main__":
    app.run(debug=True, port=5110)
