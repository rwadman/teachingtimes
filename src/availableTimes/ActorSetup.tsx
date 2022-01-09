import { Actor, addTimeSlot, TimeSlot } from "../model/actorsReducer"
import { Card, Form, GridColumn, Header, Icon, Label } from "semantic-ui-react"
import { minutesSinceMidnight, timeStr, weekdays } from "../model/time"
import React, { Fragment, useState } from "react"
import { deleteTimeSlot } from "../model/actorsReducer"
import { useAppDispatch } from "../hooks"

interface ActorProps {
    actor: Actor
}

interface RemovableTimeSlotProps {
    slot: TimeSlot,
    actorId: number
}

interface TimeSlotCreatorProps {
    actorId: number,
    weekday: number
}


const RemovableTimeSlot = ({ slot, actorId }: RemovableTimeSlotProps) => {
    const dispatch = useAppDispatch()
    const remove = (actorId: number, slotId: number) => dispatch(deleteTimeSlot([actorId, slotId]))

    return <Label>
        {timeStr(slot.start)} - {timeStr(slot.end)}
        <Icon name='delete' link onClick={() => remove(actorId, slot.id)} />
    </Label>
}

const TimeSlotCreator = ({ actorId, weekday }: TimeSlotCreatorProps) => {
    const dispatch = useAppDispatch()
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const saveTimeSlot = () => {
        if (isError(from, to, false)) {
            return
        }
        const slot = {
            id: -1, //added by reducer
            weekday: weekday,
            start: minutesSinceMidnight(from),
            end: minutesSinceMidnight(to)
        }
        dispatch(addTimeSlot([actorId, slot]))
        setFrom("")
        setTo("")
    }
    const isError = (from: string, to: string, allowEmpty: boolean) => {
        if (!from || !to) {
            return !allowEmpty
        }
        const fromNum = minutesSinceMidnight(from)
        const toNum = minutesSinceMidnight(to)
        return (
            isNaN(fromNum)
            || isNaN(toNum)
            || fromNum >= toNum
        )
    }
    return <div><Form onSubmit={saveTimeSlot}>
        <Form.Group>
            <Form.Input
                width={7}
                type="time"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                size="mini"
                error={isError(from, to, true)}
                fluid/>
            <Form.Field width={2}><label>to</label></Form.Field>
            <Form.Input
                inline={true}
                width={10}
                type="time"
                value={to}
                size="mini"
                error={isError(from, to, true)}
                onChange = {(e) => setTo(e.target.value)}
                action={{ icon: "add" }} fluid/>
        </Form.Group>
    </Form>
    </div>
}

const ActorSetup = ({ actor }: ActorProps) => {
    const times = actor.times.slice().sort((time1, time2) => time1.start - time2.start)
    return <GridColumn>
        <Card color={actor.teacher ? "red" : "green"}>
            <Card.Content>
                <Card.Header>{actor.name}</Card.Header>
                <Card.Meta>
                </Card.Meta>
                <Card.Description>
                    Times when {actor.name} is free
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                {weekdays.map((day, indexOfDay) => (
                    <Fragment key={indexOfDay}>
                        <Header as='h4'>{day}</Header>
                        <div style={{ marginBottom: 10 }}>
                            {times.filter((slot) => slot.weekday == indexOfDay)
                                .map((time, j) => (
                                    <RemovableTimeSlot slot={time} actorId={actor.id} key={j} />
                                ))}
                        </div>
                        <TimeSlotCreator actorId={actor.id} weekday={indexOfDay} />
                    </Fragment>
                ))}
            </Card.Content>
        </Card>
    </GridColumn>
}

export default ActorSetup