import { types } from "../types"
import { searchInitialState } from "./searchInitialState"

export const searchReducer = (state = searchInitialState, action) => {
    if(action.type === types.SET_SEARCH){
        return {
            ...state,
            search: action.payload
        }
    }

}