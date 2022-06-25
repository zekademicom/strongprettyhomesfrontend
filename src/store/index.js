import { createContext, useContext, useReducer } from "react";
import { userInitialState } from "./user/userInitialState";
import { userReducer } from "./user/userReducer";
import { propertiesInitialState } from "./properties/propertiesInitialState";
import { propertiesReducer } from "./properties/propertiesReducer";

const Store = createContext();

export const useStore = () => useContext(Store);

export const StoreProvider = ({ children }) => {
  const [userState, dispatchUser] = useReducer(userReducer, userInitialState);
  const [propertyState, dispatchProperty] = useReducer(propertiesReducer,propertiesInitialState);

  const storeObject = { userState, dispatchUser,propertyState, dispatchProperty  };

  return <Store.Provider value={storeObject}>{children}</Store.Provider>;
};
