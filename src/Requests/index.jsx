import React, {useEffect, useState} from "react"
import axios from "axios"

function Request() {
    const href = window.location.href
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

    const request = `https://id.twitch.tv/oauth2/authorize?${encodeQueryString(params)}`
    console.log(request)
    console.log(href)

}

export default Request

