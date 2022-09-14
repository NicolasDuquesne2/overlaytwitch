import React, {useEffect, useState} from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Body from "../../components/Body"
import {useAxios} from "../../Hooks/useAxios/useAxios"
import useSetUrlWithParams from "../../Hooks/useSetUrlWithParams"
import useGetUrlParams from "../../Hooks/useGetUrlParams"
import {texts} from "../../params/Texts"
import {params, baseUrl, paramsToSearch} from "../../params/UrlTokenRequestParams"
import "./home.css"

function Home() {
    const tokenUrl =  useSetUrlWithParams(baseUrl, params)
    const queryString = window.location.hash
    const urlParams = useGetUrlParams(queryString, paramsToSearch)
    const [query, setQuery] = useState(null)
    console.log(useAxios(query))

    useEffect(() => {
        if (urlParams.includes(null)) {
            window.location.href = tokenUrl
        } else {
            setQuery({
                action: "getFollowers", 
                message: "Followers data could not be fetched",
                payload: {method: 'get', data: {to_id:"210661934"}, headers: {
                            Authorization: `Bearer ${urlParams[0]}`,
                            "client-id":params.client_id
                                                        }
            }})
        }
    }, [])

    return (
        <React.Fragment>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="content">
                    <Header />
                    <Body params={{title: texts.home.title}}/>
                    <Footer params={{music: texts.home.music, composer: texts.home.composer}}/>
            </div>
        </React.Fragment>
    )
}

export default Home