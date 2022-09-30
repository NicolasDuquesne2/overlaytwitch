import React from "react"
import "./body.css"


function Body({params}) {

    let h1html = null
    let lefthtml = null

    if (params.title !== null) {
        h1html =  <h1 className="body-title">{params.title}</h1>
    } else {
        lefthtml = <div className="cam-frame"></div>
    }

    if (params) {
        return (
            <section className="home-body">
                {h1html}
                {lefthtml}
            </section>
        )
    }
}

export default Body