# University of Idaho • research notebook companion
from statistics import mean


def summarize(samples: list[float]) -> dict:
    """Summarize a small field study."""
    valid = [value for value in samples if value >= 0]
    return {
        "count": len(valid),
        "average": mean(valid),
        "site": "Moscow, Idaho",
    }


measurements = [12.4, 15.8, 18.2, 16.6]
summary = summarize(measurements)
print(f"Mean measurement: {summary['average']:.2f}")
