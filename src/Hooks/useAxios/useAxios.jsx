import React from "react"
import axios from "axios"


export function useAxios(params) {
    let payload = {}
    let baseUrl = ""

    function fetchAxios(payload, message) {
        let returned = null
    
        async function fetchData() {
            try {
                return await axios(payload)
            } catch (err) {
                switch (err.code) {
                    case "ERR_NETWORK":
                        return {error: err.message}
                    case "ERR_BAD_REQUEST":
                        return {error: err.response.data.message}
                    default:
                        return {error: message}
                }
            } finally {
            }
        }
        
        returned = fetchData()
    
        return returned
    }

    if (params) {
        switch(params.action) {
            case 'getFollowers':
                baseUrl = "https://api.twitch.tv/helix"
                payload = params.payload
                payload.url = `${baseUrl}/users/follows`
                return fetchAxios(payload, params.message)
            default:
        }
    }

}