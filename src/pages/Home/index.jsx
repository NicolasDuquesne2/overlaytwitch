import React, {useEffect} from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Body from "../../components/Body"
import {texts} from "../../params/Texts"
import Request from "../../Requests"
import "./home.css"

function Home() {

    useEffect(() => {
        Request()
    }, [])

    return (
        <React.Fragment>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="content">
                    <Header />
                    <Body params={{title: texts.home.title}}/>
                    <Footer params={{music: texts.home.music, composer: texts.home.composer}}/>
            </div>
        </React.Fragment>
    )
}

export default Home