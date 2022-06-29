import { types } from "../types";

export const setSearch = (search) => ({
  type: types.SET_SEARCH,
  payload: search
});
