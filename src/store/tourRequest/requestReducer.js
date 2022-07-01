import { types } from "../types";
import { requestInitialState } from "./requestInitialState";

export const requestReducer = (state = requestInitialState, action) => {
    if(action.type === types.SET_TOURREQUEST){
        return {
            ...state,
            tourRequests: action.payload
        }
    }

}