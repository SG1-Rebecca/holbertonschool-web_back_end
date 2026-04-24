#!/usr/bin/env python3
"""
11-schools_by_topic
"""

def schools_by_topic(mongo_collection, topic):
    """
    Return the list of schools that have a specific topic.

    Args:
        mongo_collection: pymongo collection object.
        topic (str): topic to search.

    Returns:
        List of school having a specific topic.
    """
    return list(mongo_collection.find({"topics": topic}))

