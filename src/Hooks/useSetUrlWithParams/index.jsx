import React from "react"

function useSetUrlWithParams(baseUrl, params, route) {
    
    const encodeQueryString = (params) => {
        params.redirect_uri = route
        let urlParams = []
        for (let key in params) {
            let encodedParam = encodeURIComponent(params[key])
            urlParams.push(`${key}=${encodedParam}`)
        }
        return urlParams.join("&")
    }

    const request = `${baseUrl}?${encodeQueryString(params)}`
    return request

}

export default useSetUrlWithParams

