import React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Body from "../../components/Body"
import "./home.css"

function Home() {
    return (
        <React.Fragment>
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
            <div className="content">
                    <Header />
                    <Body params={{title: "Le stream va bientôt débuter"}}/>
                    <Footer />
            </div>
        </React.Fragment>
    )
}

export default Home