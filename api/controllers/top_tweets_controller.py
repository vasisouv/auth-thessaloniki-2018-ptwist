import json

from bson import json_util
from flask import Response
from flask_restful import Resource

from api.modules.db import Db

db = Db()


class TopTweets(Resource):
    @staticmethod
    def get():
        return Response(json.dumps(db.get_top_tweets(), default=json_util.default),
                        mimetype='application/json')
