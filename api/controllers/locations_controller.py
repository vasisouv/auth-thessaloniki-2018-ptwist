import json

from bson import json_util
from flask import Response
from flask_restful import Resource, reqparse
from api.modules.db import Db

arg_parser = reqparse.RequestParser()
db = Db()

class Locations(Resource):
    @staticmethod
    def get():

        return Response(json.dumps(db.get_locations(), default=json_util.default), mimetype='application/json')
