import React from "react"
import Header from "../../components/Header"
import Body from "../../components/Body"
import Footer from "../../components/Footer"
import {texts} from "../../params/Texts"

function Ending() {
    return (
        <React.Fragment>
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
            <div className="content">
                    <Header />
                    <Body params={{title: texts.ending.title}}/>
                    <Footer params={{music: texts.ending.music, composer: texts.ending.composer}}/>
            </div>
        </React.Fragment>
    )
}

export default Ending