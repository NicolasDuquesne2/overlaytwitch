import React from "react"

/**
 * Builds urls with params
 * @param {*} baseUrl 
 * @param {*} params 
 * @param {*} route 
 * @returns 
 */
function useSetUrlWithParams(baseUrl, params) {
    const encodeQueryString = (params) => {
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

