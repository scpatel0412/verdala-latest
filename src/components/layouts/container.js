import React from "react"

const Container = (props) => (
    <div className={(props.type) ? props.type : "extend-container px-xl-0"}>
        {props.children}
    </div>
)

export default Container;