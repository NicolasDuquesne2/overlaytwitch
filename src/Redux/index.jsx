import { configureStore } from '@reduxjs/toolkit'
import followersReducer from './Followers'

const store = configureStore({
    reducer: {
        followers: followersReducer
    }
})

export default store