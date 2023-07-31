import React from "react"
import "./footer.css"

function Footer({text}) {

    let titlehtml = null

    if (text.music !== null && text.composer !== null) {
        titlehtml = <h1>{text.music}: {text.composer}</h1>
    }

    if(text) {
        return (
            <footer className="footer">
                {titlehtml}
            </footer>
        )
    }
}

export default Footer