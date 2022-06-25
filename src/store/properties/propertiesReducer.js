import { types } from "../types";
import { propertiesInitialState } from "./propertiesInitialState";

export const propertiesReducer = (state = propertiesInitialState, action) => {
    if(action.type === types.SET_PROPERTIES){
        return {
            ...state,
            properties: action.payload
        }
    }

}