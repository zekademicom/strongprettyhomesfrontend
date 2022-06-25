import { types } from "../types";

// arabalarimiz az oldugu icin merkezi sisteme koyup ihtiyac olunca cagirabildik
// bin araba olsa paging usulu ile 20 20 cagirabiliriz
// bunu da backend den gondermek lazim backenden 20 20 gelmeli mesela
// aksi halde 500 tane gelen arabayi fe paging yapmanin bir anlami yok 

export const setProperties = (properties) => ({
    // BACKENDEN ALINAN ARABALARI BURAYA VERCEZ
    type: types.SET_PROPERTIES,
    payload: properties
});