import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { fetchTracks } from "../../Redux/Tracks/tracksSlice"
import {texts} from "../../params/Texts"
import {ReqParams} from "../../params/UrlTokenRequestParams"
import "./tracks.css"

function TracksDisplayer({route}) {

    const routeTexts = texts[route]
    const dispatch = useDispatch()
    const tracks = useSelector(state => state.tracks.value)
    const [display, setDisplay] = useState(true)
    let content = ""

    if(tracks && display) {
        content = `${tracks.track.title} : ${tracks.track.artistsString.length > 0? tracks.track.artistsString: "artiste inconnu"}`
    } else if(!tracks && display && routeTexts.music !== undefined){
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
        <div className="tracks-container">
             <p className="tracks-p">{content}</p>
        </div>
    )

}

export default TracksDisplayer