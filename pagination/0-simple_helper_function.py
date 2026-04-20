#!/usr/bin/env python3
"""
0-Simple helper function
"""


def index_range(page: int, page_size: int) -> tuple[int, int]:
    """
    Args:
        page (int): The current page number.
        page_size (int): The number of items per page.

    Returns:
        tuple: A tuple of size two containing
        the start index and end index corresponding to the range of indexes.
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)
