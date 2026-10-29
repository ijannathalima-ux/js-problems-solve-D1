//Find Free Time Intervals

function findFreeTime(bookedIntervals, workingHours) {
    const [workStart, workEnd] = workingHours;

    const bookings = bookedIntervals
        .map(([start, end]) => [
            Math.max(start, workStart),
            Math.min(end, workEnd)
        ])
        .filter(([start, end]) => start < end)
        .sort((a, b) => a[0] - b[0]);

    const merged = [];

    for (const interval of bookings) {
        if (
            merged.length === 0 ||
            interval[0] > merged[merged.length - 1][1]
        ) {
            merged.push(interval);
        } else {
            merged[merged.length - 1][1] = Math.max(
                merged[merged.length - 1][1],
                interval[1]
            );
        }
    }

    const freeTime = [];
    let currentTime = workStart;

    for (const [start, end] of merged) {
        if (currentTime < start) {
            freeTime.push([currentTime, start]);
        }

        currentTime = Math.max(currentTime, end);
    }

    if (currentTime < workEnd) {
        freeTime.push([currentTime, workEnd]);
    }

    return freeTime;
}

console.log(findFreeTime([[10, 12], [14, 16]], [9, 17]))
console.log(findFreeTime([[10, 12], [14, 16], [11, 15]], [9, 17]))