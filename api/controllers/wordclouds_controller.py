import json

from bson import json_util
from flask import Response
from flask_restful import Resource

from modules.db import Db

db = Db()


class Wordclouds(Resource):
    @staticmethod
    def get():
        return Response(json.dumps(db.get_wordclouds(), default=json_util.default), mimetype='application/json')
