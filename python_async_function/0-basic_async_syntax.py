#!/usr/bin/env python3
"""
Module 0-basic_async_syntax
"""
import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """
    Asynchronous coroutine that waits
    for a random delay between 0 and max_delay.

    Args:
        max_delay (int): Maximum delay in seconds default is 10.

    Returns:
        float: Random delay in seconds
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
