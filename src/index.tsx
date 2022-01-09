import Main from "./Main"
import { Provider } from "react-redux"
import React from "react"
import ReactDOM from "react-dom"
import { store } from "./store"

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById("root")
)
