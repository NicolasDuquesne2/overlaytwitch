import React from "react"
import "./footer.css"

function Footer({params}) {

    if(params) {
        return (
            <footer className="header">
                <h1>{params.music}: {params.composer}</h1>
            </footer>
        )
    }
}

export default Footer