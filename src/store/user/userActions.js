import { types } from "../types"

export const loginSuccess = (user) =>  ({/**user backenden geliyor */
    type: types.LOGIN_SUCCESS,
    payload: user
    // buranin amaci user parametresini alip user tekrar dondermek
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