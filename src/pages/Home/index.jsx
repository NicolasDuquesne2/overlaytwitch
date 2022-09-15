import React, {useEffect } from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Body from "../../components/Body"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { fetchFollowers } from "../../Redux/Followers/followersSlice"
import useSetUrlWithParams from "../../Hooks/useSetUrlWithParams"
import useGetUrlParams from "../../Hooks/useGetUrlParams"
import {texts} from "../../params/Texts"
import {params, baseUrl, paramsToSearch} from "../../params/UrlTokenRequestParams"
import "./home.css"

function Home() {
    const dispatch = useDispatch()
    const tokenUrl =  useSetUrlWithParams(baseUrl, params)
    const queryString = window.location.hash
    const urlParams = useGetUrlParams(queryString, paramsToSearch)
    const followers = useSelector(state => state.followers)
    console.log(followers)


    useEffect(() => {
        if (urlParams.includes(null)) {
            window.location.href = tokenUrl
        } else {

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
        }

    }, [])

    return (
        <React.Fragment>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="content">
                    <Header />
                    <Body params={{title: texts.home.title}}/>
                    <Footer params={{music: texts.home.music, composer: texts.home.composer}}/>
            </div>
        </React.Fragment>
    )
}

export default Home