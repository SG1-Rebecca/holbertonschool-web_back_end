#!/usr/bin/env python3
"""
Module 6-sum_mixed_list
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Sum a list of integers and floats

    Args:
        mxd_lst (List[Union[int, float]]): List of integers and floats

    Returns:
        float: The sum of the list
    """
    return sum(mxd_lst)
