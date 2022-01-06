
import _ from "lodash"

interface TimeSlot {
    id: number
    weekday: number
    start: number
    end: number
}

const minutesSinceMidnight = (time: string): number => {
    const timeNums = time.split(":").map((val) => val == "" ? NaN : Number(val))
    if (timeNums.length != 2) {
        return NaN
    }
    const [hours, minutes] = timeNums
    return hours * 60 + minutes
}

const timeStr = (minutes: number): string => {
    const date = new Date(0)
    date.setHours(0)
    date.setMinutes(minutes)
    return date.toTimeString().slice(0, 5)
}

const mergeSlots = (slots: TimeSlot[]): TimeSlot[] => {
    const days = _.values(_.groupBy(slots, "weekday"))
    const mergedDays = days.map((day) => (
        _.sortBy(day, "start")
            .reduce((merged, slot) => {
                const last = merged.pop()
                if (!last) {
                    return [slot]
                }
                if (slot.start < last.end) {
                    last.end = Math.max(last.end, slot.end)
                    return _.concat(merged, [last])
                }
                return _.concat(merged, [last, slot])
            }, [] as TimeSlot[])
    ))
    return _.concat(...mergedDays)

}

export {minutesSinceMidnight, timeStr, mergeSlots}
export type {TimeSlot}