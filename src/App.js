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
  const { dispatchUser, dispatchProperty } = useStore();


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

  useEffect(() => {
    loadData();
  }, []);


  
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


