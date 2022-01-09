import { Actor } from "../model/actorsReducer"
import { AvailableSlot } from "./AvailableSlot"
import React from "react"
import { ScheduleLesson } from "./ScheduleLesson"
import { weekdays } from "../model/time"

interface DayProps {
    day: number,
    teacher: Actor,
    pupils: Actor[],
    highlightedPupil?: Actor,
    setHighlightedPupil: (a: Actor|undefined) => void,
    pixelsPerMinute: number,
    startOfDay?: number,
    endOfDay?: number
}



const Day = (
    {
        day,
        teacher,
        pupils,
        highlightedPupil,
        setHighlightedPupil,
        pixelsPerMinute,
        startOfDay,
        endOfDay
    }: DayProps
) => {
    const dayStart = startOfDay || 0
    const dayEnd = endOfDay || 60 * 24
    const height = pixelsPerMinute * (dayEnd - dayStart)

    return <div><h2>{weekdays[day]}</h2>
        <div className="dayschedule" style={{ height }}>
            {teacher.times.filter(({ weekday }) => weekday == day).map((time, i) => (
                <AvailableSlot
                    time={time}
                    teacher={true}
                    pixelsPerMinute={pixelsPerMinute}
                    colorIdx={teacher.id}
                    startOfDay={dayStart}
                    key={i} />
            ))}
            {highlightedPupil
                ? highlightedPupil.times.filter(({ weekday }) => weekday==day).map((time, i) => (
                    <AvailableSlot
                        time={time}
                        teacher={false}
                        colorIdx={highlightedPupil.id}
                        pixelsPerMinute={pixelsPerMinute}
                        startOfDay={dayStart}
                        key={i} />
                ))
                : ""}
            {pupils.map((pupil, i) => (
                (pupil.lessons || []).filter((lesson) => lesson.weekday == day && lesson.start)
                    .map((lesson) => (
                        <ScheduleLesson
                            key={`${i}_${lesson.id}`}
                            setHighlightedPupil={setHighlightedPupil}
                            lesson={lesson}
                            pupil={pupil}
                            highlighted={!!highlightedPupil && highlightedPupil.id == pupil.id}
                            pixelsPerMinute={pixelsPerMinute}
                            startOfDay={dayStart} />
                    ))
            ))}
        </div>
    </div>
}

export default Day