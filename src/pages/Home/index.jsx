import React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Body from "../../components/Body"
import useHandleToken from "../../Hooks/useHandleToken/useHandleToken"
import "./home.css"

function Home({route}) {
    useHandleToken(route)

    console.log("render home page");
    return (
        <React.Fragment>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="content">
                    <Header />
                    <Body />
                    <Footer />
            </div>
        </React.Fragment>
    )
}

export default Home