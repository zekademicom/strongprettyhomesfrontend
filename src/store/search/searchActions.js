import { types } from "../types";

export const setSearch = (search) => ({
    // BACKENDEN ALINAN ARABALARI BURAYA VERCEZ
    type: types.SET_SEARCH,
    payload: search
});