import React, {useEffect} from "react"
import {ReqParams} from "../../params/UrlTokenRequestParams"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { fetchStreamInfos } from "../../Redux/StreamInfos/streamInfosSlice"
import "./body.css"
import {texts} from "../../params/Texts"
import {appId} from "../../params/apid"

function Body({route}) {
    let textFrame = null
    let gameFrame = null
    const dispatch = useDispatch()
    const streamInfos = useSelector(state => state.streamInfos.value)
    const routeTextes = texts[route]


    useEffect(() => {

        function getStreamInfos() {
            // if the state token exists then the storage is updated and the followers data is fetched 
            if (localStorage.getItem('token') !== null) {
                const token = localStorage.getItem('token')
                dispatch(fetchStreamInfos(
                    {
                        action: ReqParams.getStreamInfos.action, 
                        message: ReqParams.getStreamInfos.message,
                        payload: {method: ReqParams.getStreamInfos.method, url: ReqParams.getStreamInfos.baseUrl, params: ReqParams.getStreamInfos.params, headers: {
                                    Authorization: `Bearer ${token}`,
                                    "client-id":appId
                                                                }
                    }}
                ))
                       
            }
        }

        getStreamInfos()

    }, [])

    if (route !== "game") {

        textFrame = <section className="home-body">
                        <h1 className="body-title">{routeTextes.title}</h1>
                        <div className="info-frame">
                            <p className="info-data">{streamInfos?.data[0].game_name}</p>
                            <p className="info-data">{streamInfos?.data[0].title}</p>
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

    return (
        <React.Fragment>
             {textFrame}
             {gameFrame}
        </React.Fragment>
    )
}

export default Body