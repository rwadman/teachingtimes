import React, { Fragment } from "react"
import { Header, Grid} from "semantic-ui-react"

import { useAppSelector } from "../hooks"
import ActorSetup from "./ActorSetup"


function SetupAvailableTimes() {
    // The `state` arg is correctly typed as `RootState` already
    const actors = useAppSelector((state) => state.actors)
    const teachers = actors.filter((actor) => actor.teacher)
    const pupils = actors.filter((actor) => !actor.teacher)
    return (
        <Fragment>
            <Header as='h2'>Teachers</Header>
            <Grid columns={3}>
                {teachers.map((teacher, i) => (<ActorSetup actor={teacher} key={i} />))}
            </Grid>
            <Header as='h2'>Pupils</Header>
            <Grid columns={3}>
                {pupils.map((pupil, i) => (<ActorSetup actor={pupil} key={i} />))}
            </Grid>
        </Fragment>
    )
}

export default SetupAvailableTimes