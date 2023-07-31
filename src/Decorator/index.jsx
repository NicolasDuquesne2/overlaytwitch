import React, {useEffect } from "react"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { fetchFollowers } from "../Redux/Followers/followersSlice"
import useSetUrlWithParams from "../Hooks/useSetUrlWithParams"
import useGetUrlParams from "../Hooks/useGetUrlParams"
import {params, baseUrl, paramsToSearch, ReqParams, routes} from "../params/UrlTokenRequestParams"
import { fetchStreamInfos } from "../Redux/StreamInfos/streamInfosSlice"

function PagesDecorator(Component) {

    return function DecoratedFunction(props){
        const dispatch = useDispatch()
        const tokenUrl =  useSetUrlWithParams(baseUrl, params, routes[props.route])
        const queryString = window.location.hash
        const urlParams = useGetUrlParams(queryString, paramsToSearch)
        const followers = useSelector(state => state.followers.value)
        const followersErr = useSelector(state => state.followers.err)
        const streamInfos = useSelector(state => state.streamInfos.value)
        const streamInfosErr = useSelector(state => state.streamInfos.err)
        let followersData = {}
        let streamInfosData = {}

        useEffect(() => {

            function fetchToken(){

                const localStorToken = localStorage.getItem('token')

                // launches the getting token request if the url is localhost root, no redux token nor token local storage
                if (urlParams.includes(null) && localStorToken === null) {
                    window.location.href = tokenUrl
                }
        
                // Refresh getting token operation if the token expired
                if (followersErr === "Invalid OAuth token" || streamInfosErr === "Invalid OAuth token") {
                    window.location.href = tokenUrl
                }
        
            
                // sets token state if the response of the getting token contains the token param
                if (!urlParams.includes(null)) {
                    localStorage.setItem('token', urlParams[0])
                }
        
                // Redirects to the localhost root
                if (window.location.href !== params.redirect_uri)  {
                    window.location.href = params.redirect_uri
                }

            }


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
                                        "client-id":ReqParams.getFollwers.headers.clientId
                                                                    }
                        }}
                    ))
                }
            }


            function getStreamInfos() {
                if (localStorage.getItem('token') !== null) {
                    const token = localStorage.getItem('token')
                    dispatch(fetchStreamInfos(
                        {
                            action: ReqParams.getStreamInfos.action, 
                            message: ReqParams.getStreamInfos.message,
                            payload: {method: ReqParams.getStreamInfos.method, url: ReqParams.getStreamInfos.baseUrl, params: ReqParams.getStreamInfos.params, headers: {
                                        Authorization: `Bearer ${token}`,
                                        "client-id":ReqParams.getStreamInfos.headers.clientId
                                                                    }
                        }}
                    ))
                }
            }


            function getCurrentSound() {
                fetch("http://localhost:8070")
                .then(res => res.data)
                .then(res => console.log(res))
                .catch(res => console.log(res.error + " Error in getting current sound"))
            }

            fetchToken()
            getFollowers()
            getStreamInfos()
            //getCurrentSound()

            const intervalOnFollowers= setInterval(getFollowers, 120000)
            //const intervalOnCurrSounds = setInterval(getCurrentSound, 10000)

            return () => {
                clearInterval(intervalOnFollowers)
                //clearInterval(intervalOnCurrSounds)
            };
    
        }, [followersErr])

        if (followers != null) {

            followersData.numOfFollowers = followers.total
            followersData.lastFollower = followers.data[0].user_name
        } 

        if(streamInfos != null) {
            streamInfosData.gameName = streamInfos.data[0].game_name
            streamInfosData.title = streamInfos.data[0].title
            streamInfosData.tags = streamInfos.data[0].tags
        }

        //"G:/moi/Documents/Twitch/pretzel_current_music.txt"


        return <Component {...props} followersData={followersData} streamInfosData={streamInfosData}/>
    }

}

export default PagesDecorator