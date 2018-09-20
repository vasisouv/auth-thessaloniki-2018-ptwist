import json

from bson import json_util
from flask import Response
from flask_restful import Resource, reqparse

arg_parser = reqparse.RequestParser()


class Influencers(Resource):
    @staticmethod
    def get():
        return Response(json.dumps({}, default=json_util.default), mimetype='application/json')
