import { types } from "../types"


export const loginSuccess = (user) =>  ({
    type: types.LOGIN_SUCCESS,
    payload: user

});

export const loginFailed = () =>  ({
    type: types.LOGIN_FAILED,
});

export const logout = () =>  ({
    type: types.LOGOUT,
});

// 3-action aslinda bir fonc.initialstate in icine yerlestirilecek yapiyi hazirlayan bir fonc bir metod
// initialstate deki user i burada parametre olarak aliyor ama duruma gore almayabilir de.
// icindeki payload datalari transfer ederken kullanilan kavramlardan bir tanesi 4->Reducer

