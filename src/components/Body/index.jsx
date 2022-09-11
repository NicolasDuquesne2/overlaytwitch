import React from "react"
import "./body.css"


function Body({params}) {
    return (
        <section className="home-body">
            <h1 className="body-title">{params.title}</h1>
        </section>
    )
}

export default Body