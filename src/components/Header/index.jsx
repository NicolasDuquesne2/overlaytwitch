import React, { useEffect } from "react"
import InfoFrame from "../InfoFrame"
import ClockContainer from "../ClockContainer"
import TracksDisplayer from "../TracksDisplayer"
import {ReqParams} from "../../params/UrlTokenRequestParams"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { fetchFollowers } from "../../Redux/Followers/followersSlice"
import {appId} from "../../params/apid"
import 'react-clock/dist/Clock.css';
import "./header.css"

function Header({route}) {
   
    const dispatch = useDispatch()
    const followers = useSelector(state => state.followers.value)
   

    useEffect(() => {

        function getFollowers () {
            // if the state token exists then the storage is updated and the followers data is fetched 
            if (localStorage.getItem('token') !== null) {
                const token = localStorage.getItem('token')
                dispatch(fetchFollowers(
                    {
                        action: ReqParams.getFollwers.action, 
                        message: ReqParams.getFollwers.message,
                        payload: {method: ReqParams.getFollwers.method, url: ReqParams.getFollwers.baseUrl, params: ReqParams.getFollwers.params, headers: {
                                    Authorization: `Bearer ${token}`,
                                    "client-id":appId
                                                                }
                    }}
                ))
                       
            }
        }
        getFollowers()

        const intervalOnFollowers= setInterval(getFollowers, 120000)
        return () => {
            clearInterval(intervalOnFollowers)
        }

    }, [])

    return (
        <header className="header">
            <ClockContainer />
            <TracksDisplayer route={route} />
             <div className="stats-wrapper">
                <InfoFrame key="info-1" text={{var:followers?.total, const: "personnes suivent déjà la chaine" }} />
                <InfoFrame  key="info-2" text={{var: followers?.data[0].user_name, const: "nous a rejoint dernièrement"}} />
             </div>
        </header>
    )
}

export default Header