import { Grid, Segment } from "semantic-ui-react"
import React, { useState } from "react"
import _ from "lodash"
import { Actor } from "../model/actorsReducer"
import Day from "./Day"
import { useAppSelector } from "../hooks"

function Schedule() {
    const actors = useAppSelector((state) => state.actors)
    const teachers = actors.filter((actor) => actor.teacher)
    const pupils = actors.filter((actor) => !actor.teacher)
    const pixelsPerMinute = 1
    const startOfDay = _.min(actors.map((a) => _.min(a.times.map((t) => t.start))))
    const endOfDay = _.max(actors.map((a) => _.max(a.times.map((t) => t.end))))
    const [highlightedPupil, setHighlightedPupil] = useState<Actor|undefined>(undefined)
    return (
        <div>
            <h2>Schedule!</h2>
            <Grid>
                <Grid.Column width={4}>
                    {pupils.map((pupil, i) => (
                        <Segment key={i}
                            onMouseOver={() => setHighlightedPupil(pupil)}
                            onMouseOut={() => setHighlightedPupil(undefined)}
                        >
                            <h3>{pupil.name}</h3>
                            {(pupil.lessons || []).filter((l) => l.start === undefined).map((lesson, j) => (
                                <Segment key={j}>
                                    {lesson.duration} min
                                </Segment>
                            ))}
                        </Segment>
                    ))}
                </Grid.Column>
                {
                    _.range(5).map((dayOfWeek) => (
                        <Grid.Column width={2} className="narrow" key={dayOfWeek}>
                            <Day
                                day={dayOfWeek}
                                teacher={teachers[0]}
                                pupils={pupils}
                                pixelsPerMinute={pixelsPerMinute}
                                highlightedPupil={highlightedPupil}
                                setHighlightedPupil={setHighlightedPupil}
                                startOfDay={startOfDay}
                                endOfDay={endOfDay}/>
                        </Grid.Column>
                    ))
                }
                <Grid.Column width={2}>
                    Hover info?
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default Schedule