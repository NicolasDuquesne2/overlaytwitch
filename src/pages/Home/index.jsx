import React, {useEffect } from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Body from "../../components/Body"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { fetchFollowers } from "../../Redux/Followers/followersSlice"
import {setToken } from '../../Redux/Token/tokenSlice'
import useSetUrlWithParams from "../../Hooks/useSetUrlWithParams"
import useGetUrlParams from "../../Hooks/useGetUrlParams"
import {texts} from "../../params/Texts"
import {params, baseUrl, paramsToSearch} from "../../params/UrlTokenRequestParams"
import "./home.css"

function Home() {
    let numOfFollowers = null
    let lastFollower = null
    /**
    const dispatch = useDispatch()
    const tokenUrl =  useSetUrlWithParams(baseUrl, params)
    const queryString = window.location.hash
    const urlParams = useGetUrlParams(queryString, paramsToSearch)
    const followers = useSelector(state => state.followers)
    const token = useSelector(state => state.token)


    if (followers.value !== null) {
        numOfFollowers =  followers.value.total
        lastFollower =  followers.value.data[0].from_name
    }

    useEffect(() => {
        if (urlParams.includes(null) && token === null) {
            window.location.href = tokenUrl
        } else if (!urlParams.includes(null) && token === null) {

            dispatch(setToken(urlParams[0]))

            dispatch(fetchFollowers(
                {
                    action: "getFollowers", 
                    message: "Followers data could not be fetched",
                    payload: {method: 'get', url: "https://api.twitch.tv/helix/users/follows", params: {to_id:"210661934"}, headers: {
                                Authorization: `Bearer ${urlParams[0]}`,
                                "client-id":params.client_id
                                                            }
                }}
            ))

        } else if (!urlParams.includes(null) && token !== null) {
            window.location.href = params.redirect_uri
        }

    }, [])
    */

    return (
        <React.Fragment>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="content">
                    <Header params={{numOfFollowers, lastFollower}}/>
                    <Body params={{title: texts.home.title}}/>
                    <Footer params={{music: texts.home.music, composer: texts.home.composer}}/>
            </div>
        </React.Fragment>
    )
}

export default Home