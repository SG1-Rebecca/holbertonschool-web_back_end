#!/usr/bin/env python3
"""
9-insert_school.py
"""

def insert_school(mongo_collection, **kwargs):
    """
    Insert a new document in a collection

    Args:
        mongo_collection: pymongo collection object where the document
            will be inserted.
        kwargs: Keyword arguments representing the fields
            and values of the document to insert.

    Returns:
        The _id of the newly inserted document.
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id

