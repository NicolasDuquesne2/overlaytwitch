import React from "react"

function useGetUrlParams (queryString, paramsTargeted) {
    let params = []

    const urlParams = new URLSearchParams(queryString)
      
    paramsTargeted.map((param) => {
        return params.push(urlParams.get(param))
    })

    return params
}

export default useGetUrlParams