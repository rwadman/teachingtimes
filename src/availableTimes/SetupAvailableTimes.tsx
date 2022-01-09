import { Grid, Header } from "semantic-ui-react"
import React, { Fragment } from "react"
import ActorSetup from "./ActorSetup"
import { useAppSelector } from "../hooks"


function SetupAvailableTimes() {
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