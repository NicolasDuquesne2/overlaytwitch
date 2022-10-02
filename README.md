# Getting Started with twitch app

This simple twitch app displays 3 scenes : Enter, game, and ending.
Two datas are displayble for now (further improvements)
this app is optimized for [Implicit grant flow](https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#implicit-grant-flow) (front end app)
this app need to [register an app at Twitch](https://dev.twitch.tv/docs/authentication/register-app)
below informations on how to prepare params

## Requirements

Install [NodeJs](https://nodejs.org/en/)
If needed change [the scripts policy for windows](https://windowsloop.com/enable-powershell-scripts-execution-windows-10/)

## Installation

clone this app,
Go in the app folder
execute npm install

## Text params

create a params folder under src
create a Text.jsx file
put this data template

export const texts = {
    home: {
        title: "",
        music: "",
        composer: ""
    },
    game: {
        title: ""
    },
    ending: {
        title: "",
        music: "",
        composer: ""
    }
}

write what you want between quotes

## Requests params

create UrlTokenRequestParams.jsx document within the params folder

Then copy params below

This app is optimized for [Implicit grant flow](https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#implicit-grant-flow) then

by default a react app starts on port 3000. change it if you changed this
but don't modify routes game & ending

You must create an [app for twitch](https://dev.twitch.tv/docs/authentication/register-app) and get the app id
const appId = ""
const home = "http://localhost:3000/"
const game = "http://localhost:3000/game"
const ending = "http://localhost:3000/ending"
const responseType = "token"

const scopes = "user:read:follows user:read:email"

Not need to modify that
export const params = {
    response_type: responseType,
    client_id: appId,
    redirect_uri: "",
    scope: scopes
}

Not need to modify that
export const routes = {
    home: home,
    game: game,
    ending: ending,
}

Not need to modify that - the default base url to get the auth token
export const baseUrl = "https://id.twitch.tv/oauth2/authorize"


Not need to modify that
export const paramsToSearch = ["#access_token"]

modify only your to_id, corresponding to digits in your stream id
export const ReqParams = {
    getFollwers: {
        action: "getFollowers",
        message: "Followers data could not be fetched",
        method: "get",
        baseUrl: "https://api.twitch.tv/helix/users/follows",
        params: {
            to_id:""
        },
        headers: {
            clientId: appId
        }
    }
}



