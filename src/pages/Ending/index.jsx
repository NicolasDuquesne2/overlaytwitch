import React from "react"
import Header from "../../components/Header"
import Body from "../../components/Body"
import Footer from "../../components/Footer"
import {texts} from "../../params/Texts"

function Ending() {
    return (
        <React.Fragment>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="content">
                    <Header params={{numOfFollowers: null, lastFollower: null}}/>
                    <Body params={{title: texts.ending.title}}/>
                    <Footer params={{music: texts.ending.music, composer: texts.ending.composer}}/>
            </div>
        </React.Fragment>
    )
}

export default Ending