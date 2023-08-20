import {appId} from "./apid"

const home = "http://localhost:3000/"
const game = "http://localhost:3000/game"
const ending = "http://localhost:3000/ending"
const breaking="http://localhost:3000/break"
const responseType = "token"
const scopes = "user:read:follows user:read:email moderator:read:followers"


export const params = {
    response_type: responseType,
    client_id: appId,
    redirect_uri: home,
    scope: scopes
}

export const routes = {
    home: home,
    game: game,
    ending: ending,
    break: breaking
}

export const baseUrl = "https://id.twitch.tv/oauth2/authorize"

export const paramsToSearch = ["#access_token"]

export const ReqParams = {
    getFollwers: {
        action: "getFollowers",
        message: "Followers data could not be fetched",
        method: "get",
        baseUrl: "https://api.twitch.tv/helix/channels/followers",
        params: {
            broadcaster_id	:"210661934"
        },
        headers: {
            clientId: appId
        }
    },

    getStreamInfos:{
        action:"getStreamInfos",
        message:"Stream infos data could not be fetched",
        method:"get",
        baseUrl:"https://api.twitch.tv/helix/channels",
        params:{
            broadcaster_id:"210661934"
        },
        headers: {
            clientId:appId
        }
    },

    getTracks: {
        action:"getStreamInfos",
        message:"Tracks infos data could not be fetched",
        method:"get",
        baseUrl:"http://localhost:8070"
    }
}