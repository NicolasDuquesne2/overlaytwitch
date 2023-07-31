import React from "react"
import Header from "../../components/Header"
import Body from "../../components/Body"
import Footer from "../../components/Footer"

function Game({route, followersData, streamInfosData}) {
    

    return (
        <React.Fragment>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="content">
                    <Header route={route}/>
                    <Body route={route}/>
                    <Footer route={route}/>
            </div>
        </React.Fragment>
    )
}

export default Game