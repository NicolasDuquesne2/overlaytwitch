import React from "react"

/**
 * Returns a list of params values from a query string and a list of params wanted
 * @param {*} queryString 
 * @param {*} paramsTargeted 
 * @returns 
 */
function useGetUrlParams (queryString, paramsTargeted) {
    let params = []

    const urlParams = new URLSearchParams(queryString)
      
    paramsTargeted.map((param) => {
        return params.push(urlParams.get(param))
    })

    return params
}

export default useGetUrlParams