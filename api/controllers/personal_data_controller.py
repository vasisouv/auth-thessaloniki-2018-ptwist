import json

from bson import json_util
from flask import Response
from flask_restful import Resource, reqparse

from modules.db import Db

db = Db()

arg_parser = reqparse.RequestParser()
arg_parser.add_argument('name', type=str, required=True, help='Error when parsing name')
arg_parser.add_argument('age', type=str, required=True, help='Error when parsing age')
arg_parser.add_argument('email', type=str, required=True, help='Error when parsing email')
arg_parser.add_argument('user_hash', type=str, required=True, help='Error when parsing user hash')


class PersonalData(Resource):
    @staticmethod
    def post():
        args = arg_parser.parse_args()

        personal_data = {
            'name': args['name'],
            'age': args['age'],
            'email': args['email'],
            'user_hash': args['user_hash']
        }

        db.insert_personal_data(personal_data)

        return Response(json.dumps({'status': 200}, default=json_util.default), mimetype='application/json')
