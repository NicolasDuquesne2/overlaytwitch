import React from "react"
import "./footer.css"
import {texts} from "../../params/Texts"

function Footer({route}) {

    const routeTexts = texts[route]
    let titlehtml = null

    if (routeTexts.music !== null && routeTexts.composer !== null) {
        titlehtml = <h1>{routeTexts.music}: {routeTexts.composer}</h1>
    }

    return (
        <footer className="footer">
            {titlehtml}
        </footer>
    )
}

export default Footer