import { Actor, Lesson } from "../model/actorsReducer"
import { background, borderColor } from "../colors"
import React from "react"
import { timeStr } from "../model/time"

interface BookedSlotProps {
    lesson: Lesson,
    pupil: Actor,
    pixelsPerMinute: number,
    startOfDay: number,
    highlighted: boolean,
    setHighlightedPupil: (a: Actor | undefined) => void
}

const ScheduleLesson = (
    { lesson, pupil, highlighted, setHighlightedPupil, pixelsPerMinute, startOfDay }: BookedSlotProps
) => (
    <div
        className={`booked slot ${highlighted ? "highlighted" : ""}`} style={{
            top: pixelsPerMinute * ((lesson.start || 0) - startOfDay),
            height: pixelsPerMinute * lesson.duration,
            backgroundColor: background(pupil.id),
            borderColor: borderColor(pupil.id)
        }}
        onMouseOver={() => setHighlightedPupil(pupil)}
        onMouseOut={() => setHighlightedPupil(undefined)}
    >
        <span>{timeStr(lesson.start || 0)}-{timeStr((lesson.start || 0) + lesson.duration)} {pupil.name}</span>
    </div>
)

export { ScheduleLesson }

export type { BookedSlotProps }