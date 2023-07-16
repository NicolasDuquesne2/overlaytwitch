import React from "react"
import Header from "../../components/Header"
import PagesDecorator from "../../Decorator"
import Body from "../../components/Body"
import Footer from "../../components/Footer"

function Game({route, followersData, streamInfosData}) {
    

    return (
        <React.Fragment>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="content">
                    <Header params={followersData}/>
                    <Body params={{title: null, streamInfosData}}/>
                    <Footer params={{music: null, composer: null}}/>
            </div>
        </React.Fragment>
    )
}

export default PagesDecorator(Game)