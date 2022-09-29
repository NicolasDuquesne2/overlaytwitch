import React from "react"
import './infoframe.css'

function InfoFrame({text}) {

    return (
        <div className="info-frame">
            <p className="info-text">{text}</p>
        </div>
    )
}

export default InfoFrame