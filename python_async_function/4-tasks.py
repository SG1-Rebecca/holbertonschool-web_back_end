#!/usr/bin/env python3
"""
Module 4-tasks
"""
import asyncio

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> list[float]:
    """
    Spawns wait_random n times with the specified max_delay

    Args:
        n (int): The number of random delays to generate.
        max_delay (int): The maximum delay in seconds for each random delay.

    Returns:
        list[float]: A list of floats random delays, sorted in ascending order.
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*tasks)
    return sorted(delays)
