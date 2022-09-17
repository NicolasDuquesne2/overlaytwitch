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
import {params, baseUrl, paramsToSearch, ReqParams} from "../../params/UrlTokenRequestParams"
import "./home.css"

function Home() {

    const dispatch = useDispatch()
    const tokenUrl =  useSetUrlWithParams(baseUrl, params)
    const queryString = window.location.hash
    const urlParams = useGetUrlParams(queryString, paramsToSearch)
    const followers = useSelector(state => state.followers)
    const token = useSelector(state => state.token)
    let numOfFollowers = null
    let lastFollower = null
    
    useEffect(() => {

        const localStorToken = localStorage.getItem('token')
    

        if (urlParams.includes(null) && token.value === null && localStorToken === null) {
            window.location.href = tokenUrl
        }

        if (!urlParams.includes(null) && token.value === null && localStorToken === null) {
            dispatch(setToken(urlParams[0]))
        }

        if (localStorToken !== null) {
            dispatch(setToken(localStorToken))
        }
    
        if (token.value !== null) {

            localStorage.setItem('token', token.value)
            dispatch(fetchFollowers(
                {
                    action: ReqParams.getFollwers.action, 
                    message: ReqParams.getFollwers.message,
                    payload: {method: ReqParams.getFollwers.method, url: ReqParams.getFollwers.baseUrl, params: ReqParams.getFollwers.params, headers: {
                                Authorization: `Bearer ${token.value}`,
                                "client-id":ReqParams.getFollwers.headers.clientId
                                                            }
                }}
            ))
        }

        if (window.location.href !== params.redirect_uri) { window.location.href = params.redirect_uri}

    }, [token])


    if (followers.value !== null) {
        numOfFollowers =  followers.value.total
        lastFollower =  followers.value.data[0].from_name
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
}

export default Home