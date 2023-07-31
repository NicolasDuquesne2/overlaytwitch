import React from "react"
import "./body.css"


function Body({text}) {


    let textFrame = null
    let gameFrame = null
    let lefthtml = null
    const infosdatas = text.streamInfosData


    if (text.title !== null) {

        textFrame = <section className="home-body">
                        <h1 className="body-title">{text.title}</h1>
                        <div className="info-frame">
                            <p className="info-data">{infosdatas?.gameName}</p>
                            <p className="info-data">{infosdatas?.title}</p>
                        </div>
                    </section>
    } else {

        gameFrame = <section className="home-body">
                        <div className="cam-frame"></div>
                       {/* { <div className="info-frame-game">
                            <p>{infosdatas?.gameName}</p>
                            <p>{infosdatas?.title}</p>
                        </div>} */}
                    </section>
    }

    if (text) {
        return (
            <React.Fragment>
                 {textFrame}
                 {gameFrame}
            </React.Fragment>
        )
    }
}

export default Body