import React from "react"
import Header from "../../components/Header"
import Body from "../../components/Body"
import Footer from "../../components/Footer"
import PagesDecorator from "../../Decorator"
import {texts} from "../../params/Texts"

function Break({route, followersData, streamInfosData}) {
    
    
    return (
        <React.Fragment>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="content">
                    <Header params={followersData}/>
                    <Body params={{title: texts.break.title, streamInfosData}}/>
                    <Footer params={{music: texts.break.music, composer: texts.break.composer}}/>
            </div>
        </React.Fragment>
    )

}

export default PagesDecorator(Break)