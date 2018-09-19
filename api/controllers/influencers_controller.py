import json

from bson import json_util
from flask import Response
from flask_restful import Resource, reqparse

from helpers.modules.db import Db

arg_parser = reqparse.RequestParser()


class Influencers(Resource):
    @staticmethod
    def get():
        arg_parser.add_argument('collection', type=str, required=True, help='Error when parsing topic')
        arg_parser.add_argument('language', type=str, required=True, help='Error when parsing language')
        arg_parser.add_argument('timestamp_from', type=int, required=True, help='Error when parsing timestamp_from')
        arg_parser.add_argument('timestamp_to', type=int, required=True, help='Error when parsing timestamp_to')

        args = arg_parser.parse_args()

        collection = args['collection']
        timestamp_from = args['timestamp_from']
        timestamp_to = args['timestamp_to']
        language = args['language']

        db = Db('ptwist_results')

        locations = list(db.get_locations(collection=collection, language=language, timestamp_from=timestamp_from,
                                          timestamp_to=timestamp_to))
        coordinates = []
        for l in locations:
            for lnested in l['locations']:
                coordinates.append(lnested['coordinates'])

        return Response(json.dumps(coordinates, default=json_util.default), mimetype='application/json')
