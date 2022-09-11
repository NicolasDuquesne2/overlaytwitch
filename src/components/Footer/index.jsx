import React from "react"
import "./footer.css"

function Footer({params}) {
    return (
        <footer className="header">
            <h1>{params.music}</h1>
        </footer>
    )
}

export default Footer