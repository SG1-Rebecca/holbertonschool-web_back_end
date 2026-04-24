#!/usr/bin/env python3
"""
12-log_stats
"""

from pymongo import MongoClient

def main():
    """
    """
    client = MongoClient('mongodb://127.0.0.1:27017')
    collection = client.logs.nginx

# count and print logs
# print methods
# assign allowed methods in a variable
# browse and print method and its count 
# count and print status check
