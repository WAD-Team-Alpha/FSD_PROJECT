import { createSlice } from "@reduxjs/toolkit";

const initialcountState  = {
    followers : 5,
    following : 5,
    followerslist :  ["alex", "brian", "syd", "john", "jeremy"]
   

}
    
export const counterReducer = createSlice({
    name: "counter",
    initialState : initialcountState,
    reducers :{
        follow(state){
            state.followers+=1
        },
        following(state){
            state.following+=1
        },
        remove(state){
            if(state.followers === 0){
                state.followers = 0
            }
            else {
                state.followers-=1
            }

        },
        unfollow(state){
            if(state.following === 0){
                state.following = 0
            }
            else {
                state.following-=1
            }
        },
        removeuser(state,action){
            console.log(action.payload)
            console.log(state)
        }
       

    }

})

export const {follow,following,remove,unfollow,removeuser} = counterReducer.actions
export default counterReducer.reducer