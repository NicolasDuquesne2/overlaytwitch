import React from "react"
import axios from "axios"

/**
 * Return an axios promise
 * @param {*} params 
 * @returns 
 */
export function useAxios(params) {
    
    function fetchAxios(payload, message) {
    
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
    
        return fetchData()
    }

    if (params) {
        return fetchAxios(params.payload, params.message)
    }

}