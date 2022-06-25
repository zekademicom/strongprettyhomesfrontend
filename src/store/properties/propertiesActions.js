import { types } from "../types";

export const setProperties = (properties) => ({
    type: types.SET_PROPERTIES,
    payload: properties
});