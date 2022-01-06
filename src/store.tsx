import { configureStore } from "@reduxjs/toolkit"
import { actorsReducer } from "./model/actorsReducer"

const store = configureStore({
    reducer: {
        actors: actorsReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export { store }