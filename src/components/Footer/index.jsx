import React from "react"
import "./footer.css"

function Footer({params}) {

    if(params) {
        return (
            <footer className="footer">
                <h1>{params.music}: {params.composer}</h1>
            </footer>
        )
    }
}

export default Footer