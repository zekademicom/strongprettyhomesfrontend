import { types } from "../types";
import { propertyInitialState } from "./propertyInitialState";

export const propertyReducer = (state = propertyInitialState, action) => {
    if(action.type === types.SET_PROPERTIES){
        return {
            ...state,
            properties: action.payload
        }
    }

}