
import useGetUrlParams from "../useGetUrlParams"
import useSetUrlWithParams from "../useSetUrlWithParams"
import {params, baseUrl, paramsToSearch, routes} from "../../params/UrlTokenRequestParams"
import { useEffect } from "react"
import {useSelector } from "react-redux/es/exports"


/**
 * Manages token fetching and stocking according to its presence in the local store; its lifetime.
 * Redirects to the root route after getting the token
 * @param {*} route 
 */
function useHandleToken(route) {
    params.redirect_uri = routes[route]
    const queryString = window.location.hash
    const urlParams = useGetUrlParams(queryString, paramsToSearch)
    const tokenUrl =  useSetUrlWithParams(baseUrl, params)
    const followersErr = useSelector(state => state.followers.err)
    const streamInfosErr = useSelector(state => state.streamInfos.err)

    useEffect(() => {
        
        const localStorToken = localStorage.getItem('token')

        // launches the getting token request if the url is localhost root, and if no redux token nor token local storage
        if (urlParams.includes(null) && localStorToken === null) {
            window.location.href = tokenUrl
        }

        // Refresh getting token operation if the token expired
        if (followersErr === "Invalid OAuth token" || streamInfosErr === "Invalid OAuth token") {
            window.location.href = tokenUrl
        }

    
        // Sets token state if the response of the getting token contains the token param
        if (!urlParams.includes(null)) {
            localStorage.setItem('token', urlParams[0])
        }

        /** 
         *Redirects to the localhost root when the token has been stored. 
         *We are stuck on the response url containing the token
         */ 
        if (window.location.href !== params.redirect_uri)  {
            window.location.href = params.redirect_uri
        }
    }, [followersErr, streamInfosErr])
}

export default useHandleToken