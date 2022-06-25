import { types } from "../types";
import { userInitialState } from "./userInitialState";

// burada kritik nokta return ettigi anda merkezi sistemi degistiriyor render

export const userReducer = (state = userInitialState, action) =>{

    if(action.type === types.LOGIN_SUCCESS){
        return {
            ...state,
            user: action.payload,
            isUserLogin: true
        }
    }

    else if(action.type === types.LOGIN_FAILED){
        return {
            ...state,
            user: {},/*basarisiz olma durumunda user bosalt bir sey donderme*/
            isUserLogin: false
        }
    }

    else if(action.type === types.LOGOUT){
        return {
            ...state,
            user: {},
            isUserLogin: false
        }
    }

}
// 4-reducer stateleri degistirme kabiliyetine sahip bir fonc yani initialstate i degisitiri actioni alip state degistirir action ise state in ne sekilde guncellenecegini belirler
// 5=>index
