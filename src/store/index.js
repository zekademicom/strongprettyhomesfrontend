import { createContext, useContext, useReducer } from "react";
import { userInitialState } from "./user/userInitialState";
import { userReducer } from "./user/userReducer";
import { propertyInitialState } from "./property/propertyInitialState";
import { propertyReducer } from "./property/propertyReducer";
import { searchReducer } from "./search/searchReducer";
import { searchInitialState } from "./search/searchInitialState";

// merkezi statin tanimlandigi yer

// user ve vehicle i burada birlestiriyoruz
// dispatch action i reducer a sevkediyor reducer state i degistirir degisen state ilk degerini gunceller

const Store = createContext();

export const useStore = () => useContext(Store);

export const StoreProvider = ({ children }) => {

  const [userState, dispatchUser] = useReducer(userReducer, userInitialState);/*2.usereducer bizim tanimladigimiz */
  // vehicle tanımlaması
  const [propertyState,dispatchProperty] = useReducer(propertyReducer,propertyInitialState);

  const [searchState,dispatchSearch] = useReducer(searchReducer, searchInitialState);


  const storeObject = { userState, dispatchUser , propertyState, dispatchProperty, searchState, dispatchSearch};

  return <Store.Provider value={storeObject}>{children}</Store.Provider>;

};

// comtext api bir parcasi context api 2 sekilde kurulur biri simple birisi de advance yontem.state complexs yapiya sahip degilse ve cok fazla state yoksa simple tercih edilir

// buyuk projelerde tercih edilir.state artikca simple kullanim prob olusturur.
// reducer 4 bolumden olusur TYPE-INITIAL STATE- ACTIONS - REDUCER
// 1=>initialstate
// 5-bizim nihai amacimiz initialstate degistirmek set message butonuna basinca dispatch fonc a actioni cagiriyoruz?? reducer da cagirir. actioni alan reducer dispatchle statei degistirir
