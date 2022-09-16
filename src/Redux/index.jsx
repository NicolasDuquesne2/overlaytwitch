import { configureStore } from '@reduxjs/toolkit'
import followersReducer from './Followers/followersSlice'
import token from './Token/tokenSlice'

const store = configureStore({
    reducer: {
        followers: followersReducer,
        token: token
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})

export default store