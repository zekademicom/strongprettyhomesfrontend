import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { getProperties, getSearchProperties } from "./api/property-service";
import CustomRoutes from "./router/custom-routes";
import { useStore } from "./store";
import { setProperties } from "./store/property/propertyActions";
import { getUser } from "./api/user-service";
import { loginSuccess } from "./store/user/userActions";
import { searchReducer } from "./store/search/searchReducer";
import LoadingPage from "./pages/users/LoadingPage";
import { setSearch } from "./store/search/searchActions";


const App = () => {
  const [loading, setLoading] = useState(true);
  const { dispatchUser, dispatchProperty, searchState } = useStore();
  const { initialSearchValues } = searchState;


  const loadData = async () => {
    try {
      console.log();
      let resp = await getProperties();
      dispatchProperty(setProperties(resp.data));

      const token = localStorage.getItem("token");
      if (token) {
        resp = await getUser();
        dispatchUser(loginSuccess(resp.data));
      }

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  

  const loadSearch = async () => {

    try {

      let response = await getSearchProperties(searchReducer);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    
  }

  useEffect(() => {
    loadData();
  }, []);

  
  useEffect(() => {
   loadSearch()
  }, [searchReducer])
  
  if(loading) 
  return(<LoadingPage/>)  

  return (
    <>
      <CustomRoutes />
      <ToastContainer />
    </>
  );
}
export default App;


