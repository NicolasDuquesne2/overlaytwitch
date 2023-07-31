import React from "react"
import "./footer.css"
import {texts} from "../../params/Texts"

function Footer() {

    let titlehtml = null

    if (texts.home.music !== null && texts.home.composer !== null) {
        titlehtml = <h1>{texts.home.music}: {texts.home.composer}</h1>
    }

    return (
        <footer className="footer">
            {titlehtml}
        </footer>
    )
}

export default Footer