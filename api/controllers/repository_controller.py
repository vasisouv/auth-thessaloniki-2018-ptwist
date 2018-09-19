import json

from bson import js
from flask import Response
from flask_restful import Resource, reqparse


class Repository(Resource):
    @staticmethod
    def get():


        return Response(json.dumps({}, default=json_util.default), mimetype='application/json')
