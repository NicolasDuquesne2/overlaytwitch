import React from "react"
import './infoframe.css'

function InfoFrame({text}) {
    return (
        <div className="info-frame">
            <span className="top-edge"></span>
            <span className="bott-edge"></span>
            <span className="left-edge"></span>
            <span className="right-edge"></span>
            <span className="trapezoid"></span>
            <div className="info-text-wrapper">
                <p className="info-text"><span className="bold">{text.var}</span> {text.const}</p>
            </div>
        </div>
    )
}

export default InfoFrame