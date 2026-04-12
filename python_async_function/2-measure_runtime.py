#!/usr/bin/env python3
"""
Module 2-measure_runtime
"""
import time
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measure the total execution time

    Args:
        n (int): Number of times to spawn
        max_delay (int): Maximum delay in seconds

    Returns:
        float: Average execution time per coroutine.
    """
    start_timer = time.time()
    asyncio.run(wait_n(n, max_delay))
    stop_timer = time.time()
    total_time = stop_timer - start_timer
    return total_time / n
