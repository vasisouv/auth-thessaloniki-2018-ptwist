from pymongo import MongoClient
from collections import Counter


class Db:
    def __init__(self):
        client = MongoClient()
        self.db = client['ptwist']

    def get_wordclouds(self):
        wc_objs = self.db['wordclouds'].find({})
        terms = Counter()

        for obj in wc_objs:
            terms.update(obj['wordclouds']['terms'])

        wordcloud_dict = dict(terms.most_common(200))
        wc_objs = []
        for key, value in wordcloud_dict.items():
            wc_objs.append({"name": key, "value": value})
        return wc_objs

    def insert_review(self, review):
        self.db['reviews'].insert_one(review)
