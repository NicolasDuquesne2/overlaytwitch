import React, {useEffect } from "react"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { fetchFollowers } from "../Redux/Followers/followersSlice"
import useSetUrlWithParams from "../Hooks/useSetUrlWithParams"
import useGetUrlParams from "../Hooks/useGetUrlParams"
import {params, baseUrl, paramsToSearch, ReqParams, routes} from "../params/UrlTokenRequestParams"

function PagesDecorator(Component) {

    return function DecoratedFunction(props){
        const dispatch = useDispatch()
        const tokenUrl =  useSetUrlWithParams(baseUrl, params, routes[props.route])
        const queryString = window.location.hash
        const urlParams = useGetUrlParams(queryString, paramsToSearch)
        const followers = useSelector(state => state.followers.value)
        const followersErr = useSelector(state => state.followers.err)
        let numOfFollowers =""
        let lastFollower=""

        useEffect(() => {
            const localStorToken = localStorage.getItem('token')
    
            // launches the getting token request if the url is localhost root, no redux token nor token local storage
            if (urlParams.includes(null) && localStorToken === null) {
                window.location.href = tokenUrl
            }
    
            // Refresh getting token operation if the token expired
            if (followersErr === "Invalid OAuth token") {
                window.location.href = tokenUrl
            }
    
        
            // sets token state if the response of the getting token contains the token param
            if (!urlParams.includes(null)) {
                localStorage.setItem('token', urlParams[0])
            }
        
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
    
            // Redirects to the localhost root
            if (window.location.href !== params.redirect_uri)  {
                window.location.href = params.redirect_uri
            }
    
        }, [followersErr])

        if (followers != null) {
            numOfFollowers =  followers.total
            lastFollower =  followers.data[0].from_name
        } else {
            numOfFollowers =  ""
            lastFollower =  ""
        }

        return <Component {...props} numOfFollowers={numOfFollowers} lastFollower={lastFollower}/>
    }

}

export default PagesDecorator