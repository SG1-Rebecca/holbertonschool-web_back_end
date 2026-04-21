#!/usr/bin/env python3
"""
2-Hypermedia pagination
"""

import csv
import math
from typing import List, Dict, Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
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


class Server:
    """
    Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """
        Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Returns the appropriate page of the dataset
        Args:
            page (int): The current page number. Defaults to 1.
            page_size (int): The size of the page. Defaults to 10.

        Returns:
            List[List]: The appropriate page of the dataset
        """
        assert isinstance(page, int) and isinstance(page_size, int)
        assert page > 0 and page_size > 0

        start_index, end_index = index_range(page, page_size)
        dataset = self.dataset()

        if start_index >= len(dataset):
            return []

        return dataset[start_index:end_index]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict:
        """
        Returns a dictionary containing the following key-value pairs

        Args:
            page (int): The current page number. Defaults to 1.
            page_size (int): The size of the page. Defaults to 10.

        Returns:
            Dict[str, object]: A dictionary containing key-value pairs
        """
        data = self.get_page(page, page_size)

        dataset = self.dataset()
        total_pages = math.ceil(len(dataset) / page_size)

        next_page = page + 1 if (page * page_size) < len(dataset) else None
        prev_page = page - 1 if page > 1 else None

        return {
            'page_size': len(data),
            'page': page,
            'data': data,
            'next_page': next_page,
            'prev_page': prev_page,
            'total_pages': total_pages
        }
