#!/usr/bin/env python3
"""
12-log_stats
"""

from pymongo import MongoClient


def main():
    """
    Provide some stats about Nginx logs stored in MongoDB
    """
    client = MongoClient('mongodb://127.0.0.1:27017')
    collection = client.logs.nginx

    # count and print logs
    count = collection.count_documents({})
    print(f'{count} logs')

    # print methods
    print('Methods:')
    methods = ["GET", "POST", "PUT", "DELETE"]
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f'method {method}: {count}')

    # count and print status check
    status_count = collection.count_documents({"method": "GET", "path": "/status"})
    print(f'{status_count} status check')
