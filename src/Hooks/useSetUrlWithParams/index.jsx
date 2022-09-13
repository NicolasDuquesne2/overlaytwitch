import React from "react"

function useSetUrlWithParams() {
    const twitchAuthUrl = "https://id.twitch.tv/oauth2/authorize"
    const appId = "qrkfsj1g5t9cdtadlev9ngnkcvucg8"
    const redirectUri = "http://localhost:3000/"
    const responseType = "token"
    const scopes = "channel:read:vips user:read:email"

    const params = {
        response_type: responseType,
        client_id: appId,
        redirect_uri: redirectUri,
        scope: scopes
    }

    const encodeQueryString = (params) => {
        let urlParams = []
        for (let key in params) {
            let encodedParam = encodeURIComponent(params[key])
            urlParams.push(`${key}=${encodedParam}`)
        }
        return urlParams.join("&")
    }

    const request = `${twitchAuthUrl}?${encodeQueryString(params)}`
    return request

}

export default useSetUrlWithParams

