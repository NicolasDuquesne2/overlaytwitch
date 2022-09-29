import React from "react"
import "./footer.css"

function Footer({params}) {

    let titlehtml = null

    if (params.music !== null && params.composer !== null) {
        titlehtml = <h1>{params.music}: {params.composer}</h1>
    }

    if(params) {
        return (
            <footer className="footer">
                {titlehtml}
            </footer>
        )
    }
}

export default Footer