import json

from bson import json_util
from flask import Response
from flask_restful import Resource, reqparse

from api.modules.db import Db

db = Db()

arg_parser = reqparse.RequestParser()
arg_parser.add_argument('review', type=int, required=True, help='Error when parsing review')
arg_parser.add_argument('page', type=str, required=True, help='Error when parsing page')
arg_parser.add_argument('user_hash', type=str, required=True, help='Error when parsing user hash')


class Reviews(Resource):
    @staticmethod
    def post():
        args = arg_parser.parse_args()

        review = {
            'review_score': args['review'],
            'page': args['page'],
            'user_hash': args['user_hash']
        }

        db.insert_review(review)

        return Response(json.dumps({'status': 200}, default=json_util.default), mimetype='application/json')
