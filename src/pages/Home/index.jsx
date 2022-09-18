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
    const followers = useSelector(state => state.followers.value)
    const followersErr = useSelector(state => state.followers.err)
    const token = useSelector(state => state.token.value)
    let numOfFollowers = null
    let lastFollower = null
    
    
    useEffect(() => {


        const localStorToken = localStorage.getItem('token')
        
        // launches the getting token request if the url is localhost root, no redux token nor token local storage
        if (urlParams.includes(null) && token === null && localStorToken === null) {
            window.location.href = tokenUrl
        }

        // Refresh getting token operation if the token expired
        if (followersErr === "Invalid OAuth token") {
            window.location.href = tokenUrl
        }

        // sets token state if the response of the getting token contains the token param, if token state is null, and no local storage value
        if (!urlParams.includes(null) && token === null && localStorToken === null) {
            dispatch(setToken(urlParams[0]))
        }

        // sets token with the local storage value 
        if (localStorToken !== null) {
            dispatch(setToken(localStorToken))
        }
    
        // if the state token exists then the storage is updated and the followers data is fetched 
        if (token !== null) {

            localStorage.setItem('token', token)
            dispatch(fetchFollowers(
                {
                    action: ReqParams.getFollwers.action, 
                    message: ReqParams.getFollwers.message,
                    payload: {method: ReqParams.getFollwers.method, url: ReqParams.getFollwers.baseUrl, params: ReqParams.getFollwers.params, headers: {
                                Authorization: `Bearer ${token}`,
                                "client-id":ReqParams.getFollwers.headers.clientId
                                                            }
                }}
            ))
        }

        // Redirects to the localhost root
        if (window.location.href !== params.redirect_uri) { window.location.href = params.redirect_uri}

    }, [token, followersErr])


    if (followers !== null) {
        numOfFollowers =  followers.total
        lastFollower =  followers.data[0].from_name
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