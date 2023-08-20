import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux/es/exports"
import "./footer.css"
import {texts} from "../../params/Texts"
import { fetchTracks } from "../../Redux/Tracks/tracksSlice"
import { ReqParams } from "../../params/UrlTokenRequestParams"

function Footer({route}) {

    const routeTexts = texts[route]
    const dispatch = useDispatch()
    const tracks = useSelector(state => state.tracks.value)
    const [display, setDisplay] = useState(true)
    let content = ""

    if(tracks) {
        content = `${tracks.track.title} : ${tracks.track.artistsString.length > 0? tracks.track.artistsString: "artiste inconnu"}`
    } else {
        content = `${routeTexts.music} : ${routeTexts.composer}`
    }

    useEffect(() => {

        if(display) {

            if(routeTexts.music === undefined && routeTexts.composer === undefined) {
    
                function getTracks() {
                    dispatch(fetchTracks(
                        {
                            action: ReqParams.getTracks.action, 
                            message: ReqParams.getTracks.message,
                            payload: {method: ReqParams.getTracks.method, url: ReqParams.getTracks.baseUrl
                        }}
                    ))
                }

                getTracks()

                const intervalOnTracks= setInterval(getTracks, 1500)
                return () => {
                    clearInterval(intervalOnTracks)
                }

            }
        } 

    }, [display])

    return (
        <footer className="footer">
            <h1>{content}</h1>
        </footer>
    )
}

export default Footer