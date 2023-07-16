import React from "react"
import PagesDecorator from "../../Decorator"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Body from "../../components/Body"
import {texts} from "../../params/Texts"
import "./home.css"

function Home({route, followersData, streamInfosData}) {

    return (
        <React.Fragment>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="content">
                    <Header params={followersData}/>
                    <Body params={{title: texts.home.title, streamInfosData:streamInfosData}}/>
                    <Footer params={{music: texts.home.music, composer: texts.home.composer}}/>
            </div>
        </React.Fragment>
    )
}

export default PagesDecorator(Home)