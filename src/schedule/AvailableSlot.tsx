import { backgroundLight, borderColorLight } from "../colors"
import React from "react"
import { TimeSlot } from "../model/time"

interface AvailableSlotProps {
    time: TimeSlot,
    teacher: boolean,
    pixelsPerMinute: number,
    startOfDay: number,
    colorIdx: number
}

const AvailableSlot = ({ time, teacher, pixelsPerMinute, startOfDay, colorIdx }: AvailableSlotProps) => (
    <div className={`available slot ${teacher ? "teacher" : "pupil"}`} style={{
        backgroundColor: backgroundLight(colorIdx),
        borderColor: borderColorLight(colorIdx),
        top: pixelsPerMinute * (time.start - startOfDay),
        height: pixelsPerMinute * (time.end - time.start),
    }}/>
)

export { AvailableSlot }
export type { AvailableSlotProps }