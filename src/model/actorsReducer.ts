import { createAction, createReducer } from "@reduxjs/toolkit"
import { mergeSlots, TimeSlot } from "./time"
import _ from "lodash"
import { nextId } from "./ids"

interface Lesson {
    id: number
    weekday?: number
    start?: number
    duration: number
}

interface Actor {
    id: number
    name: string
    teacher: boolean
    times: TimeSlot[]
    lessons?: Lesson[]
}

const addTimeSlot = createAction<[number, TimeSlot]>("actors/addTimeSlot")
const deleteTimeSlot = createAction<[number, number]>("actors/deleteTimeSlot")

const initialState: Actor[] = [
    {
        id: 0,
        name: "Margaret",
        teacher: true,
        times: [
            {
                id: 0,
                weekday: 0,
                start: 8 * 60,
                end: 10 * 60
            },
            {
                id: 1,
                weekday: 1,
                start: 8 * 60,
                end: 20 * 60
            },
            {
                id: 2,
                weekday: 2,
                start: 8 * 60,
                end: 20 * 60
            },
            {
                id: 3,
                weekday: 3,
                start: 14 * 60,
                end: 21 * 60
            },
            {
                id: 4,
                weekday: 4,
                start: 8 * 60,
                end: 20 * 60
            },
            {
                id: 5,
                weekday: 0,
                start: 14 * 60,
                end: 18 * 60
            },
        ]
    },
    {
        id: 1,
        name: "Charlie",
        teacher: false,
        lessons: [
            {
                id: 0,
                duration: 60
            },
            {
                id: 1,
                duration: 40,
                weekday: 2,
                start: 11 * 60,
            }
        ],
        times: [
            {
                id: 0,
                weekday: 0,
                start: 15 * 60,
                end: 20 * 60
            },
            {
                id: 1,
                weekday: 2,
                start: 10 * 60,
                end: 13 * 60
            },
            {
                id: 2,
                weekday: 3,
                start: 15 * 60,
                end: 18 * 60
            },
            {
                id: 3,
                weekday: 4,
                start: 9 * 60,
                end: 10 * 60
            },
            {
                id: 4,
                weekday: 4,
                start: 18 * 60,
                end: 20 * 60
            }
        ]
    },
    {
        id: 2,
        name: "Molly",
        teacher: false,
        lessons: [
            {
                id: 0,
                duration: 25
            }
        ],
        times: [
            {
                id: 0,
                weekday: 0,
                start: 15 * 60,
                end: 20 * 60
            },
            {
                id: 1,
                weekday: 2,
                start: 11 * 60,
                end: 19 * 60
            },
            {
                id: 2,
                weekday: 4,
                start: 18 * 60,
                end: 20 * 60
            }
        ]
    }
]

const actorsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addTimeSlot, (state, action) => {
            const [actorId, slot] = action.payload
            const actor = state.find((actor) => (actor.id == actorId))
            if (actor) {
                slot.id = nextId(actor.times)
                actor.times = mergeSlots(_.concat(actor.times, [slot]))
            } else {
                console.error(`Error adding timeslot: Actor with id ${actorId} not found`)
            }
        })
        .addCase(deleteTimeSlot, (state, action) => {
            const [actorId, slotId] = action.payload
            const actor = state.find((actor) => (actor.id == actorId))
            if (actor) {
                actor.times = actor.times.filter((slot) => slot.id != slotId)
            } else {
                console.log(`Error deleting timeslot: Actor with id ${actorId} not found`)
            }
        })
})

export { actorsReducer, addTimeSlot, deleteTimeSlot }
export type { Actor, TimeSlot, Lesson }