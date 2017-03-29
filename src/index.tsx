import * as React from "react"
import * as ReactDOM from "react-dom"
import Demo from "./demo"

function onDOMReady() {
    ReactDOM.render(<Demo />, document.getElementById("demo"))
}

window.addEventListener("DOMContentLoaded", onDOMReady, false)
